import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, phone, project, file } = req.body;

  try {
    // Gmail SMTP 설정 (보안 낮은 앱 허용 or 앱 비밀번호 필요)
    const transporter = nodemailer.createTransport({
      host: "smtp.naver.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // logger: true,
      // debugger: true,
    });

    const mailOptions = {
      from: `"BOLD Contact" <${process.env.EMAIL_USER}@naver.com>`,
      to: `${process.env.EMAIL_USER}@naver.com`, // 수신자 이메일
      subject: `[BOLD 문의] ${name}님이 메시지를 보냈습니다.`,
      html: `
        <h3>BOLD Contact Form</h3>
        <p><strong>회사명:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>전화번호:</strong> ${phone}</p>
        <p><strong>요청 내용:</strong>${project}</p>
        <p>${file}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail({
      from: `"BOLD Contact" <${process.env.EMAIL_USER}@naver.com>`,
      to: email, // 클라이언트 이메일
      subject: "문의 감사합니다!",
      html: `
        <h3>BOLD Contact Form</h3>
        ${name}님, 문의 내용을 잘 받았습니다. 곧 연락드리겠습니다.

        문의 사항
        -----------------------------------------------
        <p><strong>회사명:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>전화번호:</strong> ${phone}</p>
        <p><strong>요청 내용:</strong>${project}</p>
        <p>${file}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("메일 전송 실패:", err);
    res.status(500).json({ success: false });
  }
}
