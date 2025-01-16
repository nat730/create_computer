import { prisma } from "@/tools/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest): Promise<NextResponse> => {
    console.log("Request URL:", request.nextUrl.href);
    const id = request.nextUrl.pathname.split("/").pop();


    console.log("ID parameter:", id);
    

    if (!id) {
        return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const computer = await prisma.computer.findUnique({
        where: {
            id: parseInt(id),
        },
    });

    if (!computer) {
        return NextResponse.json({ error: "computer not found" }, { status: 404 });
    }

    return NextResponse.json(computer);
};
