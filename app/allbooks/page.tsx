// app/allbooks/page.tsx
"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import BookCard from '../components/BookCard'

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

function Page() {
  const [allBooks, setAllBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get("/api/allbooks").then((res) => {
      const response = res.data;
    console.log(response)
      if (response.status === 400) {
        toast.error(`${response.message}`);
      } else if (response.status === 200) {
        setAllBooks(response.allbooks);
      }
    });
  }, []);

  return (
    <div className=''>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4" data-aos="zoom-in">Kitabwala All Books</h1>
        <h1 className="text-3xl" data-aos="zoom-in">Books Of Best Quality</h1>
      </div>

      <section id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 ">
        {
          allBooks.length > 0 ? (
            allBooks.map((book, index) => (
              <BookCard
              
                key={index}
                name={book.name}
                description={book.description}
                imageUrl={book.imageUrl}
                price={book.price}
                author={book.author}
                class={book.class}
                category={book.category}
              id={book.id}
              />
            ))
          ) : (
            <span>No Books</span>
          )
        }
      </section>

      
    </div>
  )
}

export default Page;
