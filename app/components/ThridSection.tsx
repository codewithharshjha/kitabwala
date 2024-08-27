import { HeroParallax } from '@/components/ui/hero-parallax';
import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

 function ThridSection() {

   
    const products = [
        { title: "Product 1", link: "/product-1", thumbnail: "/book.jpg" },
        { title: "Product 2", link: "/product-2", thumbnail: "/book1.jpg" },
        { title: "Product 1", link: "/product-1", thumbnail: "/book2.jpg" },
        { title: "Product 2", link: "/product-2", thumbnail: "/book3.jpg" },
        { title: "Product 1", link: "/product-1", thumbnail: "/book4.jpg" },
        { title: "Product 2", link: "/product-2", thumbnail: "/book5.jpg" },
        { title: "Product 1", link: "/product-1", thumbnail: "/book6.jpg" },
        { title: "Product 2", link: "/product-2", thumbnail: "/book7.jpg" },
        { title: "Product 1", link: "/product-1", thumbnail: "/book8.jpg" },
        { title: "Product 2", link: "/product-2", thumbnail: "/book9.jpg" },
       
       
        // Add more product objects as needed
      ];

  return (
<>


    <div className=' rounded-lg'>
   <HeroParallax products={products} data-aos="zoom-in"/>

  

    </div>
  
    </>
  )
}

export default ThridSection
