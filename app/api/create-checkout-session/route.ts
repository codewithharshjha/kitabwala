import prisma from "@/db.config";
import { clerkClient, getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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

export async function POST(request: NextRequest) {
    const { book, customer }: { book: any, customer: Customer } = await request.json();
    const {userId}=getAuth(request)

    const user = userId ? await clerkClient.users.getUser(userId) : null;
    console.log(user)
    const emailaddress=user?.primaryEmailAddress?.emailAddress
    const phonenumber=user?.primaryPhoneNumber?.phoneNumber
console.log(userId)
    const redirectURL =
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : 'https://stripe-checkout-next-js-demo.vercel.app';

    try {
        const transformedItem = {
            price_data: {
                currency: 'INR',
                product_data: {
                    images: [book.imageUrl],
                    name: book.name,
                },
                unit_amount: book.price * 100,
            },
            quantity: 1,
        };
        // success_url: `${redirectURL}/paymentcompleted?status=success`,
        // cancel_url: `${redirectURL}/paymentcompleted?status=error`,
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [transformedItem],
            mode: 'payment',
            success_url: `${redirectURL}?successpayment?status=success`,
            cancel_url: `${redirectURL}?errorpayment?status=error`,
            metadata: {
                images: book.imageUrl,
                customer_name: customer.name,
                customer_address: JSON.stringify(customer.address), // Store customer address as a JSON string
            },
            shipping_address_collection: {
                allowed_countries: ['IN'],
            },
        });
console.log("this is session id",session)
const order=await prisma.order.create({
   data:{
       bookname:book.name,
    price:session?.amount_subtotal,
    quantity:1,
    totlprice:session?.amount_subtotal+40,

    sessionId:session.id,
    buyername:customer.name,

    buyeremail:emailaddress!,
    buyerphone:phonenumber!,

buyeraddress:JSON.stringify(customer.address),
buyerphonenumber:phonenumber!,
orderdate:JSON.stringify(Date.now())





    

    
    
    
   }
   
})

        return NextResponse.json({ status: 200, id: session.id });
    } catch (error) {
        console.error(error);
        return NextResponse.json({status:400,message:error})
    }}