import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
interface Book {
    name: string;
    description: string;
    imageUrl: string;
    price:string;
    author:string;
    class:string;
    category:string;
    id :string;
   
    // Add other properties if needed
  }
function BookCard(book:Book) {
    console.log(book)
  return (
    <div className="w-72 bg-white  rounded-xl duration-500 hover:scale-105 hover:shadow-xl shadow-[0px_16px_16px_0px_#0000004d,0px_16px_16px_0px_#0000004d,0px_16px_16px_0px_#0000004d]">
    <a href="#">
        <img src={book?.imageUrl}
                alt="Product" className="h-80 w-72 object-cover rounded-t-xl" data-aos="zoom-in"/>
        <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <p className="text-lg font-bold text-black truncate block capitalize">{book?.name}</p>
            <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">{book?.price}</p>
                <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                </del>
               <Link href={`/books/${book?.id}`}>
               <Button>Add to cart</Button>
               </Link>
                <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                        <path
                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg></div>
            </div>
        </div>
    </a>
</div>
  )
}

export default BookCard
