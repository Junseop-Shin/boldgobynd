import { ComponentProps, ReactNode } from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../../assets/common";

interface SectionProps extends ComponentProps<"section"> {
  bgColor?: string;
  children: ReactNode;
}

const StyledSection = styled.section<{ bgColor: string }>`
  padding: 5rem 2rem;
  background-color: ${(props) => props.bgColor};

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    padding: 2.5rem 0;
  }
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = ({ bgColor = "none", children, ...props }: SectionProps) => {
  return (
    <StyledSection bgColor={bgColor} {...props}>
      <SectionContainer>{children}</SectionContainer>
    </StyledSection>
  );
};

export default Section;
