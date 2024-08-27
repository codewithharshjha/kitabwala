import prisma from "@/db.config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    console.log("this is backend body", body);

    try {
        // Rename the variable to avoid using the reserved keyword
        const subject = await prisma.subject.create({
            data: {
                subject:body.subject
            }
        });

        return NextResponse.json({
            status: 200,
            message: "Subject created successfully",
            data: subject
        });
    } catch (error) {
        console.error("Error creating class:", error);
        return NextResponse.json({
            status: 500,
            message: "Failed to create class"
        });
    }
}