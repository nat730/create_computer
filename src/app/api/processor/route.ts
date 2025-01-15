import { prisma } from "@/tools/prisma"
import { NextRequest, NextResponse } from "next/server"
import { Params } from "../params";

export const POST = async (request: NextRequest,{}:Params) => {
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

export const GET = async () => {
    const processors = await prisma.processor.findMany();
    return NextResponse.json(processors);
}

export const PUT = async (request: NextRequest,{}:Params) => {
    const body = await request.json();
    if (body) {
        const updatedProcessor = await prisma.processor.update({
            where: {
                id: body.id
            },
            data: {
                name: body.name,
                cores: body.cores,
                threads: body.threads,
                frequency: body.frequency,
                price: body.price,
            }
        })
        return NextResponse.json(updatedProcessor);
    }
}

export const DELETE = async (request: NextRequest,{}:Params) => {
    const body = await request.json();
    if (body) {
        const deletedProcessor = await prisma.processor.delete({
            where: {
                id: body.id
            }
        })
        return NextResponse.json(deletedProcessor);
    }
}