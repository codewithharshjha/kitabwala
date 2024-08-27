import prisma from "@/db.config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){
    try {
        const allbooks=await prisma.bookToSell.findMany()
        return NextResponse.json({status:200,allbooks:allbooks})
    } catch (error) {
        return NextResponse.json({status:200,message:error})
    }
}