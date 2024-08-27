"use client";
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';
import { toast } from 'react-toastify';
import axios from 'axios';



function Page() {
  const [bookToSell, setBookToSell] = useState<BookToSell>({
   
    name: "",
    description: "",
    category: "",
    price: "",
    imageUrl: "",
    class: "",
    author: ""
  });
  const[errors,setErrors]=useState<BookToSellErrorType>()
  const [imageFile, setImageFile] = useState<File | null>(null); // Update type to File | null
const[loading,setLoading]=useState<boolean>(false)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  };

  const uploadImage = async (): Promise<string> => {
    if (!imageFile) {
      toast.error("Select the file ",{
        position: "top-right",
        bodyClassName:" bg-red-500"
      })
      throw new Error('No image file selected');
   
    }

    const formData = new FormData();
    formData.append('file', imageFile);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Image upload failed');
    }

    const data = await response.json();
    console.log(data)
    return data.url;
    
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true)
      let imageUrl = bookToSell.imageUrl;

      if (imageFile) {
        imageUrl = await uploadImage();
      }
axios.post("/api/sellbook",{...bookToSell,imageUrl}).then((res=>{
  setLoading(false)
  const response=res.data
  console.log(response)
  if (response.status == 400) {
    setErrors(response.errors);
    console.log(response.errors)
    toast.error(`${response.message}`, {
     position: "top-right",
   });
  
  } 
  else if (response.status == 200) {
    toast.success("Success Notification !", {
      position: "top-right",
   
    });
   
setBookToSell({
  name: "",
    description: "",
    category: "",
    price: "",
    imageUrl: "",
    class: "",
    author: "",
  
})
  }
}))   .catch((err) => {
  setLoading(false);
  console.log("The error is", err);
});

      // Submit form data
     


      // Handle success
      toast.success('Book submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  };
console.log(imageFile,bookToSell)
  return (
    <div className="relative overflow-hidden bg-white mt-20">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Sell Books freely on Kitabwala</h1>
            <form onSubmit={handleSubmit}>
              <div className='mt-10 flex flex-col gap-y-4'>
                <label htmlFor="">Book Name</label>
                <Input placeholder='Book Name' className='text-center' type='text' value={bookToSell.name}
                  required onChange={(e) => setBookToSell({ ...bookToSell, name: e.target.value })} />
<span className=' text-red-500 font-bold'>{errors?.name}</span>
                <label htmlFor="" className=''>Book Description</label>
                <Textarea required value={bookToSell.description}
                  onChange={(e) => setBookToSell({ ...bookToSell, description: e.target.value })} />
                  <span className=' text-red-500 font-bold'>{errors?.description}</span>
                <label htmlFor="">Category</label>
                <Input placeholder='Category' value={bookToSell.category}
                  required onChange={(e) => setBookToSell({ ...bookToSell, category: e.target.value })} className='text-center' />
                  <span className=' text-red-500 font-bold'>{errors?.category}</span>
                <label htmlFor="">Price</label>
                <Input placeholder='Enter the price' type='text' value={bookToSell.price}
                  required onChange={(e) => setBookToSell({ ...bookToSell, price: e.target.value })} className='text-center' />
                  <span className=' text-red-500 font-bold'>{errors?.price}</span>
                <Input placeholder='Class' type='text' value={bookToSell.class}
                  required onChange={(e) => setBookToSell({ ...bookToSell, class: e.target.value })} className='text-center' />
                  <span className=' text-red-500 font-bold'>{errors?.class}</span>
                <Input placeholder='Author' type='text' value={bookToSell.author}
                  required onChange={(e) => setBookToSell({ ...bookToSell, author: e.target.value })} className='text-center' />
                  <span className=' text-red-500 font-bold'>{errors?.author}</span>
                <Input type='file' onChange={handleImageChange} className='text-center' />
              </div>
              <Button type="submit" className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700" disabled={loading}>
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
