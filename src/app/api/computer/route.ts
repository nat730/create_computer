import { prisma } from "@/tools/prisma"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest): Promise<any> => {
    const body = await request.json();
    if (body) {
        const newComputer = await prisma.computer.create({
            data: {
                name: body.name,
                motherboard: body.motherboard,
                battery: body.Battery,
                processor: body.processor,
                ram: body.ram,
            }
        })
        return NextResponse.json(newComputer);
    }
}

export const GET = async (request: NextRequest): Promise<any> => {
    const computers = await prisma.computer.findMany();
    return NextResponse.json(computers);
}

export const PUT = async (request: NextRequest): Promise<any> => {
    const body = await request.json();
    if (body) {
        const updatedComputer = await prisma.computer.update({
            where: {
                id: body.id
            },
            data: {
                name: body.name,
                motherboard: body.motherboard,
                battery: body.Battery,
                processor: body.processor,
                ram: body.ram,
            }
        })
        return NextResponse.json(updatedComputer);
    }
}

export const DELETE = async (request: NextRequest): Promise<any> => {
    const body = await request.json();
    if (body) {
        const deletedComputer = await prisma.computer.delete({
            where: {
                id: body.id
            }
        })
        return NextResponse.json(deletedComputer);
    }
}