"use client"
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import axios from 'axios'

import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

function page() {
const[category,setCategory]=useState("")
const {toast}=useToast()
const[subject,setSubject]=useState("")
const [classes,setClasses]=useState("")
const [loading,setLoading]=useState<boolean>(false)
const router=useRouter()
const onSubmithandler =(e: React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
setLoading(true) 
if(classes.length>0){
  console.log("this is classes",{class:classes})
    axios.post("/api/class",{class:classes}).then((res)=>{
        const response=res.data
        if(response.status==400){
            
            setLoading(false)
            toast({
              title:`${response.message}`,
                 variant:"destructive"
            })
            router.refresh()
        }

        
    if(response.status==200){
      toast({
        title: `${response.message}`,
      
      })
        setLoading(false)
        setClasses("")
        router.refresh()
    }
    
    })
}
if(subject.length>0){
  console.log("this is subject",{subject:subject})
    axios.post("/api/subject",{subject:subject}).then((res)=>{
        const response=res.data
        if(response.status==400){
          toast({
            title:`${response.message}`,
               variant:"destructive"
          })
            setLoading(false)
            router.refresh()
        }
    if(response.status==200){
       
        setLoading(false)
        setSubject("")
        toast({
          title: `${response.message}`,
 
        })
        router.refresh()
    }
    
    })
}
if(category.length>0){
    axios.post("/api/category",{category:category}).then((res)=>{
        const response=res.data
        if(response.status==400){
          toast({
            title:`${response.message}`,
           variant:"destructive"
          })
            setLoading(false)
            router.refresh()
        }
    if(response.status==200){
      toast({
        title: `${response.message}`,
     variant:"default"
      })
        setLoading(false)
        setCategory("")
        router.refresh()
    }
    
    })
}
}
  return (
<>
   
<section className="relative flex flex-wrap lg:h-screen lg:items-center bg-gradient-to-r from-neutral-300 to-stone-400">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
   

    <form  className="mx-auto mb-0 mt-[-190px] max-w-md space-y-4  bg-gradient-to-r from-blue-800 to-indigo-900 rounded-3xl shadow-[0px_16px_16px_0px_#0000004d] transition duration-500 group-hover:scale-105 "onSubmit={onSubmithandler}>
    <div className=' h-full'>
    <div className=' text-center text-3xl font-bold'>
        <h1 className=' p-10'> Admin Portal</h1>
    </div>
    <div className=' flex justify-center   '>
    <Tabs defaultValue="account" className="w-[400px]  rounded-lg h-48 p-10">
  <TabsList>
    <TabsTrigger value="subject"  >Subject</TabsTrigger>
    <TabsTrigger value="category">Category</TabsTrigger>
    <TabsTrigger value="class">Class</TabsTrigger>
  </TabsList>

  <TabsContent value="category">
    <Input placeholder=' Category' onChange={(e)=>setCategory(e.target.value)} type='text'/>
  </TabsContent>
  <TabsContent value="class">
    <Input placeholder=' Enter the Class' onChange={(e)=>setClasses(e.target.value)} type='text'/>
  </TabsContent>
  <TabsContent value="subject">
    <Input placeholder=' Enter the subject'onChange={(e)=>setSubject(e.target.value)} type='text'/>
  </TabsContent>
</Tabs>
    </div>

<div className=' text-center p-5'>

<Button type='submit'disabled={loading}>Submit</Button>
</div>

</div>

    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt=""
      src="/book3.jpg"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>

</>
  )
}

export default page
