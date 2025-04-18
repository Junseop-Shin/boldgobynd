import React, { useState } from "react";
import styled from "styled-components";
import FadeUpAnimation from "./common/FadeUpAnimation";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { businessInfo } from "../assets/business";
import Email from "./common/Email";
import { MOBILE } from "../assets/common";

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 5rem;

  @media ${MOBILE} {
    grid-template-columns: 1fr;
    width: 90%;
    margin-top: 4rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.286em;
  text-align: left;
  line-height: 1.5;
  color: rgb(84, 84, 87);
  font-weight: 700;

  @media ${MOBILE} {
    font-size: 16px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 36px;
  text-align: left;
  font-weight: 700;
  line-height: 1.2;

  @media ${MOBILE} {
    font-size: 24px;
    line-height: 1.6;
  }
`;

const SectionBody = styled.p`
  font-size: 18px;
  line-height: 2;
  text-align: left;
  color: rgb(33, 33, 33);
  font-weight: 400;
  letter-spacing: -1px;

  @media ${MOBILE} {
    font-size: 16px;
    line-height: 1.3;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  margin-top: 3rem;
  width: 100%;
  gap: 1.5rem;

  @media ${MOBILE} {
    display: none;
  }
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex: 1 1 0;
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: #0070f3;
  margin-top: 0.25rem;
`;

const ContactDetails = styled.div``;

const ContactTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ContactText = styled.p`
  font-size: 0.8rem;
  color: #666;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media ${MOBILE} {
    padding-top: 3rem;
    border-top: 3px solid black;
  }
`;

const FormGroupGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media ${MOBILE} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label<{ required?: boolean }>`
  font-size: 1rem;
  font-weight: 500;

  ${({ required }) =>
    required &&
    `
    &::after {
      content: "*";
      color: red;
    }
  `}
`;

const FormInput = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;

  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: #121212;
  width: 100%;
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-start;

  &:hover {
    opacity: 0.8;
  }
`;

const SuccessMessage = styled.div`
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border-radius: 5px;
  margin-top: 1rem;
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    file: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        project: "",
        file: "",
      });
    }

    // 3초 후 성공 메시지 숨기기
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <ContactGrid>
      <div>
        <FadeUpAnimation>
          <SectionTitle>문의하기</SectionTitle>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.1}>
          <SectionBody>
            <br />
          </SectionBody>
          <SectionSubtitle>아이디어를 남겨주세요.</SectionSubtitle>
          <SectionSubtitle>BOLD가 실현을 돕겠습니다.</SectionSubtitle>
          <SectionBody>
            <br />
          </SectionBody>
          <SectionBody>
            원하는 서비스의 내용, 예산, 일정을 알려주시면,
          </SectionBody>
          <SectionBody>
            빠른 시간 내에 구체적인 견적 및 제작 일정을 안내해 드립니다.
          </SectionBody>
          <SectionBody>함께 새로운 가능성을 만들어가요!🚀</SectionBody>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.2}>
          <ContactInfo>
            <ContactInfoItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactDetails>
                <ContactTitle>Our Location</ContactTitle>
                <ContactText>{businessInfo.address}</ContactText>
              </ContactDetails>
            </ContactInfoItem>

            <ContactInfoItem>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <ContactDetails>
                <ContactTitle>Phone Number</ContactTitle>
                <ContactText>{businessInfo.phone}</ContactText>
              </ContactDetails>
            </ContactInfoItem>

            <ContactInfoItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactDetails>
                <ContactTitle>Email Address</ContactTitle>
                <ContactText>
                  <Email email={businessInfo.email} />
                </ContactText>
              </ContactDetails>
            </ContactInfoItem>
          </ContactInfo>
        </FadeUpAnimation>
      </div>

      <FadeUpAnimation delay={0.4}>
        <ContactForm onSubmit={handleSubmit}>
          <FormGroupGrid>
            <FormGroup>
              <FormLabel htmlFor="name" required>
                NAME OF COMPANY
              </FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="phone" required>
                PHONE
              </FormLabel>
              <FormInput
                type="phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </FormGroupGrid>
          <FormGroup>
            <FormLabel htmlFor="email" required>
              EMAIL
            </FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="project" required>
              ABOUT PROJECT
            </FormLabel>
            <FormTextarea
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="message">UPLOAD</FormLabel>
            <FormInput
              type="file"
              id="file"
              name="file"
              value={formData.file}
              onChange={handleChange}
            />
          </FormGroup>

          <SubmitButton type="submit">제출하기</SubmitButton>

          {isSubmitted && (
            <SuccessMessage>
              메시지가 성공적으로 전송되었습니다. 빠른 시일 내에 답변
              드리겠습니다.
            </SuccessMessage>
          )}
        </ContactForm>
      </FadeUpAnimation>
    </ContactGrid>
  );
}
