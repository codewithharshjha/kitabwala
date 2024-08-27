"use client"
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '';
const stripePromise = loadStripe(publishableKey);

interface Address {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalcode: string;
    country: string;
}

interface Customer {
    name: string;
    address: Address;
}

function InformationPage() {
    const toast = useToast();
    const [customer, setCustomer] = useState<Customer>({
        name: "",
        address: {
            line1: "",
            line2: "",
            city: "",
            state: "",
            postalcode: "",
            country: ""
        }
    });

    const searchParams = useSearchParams();
    const bookString = searchParams.get('book');
    const book = bookString ? JSON.parse(decodeURIComponent(bookString)) : null;

    if (!book) {
        return <div>No book data found.</div>;
    }

    const handleAddressInput = async (e: React.FormEvent) => {
        e.preventDefault();
        const stripe = await stripePromise;
        const checkoutSession = await axios.post("/api/create-checkout-session", {
            book, customer
        });
        const result = await stripe?.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });
        console.log(result)
        if (result?.error) {
            toast.toast({
                title: `${result.error.message}`
            });
        }
    };

    return (
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Address!</h1>
                </div>
                <form onSubmit={handleAddressInput} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label htmlFor="name" className="sr-only">Name</label>
                        <div className="relative">
                            <Input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter name"
                                onChange={(e) => setCustomer({
                                    ...customer,
                                    name: e.target.value
                                })} required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="line1" className="sr-only">Line1</label>
                        <div className="relative">
                            <Input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Line1"
                                onChange={(e) => setCustomer({
                                    ...customer,
                                    address: {
                                        ...customer.address,
                                        line1: e.target.value
                                    }
                                })} required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="line2" className="sr-only">Line2</label>
                        <div className="relative">
                            <Input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Line2"
                                onChange={(e) => setCustomer({
                                    ...customer,
                                    address: {
                                        ...customer.address,
                                        line2: e.target.value
                                    }
                                })} required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="city" className="sr-only">City</label>
                        <div className="relative">
                            <Input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter City"
                                onChange={(e) => setCustomer({
                                    ...customer,
                                    address: {
                                        ...customer.address,
                                        city: e.target.value
                                    }
                                })} required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="state" className="sr-only">State</label>
                        <div className="relative">
                            <Input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter State"
                                onChange={(e) => setCustomer({
                                    ...customer,
                                    address: {
                                        ...customer.address,
                                        state: e.target.value
                                    }
                                })} required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="postalcode" className="sr-only">Postal-code</label>
                        <div className="relative">
                            <Input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Postalcode"
                                onChange={(e) => setCustomer({
                                    ...customer,
                                    address: {
                                        ...customer.address,
                                        postalcode: e.target.value
                                    }
                                })} required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="country" className="sr-only">Country</label>
                        <div className="relative">
                            <Input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Country"
                                onChange={(e) => setCustomer({
                                    ...customer,
                                    address: {
                                        ...customer.address,
                                        country: e.target.value
                                    }
                                })} required
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <Button type="submit" className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-black">
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <Image
                    alt=""
                    src={book?.imageUrl}
                    className="absolute inset-0 h-full w-full object-cover rounded-3xl"
                    width={300} height={300} unoptimized
                />
            </div>
        </section>
    );
}

export default InformationPage;
