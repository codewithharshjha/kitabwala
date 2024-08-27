import prisma from "@/db.config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){
    try {
        const url = new URL(request.url);
      
        const id= url.searchParams.get('id[id]')!
   
   
        console.log('yai print hua')
       const book=await prisma.bookToSell.findUnique({
        where:{
           id:parseInt(id)
        }
       })
       
        return NextResponse.json({status:200,book:book})
    } catch (error) {
        return NextResponse.json({status:400,message:"there is some issue"})
    }
}