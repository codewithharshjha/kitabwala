"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import React, { FormEvent, useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation';

function page() {
  const[sellerUser,setSellerUser]=useState<SellerUser>({
  
    phoneNumber:"",
    Email: '',
    FirstName: '',
    LastName: '',
    Address1: '',
    Address2: '',
    Country: '',
    City: '',
    State: '',
    Zip: '',
    PanCardNumber: '',
    AadharCardNumber: '',
    GSTNumber: '',
    Password: '',
    ConfirmPassword: ''
  });

  const[errors,setErrors]=useState<SellerUserErrorType>()
  const[loading,setLoading]=useState<boolean>(false)
 const router=useRouter()
 
  const HandleUserDataChange=(e:React.FormEvent)=>{
    e.preventDefault()
    setLoading(true)
    axios
    .post("/api/sellerUser", sellerUser)
    .then((res) => {
      setLoading(false);
      const response = res.data;
      console.log(response)
     if (response.status == 400) {
         setErrors(response.errors);
         console.log(response.errors)
         toast.success(`${response.message}`, {
          position: "top-right",
        });
       
       } else if (response.status == 200) {
        toast.success("Success Notification !", {
          position: "top-right",
       
        });
        router.push("/sellbook")

      }
    })
    .catch((err) => {
      setLoading(false);
      console.log("The error is", err);
    });

  
  }
  return (
   
    
    <section className=" py-1 bg-blueGray-50">
    <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              My account
            </h6>
            
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={HandleUserDataChange}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
             
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                    Email address
                  </label>
              
                  <Input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={sellerUser.Email} onChange={(e)=>setSellerUser({...sellerUser,Email:e.target.value})} required/>
                  <span className=' text-red-500 font-bold'>{errors?.Email}</span>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
              Phone-Number
                  </label>
                  <Input type='text' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={sellerUser.phoneNumber} onChange={(e)=>setSellerUser({ ...sellerUser,phoneNumber:e.target.value} )} required/>
                  <span className=' text-red-500 font-bold'>{errors?.phoneNumber}</span>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                    First Name
                  </label>
                  <Input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={sellerUser.FirstName} onChange={(e)=>setSellerUser({...sellerUser,FirstName:e.target.value})} required/>
                  <span className=' text-red-500 font-bold'>{errors?.FirstName}</span>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                    Last Name
                  </label>
                  <Input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={sellerUser.LastName} onChange={(e)=>setSellerUser({...sellerUser,LastName:e.target.value})} required/>
                  <span className=' text-red-500 font-bold'>{errors?.LastName}</span>
                </div>
              </div>
            </div>
    
            <hr className="mt-6 border-b-1 border-blueGray-300"/>
    
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                    Address1
                  </label>
                  <Input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={sellerUser.Address1} onChange={(e)=>setSellerUser({...sellerUser,Address1:e.target.value})} required/>
                  <span className=' text-red-500 font-bold'>{errors?.Address1}</span>
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                    Address2
                  </label>
                  <Input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={sellerUser.Address2} onChange={(e)=>setSellerUser({...sellerUser,Address2:e.target.value})} />
                  <span className=' text-red-500 font-bold'>{errors?.Address2}</span>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                    City
                  </label>
                  <Input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={sellerUser.City} onChange={(e)=>setSellerUser({...sellerUser,City:e.target.value})} required/>
                  <span className=' text-red-500 font-bold'>{errors?.City}</span>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                    Country
                  </label>
                  <Input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={sellerUser.Country} onChange={(e)=>setSellerUser({...sellerUser,Country:e.target.value})} required/>
                  <span className=' text-red-500 font-bold'>{errors?.Country}</span>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                   State
                  </label>
                  <Input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={sellerUser.State} onChange={(e)=>setSellerUser({...sellerUser,State:e.target.value})} required/>
                  <span className=' text-red-500 font-bold'>{errors?.State}</span>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                    Postal Code
                  </label>
                  <Input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  value={sellerUser.Zip} onChange={(e)=>setSellerUser({...sellerUser,Zip:e.target.value})} required/>
                  <span className=' text-red-500 font-bold'>{errors?.Zip}</span>
                </div>
              </div>
            </div>
    
            <hr className="mt-6 border-b-1 border-blueGray-300"/>
    
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              About Me
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                    About me
                  </label>
                  <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3 mt-5">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                   PanCard Number
                  </label>
                  <Input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  value={sellerUser.PanCardNumber} onChange={(e)=>setSellerUser({...sellerUser,PanCardNumber:e.target.value})} required/>
                  <span className=' text-red-500 font-bold'>{errors?.PanCardNumber}</span>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                   AadharCard Number
                  </label>
                  <Input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  value={sellerUser.AadharCardNumber} onChange={(e)=>setSellerUser({...sellerUser,AadharCardNumber:e.target.value})} required/>
                  <span className=' text-red-500 font-bold'>{errors?.AadharCardNumber}</span>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                 Gst Number
                  </label>
                  <Input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={sellerUser.GSTNumber} onChange={(e)=>setSellerUser({...sellerUser,GSTNumber:e.target.value})} />
                  <span className=' text-red-500 font-bold'>{errors?.GSTNumber}</span>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                   Password
                  </label>
                  <Input type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={sellerUser.Password} onChange={(e)=>setSellerUser({...sellerUser,Password:e.target.value})} required/>
                  <span className=' text-red-500 font-bold'>{errors?.Password}</span>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                 Confirm Password
                  </label>
                  <Input type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  value={sellerUser.ConfirmPassword} onChange={(e)=>setSellerUser({...sellerUser,ConfirmPassword:e.target.value})} required/>
                  <span className=' text-red-500 font-bold'>{errors?.ConfirmPassword}</span>
                </div>
              </div>
            
                </div>
              </div>
            </div>
            <div>
            <Button type='submit' disabled={loading}>Submit</Button>
            </div>
          </form>
        
        </div>
      </div>
     
    </div>
    </section>
  )
}

export default page
