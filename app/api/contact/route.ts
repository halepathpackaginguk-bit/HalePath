import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullname, email, phone, product, message, acceptance } = body;

    if (!fullname || !email || !phone || !product || !message) {
      return NextResponse.json(
        { error: 'Please fill all required fields' },
        { status: 400 }
      );
    }

    const host = process.env.EMAIL_HOST;
    const port = Number(process.env.EMAIL_PORT);
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!host || !port || !user || !pass) {
      console.error('Missing env vars:', { host, port, user: !!user, pass: !!pass });
      return NextResponse.json(
        { error: 'Email configuration missing on server' },
        { status: 500 }
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
    console.log('SMTP connection successful');

    const mailOptions = {
      from: `"Contact Form" <${user}>`,
      to: 'sales@halepathpackaging.com, mufaqar@gmail.com', // change if needed
      subject: `New Quote Request from ${fullname}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <p><strong>Consent:</strong> ${acceptance ? 'Yes' : 'No'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Email sent' });
  } catch (error) {
    console.error('SMTP error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    );
  }
}