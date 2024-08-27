"use client"
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ExpandableCardDemo } from './Bestoffer'
import ProductCard from './ProductCard'
import { useToast } from '@/components/ui/use-toast'
import axios from 'axios'
import Link from 'next/link'
import { Card, CardDescription, CardTitle, HoverEffect } from '@/components/ui/card-hover-effect'
import CategorySection from './CategorySection'

function FourthSection() {
  const toast=useToast()
      const [allBooks, setAllBooks] = useState<SearchBook[]>([]);
      const[category,setCategory]=useState<Category[]>([])
      useEffect(() => {
        axios.get("/api/category").then((res) => {
          const response = res.data;
       
          if (response.status == 400) {
         toast.toast({
          title:`${response.message}`
         })
          } else if (response.status == 200) {
            console.log("yai print ho rha")
            setCategory(response.category);
          }
        });
      }, []);
      useEffect(() => {
        axios.get("/api/allbooks").then((res) => {
          const response = res.data;
        console.log(response)
          if (response.status === 400) {
         toast.toast({
          title:`${response.message}`
         })
          } else if (response.status === 200) {
            setAllBooks(response.allbooks);
          }
        });
      }, []);
    

      const slicebookarray=allBooks.slice(0,4)
 
  return (
    <div className='  p-5 rounded-2xl h-auto w-auto overflow-auto bg-gradient-to-r from-teal-50 to-cyan-500'>
      <div className=' text-center'>
        <h1 className=' text-4xl font-bold' data-aos="zoom-in-" >Popular Books</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  '>
        {slicebookarray && slicebookarray.length>0 ?
        (
slicebookarray?.map((book,index)=>(
  <CardContainer className="inter-var"data-aos="zoom-in">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {book.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
         {book.description}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={book?.imageUrl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-1 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
         <Link  href={`/books/${book.id}`}>Add to Cart</Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
))
        ):(
          <span className=' font-bold text-4xl'>No Book Found</span>
        )}

    
  
      </div>
      <div  className=' h-auto w-auto bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-3xl '>
        <h1 className=' text-8xl font-bold ml-24 mt-10' data-aos="fade-down-right"> The Best Offer</h1>

        {/* <ExpandableCardDemo/> */}
        <div className='flex justify-center'>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-60 mr-24 mt-20'>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
  </div>
</div>
      
      </div>
  
      
    </div>
  )
}

export default FourthSection
