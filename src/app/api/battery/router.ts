import { prisma } from "@/tools/prisma"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest): Promise<any> => {
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