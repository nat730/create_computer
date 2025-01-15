import { prisma } from "@/tools/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest): Promise<NextResponse> => {
    console.log("Request URL:", request.nextUrl.href);
    const id = request.nextUrl.pathname.split("/").pop();

    console.log("ID parameter:", id);
    

    if (!id) {
        return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const ram = await prisma.ram.findUnique({
        where: {
            id: parseInt(id),
        },
    });

    if (!ram) {
        return NextResponse.json({ error: "RAM not found" }, { status: 404 });
    }

    return NextResponse.json(ram);
};
