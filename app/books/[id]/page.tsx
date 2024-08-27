"use client"
import AddToCartCard from '@/app/components/AddToCartCard'
import BookCard from '@/app/components/BookCard'
import { useToast } from '@/components/ui/use-toast'
import axios from 'axios'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function page() {
  const [bookdata,setBookdata]=useState<BookToSell[]>([])
    const id=useParams()
  const toast=useToast()
  useEffect(()=>{
    axios.get("/api/book",{
      params: { id }
    }).then((res)=>{
        const response=res.data
       
        if(response.status==400){
            toast.toast({
              title:`${response.mesage}`
            })
        }
        else if(response.status==200){
          setBookdata(response.book)

        }
    })
  
  },[])
console.log(bookdata)
  return (
    <>
    
    {bookdata && <AddToCartCard book={bookdata} />}
    </>
  )
}

export default page
