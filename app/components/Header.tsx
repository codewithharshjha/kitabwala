"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AlignCenter, Bus, HamIcon, House, List, Search } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import { ThemeModeToggle } from './ThemeModeToggle'
import { SignOutButton, useAuth, useUser } from '@clerk/nextjs'
import AfterLoginHeader from './AfterLoginHeader'

function Header() {
  const{isSignedIn}=useUser()
  console.log(isSignedIn)
 const [isAuthenticated,setIsAuthenticated]=useState(false)
  return (
   <>
   
{isSignedIn ? (
  <AfterLoginHeader/>
):(
<nav className=' bg-black flex items-center justify-between'>
  <div className=' flex items-center px-5  '>
    <Image src={"/logo.svg"}height={80} width={80}alt='logo'/>
    <span className=' font-bold text-3xl text-white'>Kitabwala</span>
  </div>

 
<div className=' space-x-2 mr-2 items-center flex'>
<Link href={"/sign-in"}>
  
  <Button className=" text-sm gap-2">  SignIn</Button>   </Link>
<Link href={"/sign-up"}>
<Button className=" text-sm">SignUp</Button>
</Link>
   
   

    <ThemeModeToggle />
  
  </div>

  
  
 
  


</nav>
)}

   </>
  )
}

export default Header
