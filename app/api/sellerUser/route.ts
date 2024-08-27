import prisma from "@/db.config"
import vine, { errors } from "@vinejs/vine"
import { NextRequest, NextResponse } from "next/server"
import { CustomErrorReporter } from "../../validation/CustomErrorReporter";
import { SellerUserSchema } from "@/app/validation/SellerUserSchema";
import { genSaltSync, hashSync } from "bcrypt";
import { currentUser, getAuth } from "@clerk/nextjs/server";
export async function POST (request:NextRequest){
    try {
        const body = await request.json()
      
        vine.errorReporter=()=> new CustomErrorReporter()
        const validator=vine.compile(SellerUserSchema)
       const payload= validator.validate(body)
        const isSellerUserExists=await prisma.sellerUser.findUnique({
            where:{
                Email:(await payload).Email
            }
        })
        if(isSellerUserExists){
            return NextResponse.json({status:400,message:"User already exits"})
        }
        if((await payload).Password !=(await payload).ConfirmPassword){
            return NextResponse.json({status:404,message:"Please enter same password"})
        }
        const salt=genSaltSync(10)
;(await payload).Password= hashSync((await payload).Password,salt)

       const SellerUser=await prisma.sellerUser.create({
        data:{
            Firstname:(await payload).FirstName,
            LastName:(await payload).LastName,
            Email:(await payload).Email,
            Password:(await payload).Password,
            ConfirmPassword:(await payload).ConfirmPassword,
            
            Address1:(await payload).Address1,
            Address2:(await payload).Address2,
            City:(await payload).City,
            State:(await payload).State,
            Zip:(await payload).Zip,
            PanCardNumber:(await payload).PanCardNumber,
            AadharCardNumber:(await payload).AadharCardNumber,
            GSTNumber:(await payload).GSTNumber,
            Country:(await payload).Country,
            phoneNumber:(await payload).phoneNumber
      
            
    
    
    
       },})
       
       
      return NextResponse.json({status:200,message:"Account Created SuccessFully"})
    }
    catch (error) {
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
export async function GET (request:NextRequest){
    try {
        const url = new URL(request.url);
        const email = url.searchParams.get('email'); // Extract email from query parameters
console.log(email)
        if (!email) {
            return NextResponse.json({ status: 400, message: "Email parameter is required" });
        }
        const SellerUser=await prisma.sellerUser.findUnique({
            where:{
                Email:email
            }
        })
        if(SellerUser){
            return NextResponse.json({status:200,message:"Selleruser existed"})
        }
        else{
            return NextResponse.json({status:404,message:"SellerUser Not Existed"})
        }

    }
    catch (error) {
        return NextResponse.json({ status: 400, errors: error });
    }
   

}