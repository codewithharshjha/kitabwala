"use client"
import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import SecondSection from "./components/SecondSection";
import ThridSection from "./components/ThridSection";
import AOS from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import FourthSection from "./components/FourthSection";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import CategorySection from "./components/CategorySection";
import SellSecondBook from "./components/SellSecondBook";
export default function Home() {
  const toast=useToast()

  const[category,setCategory]=useState<Category[]>([])
  useEffect(() => {
    axios.get("/api/category").then((res) => {
      const response = res.data;
 
      if (response.status == 400) {
     toast.toast({
      title:`${response.message}`
     })
      } else if (response.status == 200) {
      
        setCategory(response.category);
      }
    });
  }, []);
  useEffect(()=>{
    AOS.init({
  duration: 2000,
    })
  })
  return (
 <>

 {/* <SecondSection/>  */}
<ThridSection/> 
<FourthSection/>

<SellSecondBook/>

<CategorySection category={category}/>

 </>
  );
}
