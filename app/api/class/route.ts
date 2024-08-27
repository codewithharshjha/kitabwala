import prisma from "@/db.config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
   console.log("this is body",body)

    try {
        // Ensure the body is an object with the 'class' field
        if (typeof body === 'object' && body !== null && 'class' in body) {
            const createdClass = await prisma.class.create({
                data: {
                    class: body.class // Prisma expects an object here
                }
            });

            return NextResponse.json({
                status: 200,
                message: "Class created successfully",
                data:createdClass
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
            message: "Failed to create class"
        });
    }
}
