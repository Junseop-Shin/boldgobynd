import styled from "styled-components";
import { Responsive } from "../Responsive";
import ImageCarousel from "../common/ImageCarousel";
import { workDetailFooterImages } from "../../assets/works";

const Section = styled.section`
  background: #d4f5e2;
`;

export default function MarqueeSection() {
  return (
    <Responsive only="desktop">
      <Section>
        <ImageCarousel images={workDetailFooterImages} isLinked peek />
      </Section>
    </Responsive>
  );
}
