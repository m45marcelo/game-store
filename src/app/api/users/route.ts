import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try {
        const body= await req.json();
        const { name, email, password } = body;

        if(!name || !email || !password){
            return NextResponse.json(
                { message: "Dados inválidos" },
                { status: 400 }
            )
        }

        const userExists = await prisma.user.findUnique({
            where: { email },
        })

        if(userExists){
            return NextResponse.json(
                {message: "Email já cadastrado"},
                { status: 409 }
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })

        return NextResponse.json(
            { message: "Usuário criado sucesso"},
            { status: 201 }
        )
    } catch (error) {
        return NextResponse.json(
            { message: "Erro interno" },
            { status: 500 }
        )
    }
}