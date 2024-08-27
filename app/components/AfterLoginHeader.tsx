"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {  HouseIcon, Menu, Search } from "lucide-react";

import React, { ReactEventHandler, useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ThemeModeToggle } from "./ThemeModeToggle";
import {  UserButton, useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { ScrollAreaScrollbar } from "@radix-ui/react-scroll-area";



function AfterLoginHeader() {
  const[isSellerUser,setIsSellerUser]=useState<boolean>(false)
  const { user } = useUser()
  const [categories, setCategories] = useState<Category[]>([]);
const[query,setQuery]=useState("")
const[ans,setAns]=useState<SearchBook[]>([])
const [loading,setLoading]=useState<boolean>(false)
const toast=useToast()
const router=useRouter()
const email=user?.primaryEmailAddress?.emailAddress||""
useEffect(() => {
  axios.get("/api/sellerUser", {
    params: { email } // Send email as a query parameter
  })
  .then((res) => {
    const response = res.data;
   
    if (response.status === 400) {
      setIsSellerUser(false);
    } else if (response.status === 200) {
      setIsSellerUser(true);
    }
  })
  .catch((err) => {
    setIsSellerUser(false);
    console.log("The error is", err);
  });
}, [email]); // Add email as a dependency to the useEffect

useEffect(() => {
  axios.get("/api/category")
    .then((res) => {
      const response = res.data;
      
      if (response.status === 400) {
        setCategories([]);
      } else   {
        
      
        // const categoryData = response.category.map((cat: Category) => cat.category) 

        // console.log("Mapped Categories Data:", categoryData);
        setCategories(response.category);


      
      }
    })
    .catch((err) => {
      setCategories([]);
      console.log("The error is", err);
    });
}, []);
async function submitSearchHandler(e:React.FormEvent){
  e.preventDefault()
  setLoading(true)
  axios.get("/api/search", {
    params: {query } // Send email as a query parameter
  })
  .then(async(res) => {
    const response =  res.data;
    console.log(response);
    if (response.status == 400) {
 toast.dismiss(`${response.message}`)
 setLoading(false)

    } else if (response.status === 200) {
      console.log("Books Data:", response.books); // Check this output
      setAns(response.books); // Update state
      toast.toast({ title: "Book Found" });
      setLoading(false);
    
    }
  })
  .catch((err) => {
    setIsSellerUser(false);
    console.log("The error is", err);
  });
}

useEffect(() => {
  if (ans.length > 0) {
    // Navigate to the first book's detail page
    router.push(`/books/${ans[0].id}`);
  }
}, [ans, router]);


    
  


  return (
    <>

<header className=" bg-black shadow rounded-sm">
  <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
    <div className="relative h-16 flex justify-between">
      <div className="relative z-10 px-2 flex lg:px-0">
        <div className="flex-shrink-0 flex items-center">
          <img className="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
          <span className=" font-bold text-2xl text-white">Kitabwalah</span>
        </div>
      </div>
      <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
        <div className="w-full sm:max-w-xs">
          <label htmlFor="search" className="sr-only">Search</label>
          <div className=" flex justify-end gap-2">
           
            <Input id="search" name="search" className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search" type="search" onChange={(e)=>setQuery(e.target.value)}/>
           
             <Button className="" onClick={submitSearchHandler} type="submit"disabled={loading}>
             <Search/>
             </Button>
            
          </div>
        </div>
      </div>
      <div className="relative z-10 flex items-center lg:hidden">
      
        <button type="button" className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open menu</span>
         
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
        <button type="button" className="flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="sr-only">View notifications</span>

          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>

       
        <div className="flex-shrink-0 relative ml-4 items-center mt-2">
         
<UserButton />
      
     
         
        </div>
      </div>
    </div>
<div className=" flex items-center justify-between bg-white rounded-lg">
<nav className=" lg:py-2 lg:flex lg:space-x-8 flex items-center" aria-label="Global">
  
  <Link href="/" className="bg-gray-100 text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium" aria-current="page"> Dashboard </Link>

  <Link href="/allbooks" className=" text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"> Books </Link>

  <a href="#" className="text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"> Projects </a>

  <a href="#" className="text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"> Calendar </a>



 

</nav>
<div className=" space-x-1 flex items-center gap-5 mr-5">
 

  
<Sheet>
  <SheetTrigger>
  <Menu className=" text-black" />
  </SheetTrigger>
  <SheetContent>
  <ScrollArea className='h-[800px] w-[350px] rounded-md  p-4 bg'>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      
    </SheetHeader>
   
 <div className=" flex flex-col space-y-2 w-20 mt-5">

 {
  categories.length > 0 ? (
    categories.map((cat) => (
      <Button key={cat.id}>
        <Link href={`/${cat.category}`}>
          {cat.category}
        </Link>
      </Button>
    ))
  ) : (
    <span>No categories</span>
  )
}
 
 {
  user?.primaryEmailAddress?.emailAddress=="hjha3987@gmail.com"&&
   <Button className=" bg-violet-600">
   <Link href={"/admin"}>Admin</Link>
    </Button>
 }

 </div>
 </ScrollArea>
  </SheetContent>
</Sheet>

<ThemeModeToggle/>
<div >
  <Link href={"/seller"}className=" flex gap-2">
  
  {isSellerUser ?(
    
    <Link href={"/sellbook"} className=" flex gap-2">
      <HouseIcon/>
    <span className=" text-sm text-gray-500">Sell Book</span>
  </Link>):(
   <Link href={"/seller"} className=" flex gap-2"><span>Become Seller</span></Link>
  )}

  </Link>

</div>

</div>

</div>
  
    <div>
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
 
</header>

    </>
  );
}

export default AfterLoginHeader;
