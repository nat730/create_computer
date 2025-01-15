import { prisma } from "@/tools/prisma"
import { NextRequest, NextResponse } from "next/server"
import { Params } from "../params";

export const POST = async (request: NextRequest,{}:Params) => {
    const body = await request.json();
    console.log(body);
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
        console.log(newRam);
        return NextResponse.json(newRam);
        
    }
}

export const GET = async () => {
    const rams = await prisma.ram.findMany();
    return NextResponse.json(rams);
}

export const PUT = async (request: NextRequest,{}:Params) => {
    const body = await request.json();
    if (body) {
        const updatedRam = await prisma.ram.update({
            where: {
                id: body.id
            },
            data: {
                name: body.name,
                type: body.type,
                capacity: body.capacity,
                frequency: body.frequency,
                price: body.price,
            }
        })
        return NextResponse.json(updatedRam);
    }
}

export const DELETE = async (request: NextRequest,{}:Params) => {
    const body = await request.json();
    if (body) {
        const deletedRam = await prisma.ram.delete({
            where: {
                id: body.id
            }
        })
        return NextResponse.json(deletedRam);
    }
}