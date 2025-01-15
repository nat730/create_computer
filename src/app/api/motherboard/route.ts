import { prisma } from "@/tools/prisma"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest): Promise<any> => {
    const body = await request.json();
    if (body) {
        const newMotherBoard = await prisma.motherboard.create({
            data: {
                name: body.name,
                brand: body.brand,
                price: body.price,
            }
        })
        return NextResponse.json(newMotherBoard);
    }
}