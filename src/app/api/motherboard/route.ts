import { prisma } from "@/tools/prisma"
import { NextRequest, NextResponse } from "next/server"
import { Params } from "../params";

export const POST = async (request: NextRequest,{}:Params) => {
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

export const GET = async () => {
    const motherboards = await prisma.motherboard.findMany();
    return NextResponse.json(motherboards);
}

export const PUT = async (request: NextRequest,{}:Params) => {
    const body = await request.json();
    if (body) {
        const updatedMotherBoard = await prisma.motherboard.update({
            where: {
                id: body.id
            },
            data: {
                name: body.name,
                brand: body.brand,
                price: body.price,
            }
        })
        return NextResponse.json(updatedMotherBoard);
    }
}

export const DELETE = async (request: NextRequest,{}:Params) => {
    const body = await request.json();
    if (body) {
        const deletedMotherBoard = await prisma.motherboard.delete({
            where: {
                id: body.id
            }
        })
        return NextResponse.json(deletedMotherBoard);
    }
}