import prisma from "@/db.config";
import { clerkClient, getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const query = url.searchParams.get('query') || ""; // Default to empty string if query is not provided
  
const {userId}=getAuth(request)

const user = userId ? await clerkClient.users.getUser(userId) : null;
console.log(user)


    try {
        const books = await prisma.bookToSell.findMany({
            where: {
                name: {
                    contains: query,
                    mode: 'insensitive', // Perform a case-insensitive search
                    
                },
                
            },
            select:{
                id:true
            }
        });
     
        return NextResponse.json({ status: 200, books });  
    } catch (error) {
        return NextResponse.json({ status: 400, message: error });
    }
}
