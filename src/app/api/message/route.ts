import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import leoProfanity from "leo-profanity";

function sanitize(input: unknown): string {
  if (typeof input !== "string") return "";
  let out = input;
  out = out.replace(/<script.*?>.*?<\/script>/gis, "");
  out = out.replace(/on\w+\s*=\s*(['"]).*?\1/gi, "");
  out = out.replace(/javascript:/gi, "");
  out = out.replace(/<style.*?>.*?<\/style>/gis, "");
  out = out.replace(/style\s*=\s*(['"]).*?\1/gi, "");
  out = out.replace(/<[^>]*>/g, "");
  out = out.replace(/[`$<>{}]/g, "");
  out = leoProfanity.clean(out);
  return out;
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const subject = sanitize(body.subject);
  const message = sanitize(body.message);

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_TO ?? "esmailian98@gmail.com",
      subject,
      text: `From: ${name} (${email})\n\n${message}`,
      replyTo: email,
    });
    return NextResponse.json({ success: true, message: "Email sent successfully." });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
