import { prisma } from "@/tools/prisma"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest): Promise<any> => {
    const body = await request.json();
    if (body) {
        const newRam = await prisma.ram.create({
            data: {
                name: body.name,
                type: body.type,
                capacity: body.capacity,
                frequency: body.frequency,
                price: body.price,
            }
        })
        return NextResponse.json(newRam);
    }
}