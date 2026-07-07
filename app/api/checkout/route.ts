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
      from: `"Checkout Form" <${user}>`,
      to: `Inquiry@halepathpackaging.com`,
      bcc: email,
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
      { status: 200 },
    );
  } catch (error) {
    console.error("Checkout email error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to send checkout email",
      },
      { status: 500 },
    );
  }
}
