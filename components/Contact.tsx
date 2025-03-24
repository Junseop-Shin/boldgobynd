import React, { useState } from "react";
import styled from "styled-components";
import FadeUpAnimation from "./FadeUpAnimation";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: #0070f3;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: #0070f3;
  margin-top: 0.25rem;
`;

const ContactDetails = styled.div``;

const ContactTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ContactText = styled.p`
  font-size: 1rem;
  color: #666;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
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
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: #0051a8;
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
    email: "",
    subject: "",
    message: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 폼 제출 로직을 구현할 수 있습니다 (API 호출 등)
    console.log("Form submitted:", formData);
    // 성공 메시지 표시
    setIsSubmitted(true);
    // 폼 초기화
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // 3초 후 성공 메시지 숨기기
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <FadeUpAnimation>
          <SectionTitle>Contact Us</SectionTitle>
        </FadeUpAnimation>

        <ContactGrid>
          <FadeUpAnimation delay={0.2}>
            <ContactInfo>
              <ContactInfoItem>
                <ContactIcon>
                  <FaMapMarkerAlt />
                </ContactIcon>
                <ContactDetails>
                  <ContactTitle>Our Location</ContactTitle>
                  <ContactText>서울특별시 강남구 테헤란로 123, 5층</ContactText>
                </ContactDetails>
              </ContactInfoItem>

              <ContactInfoItem>
                <ContactIcon>
                  <FaPhone />
                </ContactIcon>
                <ContactDetails>
                  <ContactTitle>Phone Number</ContactTitle>
                  <ContactText>+82 02-1234-5678</ContactText>
                </ContactDetails>
              </ContactInfoItem>

              <ContactInfoItem>
                <ContactIcon>
                  <FaEnvelope />
                </ContactIcon>
                <ContactDetails>
                  <ContactTitle>Email Address</ContactTitle>
                  <ContactText>info@boldgobeyond.com</ContactText>
                </ContactDetails>
              </ContactInfoItem>
            </ContactInfo>
          </FadeUpAnimation>

          <FadeUpAnimation delay={0.4}>
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Your Name</FormLabel>
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
                <FormLabel htmlFor="email">Your Email</FormLabel>
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
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="message">Your Message</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <SubmitButton type="submit">Send Message</SubmitButton>

              {isSubmitted && (
                <SuccessMessage>
                  메시지가 성공적으로 전송되었습니다. 빠른 시일 내에 답변
                  드리겠습니다.
                </SuccessMessage>
              )}
            </ContactForm>
          </FadeUpAnimation>
        </ContactGrid>
      </ContactContainer>
    </ContactSection>
  );
}
