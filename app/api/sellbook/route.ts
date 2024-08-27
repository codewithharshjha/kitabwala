import { CustomErrorReporter } from "@/app/validation/CustomErrorReporter";
import { BookToSellSchema } from "@/app/validation/SellerUserSchema";
import prisma from "@/db.config";
import vine, { errors } from "@vinejs/vine";
import { NextRequest, NextResponse } from "next/server";
import validator from "validator";

export async function POST(request:NextRequest){
    try {
        const body = await request.json()
        
        console.log("is it body",body)
        vine.errorReporter=()=>new CustomErrorReporter()
       const validator=vine.compile(BookToSellSchema)
       const payload =validator.validate(body)
       const BookToSell=await prisma.bookToSell.create({
      data:{
        name:(await payload).name,
        price:(await payload).price,
        description:(await payload).description,
        author:(await payload).description,
        imageUrl:(await payload).imageUrl,
        class:(await payload).class,
        
        
        
    
      }
       })
    
     return NextResponse.json({status:200,messsage:"Book created successfully"}
    
     )
    }  catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {
            console.log(error)
            return NextResponse.json({ status: 400, errors: error.messages });
        } else {
            // Handle other types of errors if needed
            console.error("Unexpected error:", error);
            return NextResponse.json({ status: 500, message: "Internal Server Error" });
        }
    }
 
}