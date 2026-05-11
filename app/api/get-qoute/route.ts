import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      pname,
      colors,
      unit,
      width,
      depth,
      length,
      dimension,
      message,
    } = body;

    const host = process.env.EMAIL_HOST;
    const port = Number(process.env.EMAIL_PORT);
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    // Optional: add a safety check (remove after confirming it works)
    if (!host || !port || !user || !pass) {
      console.error("Missing env vars:", {
        host,
        port,
        user: !!user,
        pass: !!pass,
      });
      return NextResponse.json(
        { error: "Email configuration missing on server" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for 587
      auth: { user, pass },
    });

    const mailData = {
      from: process.env.EMAIL_USER,
      to: `mufaqar@gmail.com, sales@halepathpackaging.com, ${email}`,
      subject: `New Quote from ${name}`,
      text: `${message} | Sent from: ${email}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr/>
        <p><strong>Product:</strong> ${pname}</p>
        <p><strong>Colors:</strong> ${colors}</p>
        <p><strong>Dimensions:</strong> ${dimension} ${unit}</p>
        <p><strong>Length:</strong> ${length}</p>
        <p><strong>Width:</strong> ${width}</p>
        <p><strong>Depth:</strong> ${depth}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };
    await transporter.sendMail(mailData);
    return NextResponse.json({ message: "Email sent!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
