"use client"
import Image from 'next/image'
import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';


function AddToCartCard({ book }: { book: any }) {
    const toast=useToast()
    const router=useRouter()
   
    const redirectToInfoPage = () => {
        // Ensure book object is serialized properly
        const bookString = JSON.stringify(book);
        
        // Create the URL with query parameters
        const url = `/Information?book=${encodeURIComponent(bookString)}`;
      
        router.push(url);
      };
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <Image className="w-full h-full object-cover rounded-3xl"unoptimized width={300}height={300}  src={book?.imageUrl || 'https://via.placeholder.com/300'}
 alt="Product Image"/>
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                        <Button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={redirectToInfoPage}>Add to Cart</Button>
                    </div>
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                   {book.name}
                </p>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span className="text-gray-600 dark:text-gray-300">{book.price}</span>
                    </div>
                   <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Category</span>
                        <span className="text-gray-600 dark:text-gray-300">{book.subject}</span>
                    </div> 
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Class</span>
                    <div className="flex items-center mt-2">
                      {book.class}
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Author</span>
                    <div className="flex items-center mt-2">
          {book.author}
                    </div>
                </div>
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {book.description}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default AddToCartCard
