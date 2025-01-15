import { prisma } from "@/tools/prisma"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest): Promise<any> => {
    const body = await request.json();
    if (body) {
        const newProcessor = await prisma.processor.create({
            data: {
                name: body.name,
                cores: body.cores,
                threads: body.threads,
                frequency: body.frequency,
                price: body.price,
            }
        })
        return NextResponse.json(newProcessor);
    }
}