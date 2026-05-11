import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      product,
      colors,
      unit,
      width,
      depth,
      length,
      message,
    } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g., smtp.hostinger.com
      port: Number(process.env.EMAIL_PORT), // 465 or 587
      secure: process.env.EMAIL_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // your Hostinger email address
        pass: process.env.EMAIL_PASS, // your Hostinger email password
      },
    });

    const mailData = {
      from: process.env.EMAIL_USER,
      to: `mufaqar@gmail.com, ${email}`,
      subject: `New Quote Request from ${name}`,
      text: message,
      html: `
                <h2>New Quote Request</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>

                <hr/>

                <p><strong>Product:</strong> ${product}</p>
                <p><strong>Colors:</strong> ${colors}</p>
                <p><strong>Unit:</strong> ${unit}</p>

                <p><strong>Length:</strong> ${length}</p>
                <p><strong>Width:</strong> ${width}</p>
                <p><strong>Depth:</strong> ${depth}</p>

                <hr/>

                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
    };

    await transporter.sendMail(mailData);

    return NextResponse.json(
      { message: "Quote email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to send quote email" },
      { status: 500 },
    );
  }
}
