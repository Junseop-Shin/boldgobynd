import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, phone, project, file } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.naver.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"BOLD Contact" <${process.env.EMAIL_USER}@naver.com>`,
      to: `${process.env.EMAIL_USER}@naver.com`,
      subject: `[BOLD 문의] ${name}님이 메시지를 보냈습니다.`,
      html: `
        <h3>BOLD Contact Form</h3>
        <p><strong>회사명:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>전화번호:</strong> ${phone}</p>
        <p><strong>요청 내용:</strong> ${project}</p>
        <p><strong>첨부파일:</strong> ${file || "없음"}</p>
      `,
    });

    await transporter.sendMail({
      from: `"BOLD Contact" <${process.env.EMAIL_USER}@naver.com>`,
      to: email,
      subject: "문의 감사합니다!",
      html: `
        <h3>BOLD Contact Form</h3>
        <p>${name}님, 문의 내용을 잘 받았습니다. 곧 연락드리겠습니다.</p>
        <hr />
        <p><strong>회사명:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>전화번호:</strong> ${phone}</p>
        <p><strong>요청 내용:</strong> ${project}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("메일 전송 실패:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
