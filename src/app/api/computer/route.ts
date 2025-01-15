import { prisma } from "@/tools/prisma"
import { NextRequest, NextResponse } from "next/server"
import { Params } from "../params";

export const POST = async (request: NextRequest,{}:Params) => {
    const body = await request.json();
    console.log(body);
    
    if (body.name && body.motherboard && body.battery && body.processor && body.ram) {
        const newComputer = await prisma.computer.create({
            data: {
                name: body.name,
                motherboard: {connect: {id: body.motherboard}},
                battery: {connect: {id: body.battery}},
                processor: {connect: {id: body.processor}},
                rams: {
                    connect: body.ram.map((id: number) => ({ id })),
                },
            }
        })
        return NextResponse.json(newComputer);
    }
    else {
        return NextResponse.json({ error: "Missing fields" });
    }
}

export const GET = async () => {
    const computers = await prisma.computer.findMany();
    return NextResponse.json(computers);
}

export const PUT = async (request: NextRequest,{}:Params) => {
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
                rams: {connect: {id: body.ram}},
            }
        })
        return NextResponse.json(updatedComputer);
    }
}

export const DELETE = async (request: NextRequest,{}:Params) => {
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