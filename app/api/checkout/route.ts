import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            product,
            dimension,
            box_stock,
            quantity,
            printing,
            calculatedPrice,
            email,
            name,
        } = body;

        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            secure: true,
        });

        const mailData = {
            from: process.env.EMAIL_USER,
            to: `mufaqar@gmail.com, jaweeriashoukat@gmail.com, ${email}`,
            subject: `New Checkout Order - ${product}`,
            text: `Order placed for ${product}`,
            html: `
                <h2>New Checkout Order</h2>

                <p><strong>Customer Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>

                <hr/>

                <p><strong>Product:</strong> ${product}</p>
                <p><strong>Dimension:</strong> ${dimension}</p>
                <p><strong>Box Stock:</strong> ${box_stock}</p>
                <p><strong>Quantity:</strong> ${quantity}</p>
                <p><strong>Printing:</strong> ${printing}</p>

                <hr/>

                <p><strong>Total Price:</strong> $${calculatedPrice}</p>
            `,
        };

        await transporter.sendMail(mailData);

        return NextResponse.json(
            { message: "Checkout email sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to send checkout email" },
            { status: 500 }
        );
    }
}