import { prisma } from "@/tools/prisma"
import { NextRequest, NextResponse } from "next/server"
import { Params } from "../params";

export const POST = async (request: NextRequest,{}:Params) => {
    const body = await request.json();
    if (body) {
        const newBattery = await prisma.battery.create({
            data: {
                name: body.name,
                capacity: body.capacity,
                voltage: body.voltage,
                price: body.price,
            }
        })
        return NextResponse.json(newBattery);
    }
}

export const GET = async () => {
    const batteries = await prisma.battery.findMany();
    return NextResponse.json(batteries);
}

export const PUT = async (request: NextRequest,{}:Params) => {
    const body = await request.json();
    if (body) {
        const updatedBattery = await prisma.battery.update({
            where: {
                id: body.id
            },
            data: {
                name: body.name,
                capacity: body.capacity,
                voltage: body.voltage,
                price: body.price,
            }
        })
        return NextResponse.json(updatedBattery);
    }
}

export const DELETE = async (request: NextRequest,{}:Params) => {
    const body = await request.json();
    if (body) {
        const deletedBattery = await prisma.battery.delete({
            where: {
                id: body.id
            }
        })
        return NextResponse.json(deletedBattery);
    }
}