"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, file: file?.name || "" }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", phone: "", email: "", project: "" });
        setFile(null);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-8 md:px-16"
      style={{ backgroundColor: "#d4f5e2" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div
          ref={ref}
          className="flex flex-col md:flex-row gap-16 md:gap-24 items-start"
        >
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <p className="text-xs tracking-[0.2em] text-black mb-8 uppercase">
              Let&apos;s Talk
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-black leading-[1.35] mb-8">
              프로젝트가
              <br />
              머릿속에 맴돌고 있나요?
            </h2>
            <p className="text-sm text-black leading-8">
              막연해도 괜찮아요.
              <br />
              어떤 아이디어든 편하게 공유해 주세요.
              <br />
              함께 이야기 나누는 것만으로도
              <br />
              방향이 선명해질 거예요.
            </p>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-1 w-full"
          >
            {status === "sent" ? (
              <div className="py-16 text-center">
                <p className="text-lg font-bold text-black">
                  문의가 접수되었습니다.
                </p>
                <p className="text-sm text-neutral-700 mt-3">
                  빠른 시일 내에 연락드리겠습니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[11px] tracking-[0.15em] uppercase text-black mb-2 font-semibold">
                    NAME OF COMPANY <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="w-full border-b border-black bg-transparent py-2.5 text-sm text-black placeholder-neutral-500 focus:outline-none focus:border-black"
                    placeholder="회사명을 입력해 주세요"
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.15em] uppercase text-black mb-2 font-semibold">
                    PHONE <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    className="w-full border-b border-black bg-transparent py-2.5 text-sm text-black placeholder-neutral-500 focus:outline-none focus:border-black"
                    placeholder="연락처를 입력해 주세요"
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.15em] uppercase text-black mb-2 font-semibold">
                    E-MAIL <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="w-full border-b border-black bg-transparent py-2.5 text-sm text-black placeholder-neutral-500 focus:outline-none focus:border-black"
                    placeholder="이메일을 입력해 주세요"
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.15em] uppercase text-black mb-2 font-semibold">
                    ABOUT PROJECT <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    required
                    value={form.project}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, project: e.target.value }))
                    }
                    rows={4}
                    className="w-full border-b border-black bg-transparent py-2.5 text-sm text-black placeholder-neutral-500 focus:outline-none focus:border-black resize-none"
                    placeholder="프로젝트에 대해 자유롭게 작성해 주세요"
                  />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.15em] uppercase text-black mb-2 font-semibold">
                    UPLOAD
                  </label>
                  <label className="inline-flex items-center gap-2 border border-black px-4 py-2 text-xs tracking-widest cursor-pointer hover:bg-black hover:text-white transition-colors">
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                    파일 올리기
                  </label>
                  {file && (
                    <span className="ml-3 text-xs text-neutral-700">
                      {file.name}
                    </span>
                  )}
                </div>
                {status === "error" && (
                  <p className="text-xs text-red-600">
                    전송에 실패했습니다. 다시 시도해 주세요.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-black text-white py-4 text-sm tracking-[0.15em] uppercase font-semibold hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "전송 중..." : "제출하기"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
