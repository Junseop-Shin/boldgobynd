import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MOBILE } from "../../assets/common";

const fadeUpVar = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const Section = styled.section`
  background: #d4f5e2;
  padding: 6rem 0;

  @media ${MOBILE} {
    padding: 3rem 0;
  }
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: flex-start;
  max-width: 1232px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;

  @media ${MOBILE} {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const LeftCol = styled.div``;

const Label = styled.p`
  font-size: 0.88rem;
  letter-spacing: 0.08em;
  color: #444;
  margin-bottom: 1.75rem;
`;

const Heading = styled.h2`
  font-size: 2.8rem;
  font-weight: 900;
  line-height: 1.2;
  color: #111;
  margin-bottom: 2.5rem;
  word-break: keep-all;

  @media ${MOBILE} {
    font-size: 2.4rem;
  }
`;

const Desc = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.9;
`;

/* ── Form ── */
const RightCol = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

const Field = styled.div``;

const FieldLabel = styled.label`
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  color: #333;
  display: block;
  margin-bottom: 0.6rem;

  span {
    color: #e53e3e;
    margin-left: 0.2rem;
  }
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #555;
  padding: 0.5rem 0;
  font-size: 1rem;
  color: #111;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-bottom-color: #111;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #555;
  padding: 0.5rem 0;
  font-size: 1rem;
  color: #111;
  outline: none;
  resize: none;
  min-height: 80px;
  box-sizing: border-box;

  &:focus {
    border-bottom-color: #111;
  }
`;

/* 파일 올리기 버튼: 흰 배경, pill */
const UploadLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: #333;
  background: #fff;
  border: 1px solid #888;
  border-radius: 999px;
  padding: 0.55rem 1.4rem;
  cursor: pointer;
  transition: border-color 0.2s;

  &:hover {
    border-color: #333;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

/* 제출하기 버튼: 검정, 약간 rounded */
const SubmitBtn = styled.button`
  width: 100%;
  background: #111;
  color: #fff;
  border: none;
  padding: 1.1rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  border-radius: 8px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;

export default function LetsTalkSection() {
  const [fileName, setFileName] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <Section ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUpVar}
      >
        <Inner>
          <LeftCol>
            <Label>Let&apos;s Talk</Label>
            <Heading>
              프로젝트가<br />
              머릿속에 맴돌고<br />
              있나요?
            </Heading>
            <Desc>
              막연해도 괜찮아요.<br />
              어떤 아이디어든 편하게 공유해 주세요.<br />
              함께 이야기 나누는 것만으로도<br />
              방향이 선명해질 거예요.
            </Desc>
          </LeftCol>

          <RightCol>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Field>
                <FieldLabel>NAME OF COMPANY <span>•</span></FieldLabel>
                <Input type="text" required />
              </Field>
              <Field>
                <FieldLabel>PHONE <span>•</span></FieldLabel>
                <Input type="tel" required />
              </Field>
              <Field>
                <FieldLabel>E-MAIL <span>•</span></FieldLabel>
                <Input type="email" required />
              </Field>
              <Field>
                <FieldLabel>ABOUT PROJECT <span>•</span></FieldLabel>
                <Textarea rows={4} required />
              </Field>
              <Field>
                <FieldLabel>UPLOAD</FieldLabel>
                <UploadLabel>
                  ↑&nbsp;&nbsp;{fileName || "파일 올리기"}
                  <HiddenInput
                    type="file"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                  />
                </UploadLabel>
              </Field>
              <SubmitBtn type="submit">제출하기</SubmitBtn>
            </Form>
          </RightCol>
        </Inner>
      </motion.div>
    </Section>
  );
}
