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
      qty,
      width,
      depth,
      length,
      message,
    } = body;

    const host = process.env.EMAIL_HOST;
    const port = Number(process.env.EMAIL_PORT);
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

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
      secure: port === 465,
      auth: { user, pass },
      tls: { rejectUnauthorized: false },
    });

    await transporter.verify();
    console.log("SMTP connection successful");

    const mailData = {
      from: `"Quote Form" <${user}>`,
      to: `Inquiry@halepathpackaging.com`,
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
                <p><strong>Quantity:</strong> ${qty}</p>
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
    console.error("Quote email error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to send quote email",
      },
      { status: 500 },
    );
  }
}
