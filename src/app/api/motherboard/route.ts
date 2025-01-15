import { prisma } from "@/tools/prisma"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest): Promise<any> => {
    const body = await request.json();
    if (body) {
        const newMotherBoard = await prisma.motherboard.create({
            data: {
                name: body.name,
                size: body.size,
                format: body.format,
                socket: body.socket,
                ram: body.ram,
                usbSlots: body.usbSlots,
                ethernet: body.ethernet,
                wifi: body.wifi,
                bluetooth: body.bluetooth,
                price: body.price,
            }
        })
        return NextResponse.json(newMotherBoard);
    }
}