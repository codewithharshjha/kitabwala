import prisma from "@/db.config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log("this is backend body", typeof body);

    try {
        if (typeof body === 'object' && body !== null && 'category' in body) {
            const category = await prisma.category.create({
                data: { category: body.category } // Adjust field name based on your schema
              });

            return NextResponse.json({
                status: 200,
                message: "Category created successfully",
             category
            });
        } else {
            return NextResponse.json({
                status: 400,
                message: "Invalid request body. Expected JSON object with 'class' field."
            });
        }
    } catch (error) {
        console.error("Error creating class:", error);
        return NextResponse.json({
            status: 500,
            message: "Failed to create category"
        });
    }
}
export async function GET(request:NextRequest){
    try {
        const category=await prisma.category.findMany()
        return NextResponse.json({
            status:200,
            category
        })
    }  catch (error) {
        console.error("Error creating class:", error);
        return NextResponse.json({
            status: 400,
            message: "Failed to create category"
        });
    }
}