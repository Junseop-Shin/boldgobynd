// pages/services.tsx
import React from "react";
import Layout from "../../components/Layout";
import WorksDetailHeader from "../../components/WorksDetailHeader";
import WorksDetailFooter from "../../components/WorksDetailFooter";
import WorksDetail from "../../components/WorksDetail";

const workDetailHeader = {
  src: "/resources/gallery/ad1.jpg",
  title: "홈&라이프스타일 큐레이션 플랫폼 DIBAMBI",
  description: "브랜드리뉴얼 및 제품디자인",
  link: "/works/dibambi",
  tags: ["BRANDING", "PACKAGE"],
  mainImage: "/resources/gallery/ad1.jpg",
  descriptionDetail:
    "고감도 홈&라이프스타일 큐레이션 플랫폼으로서 새롭게 자사 제품을 론칭하게 된 ‘디밤비’의 브랜드리뉴얼과 제품 패키지 디자인 작업을 진행하였습니다. 이번 브랜드 리뉴얼을 통해 소비자와의 감성적 교감을 강화하고, 프리미엄 라이프스타일 브랜드로서의 정체성을 확립하는 데 중점을 두었습니다. 감성, 라이프스타일, 유연함, 모던, 조형적 균형과 같은 디밤비의 가치와 정체성을 반영하여 모서리가 둥근 구조적 형태의 로고를 제작하였으며, 이를 다양한 방식으로 해체, 조합 및 확장하여 어플리케이션 디자인에 적용함으로써 브랜드의 조형적 특징을 강조하고 일관된 비주얼 아이덴티티를 구축했습니다. 로고의 ‘D’와 ‘B’의 결합에서 도출해낸 다양한 VISUAL ELEMENTS를 그래픽 모티브로 삼아 패키지 디자인에 적용하여 고감도의 제품 라인업을 완성하였으며, 이를 통해 브랜드 인지도를 상승시키고, 소비자 충성도를 확보하여 브랜드 가치를 확장하였습니다. 고유한 비주얼 언어와 통합된 디자인 요소는 소비자에게 강렬하고 일관된 인상을 남기며, 브랜드의 차별화된 정체성을 더욱 강화합니다. 이를 통해 디밤비는 시장에서의 경쟁력을 높이고, 장기적인 고객 관계를 구축할 수 있는 기반을 마련하였습니다.",
};

const workDetail = {
  src: "/resources/gallery/ad1.jpg",
  title: "홈&라이프스타일 큐레이션 플랫폼 DIBAMBI",
  description:
    "홈&라이프스타일 큐레이션 플랫폼 DIBAMBI 브랜드리뉴얼 및 제품디자인",
  link: "/works/dibambi",
  tags: ["BRANDING", "PACKAGE"],
  images: [
    "/resources/gallery/ad1.jpg",
    "/resources/gallery/ad1.jpg",
    "/resources/gallery/ad1.jpg",
  ],
  client: "EPOLIUM",
  year: "2024",
};

export default function WorksPage() {
  return (
    <Layout>
      <WorksDetailHeader
        src={workDetailHeader.src}
        title={workDetailHeader.title}
        description={workDetailHeader.description}
        link={workDetailHeader.link}
        tags={workDetailHeader.tags}
        mainImage={workDetailHeader.mainImage}
        descriptionDetail={workDetailHeader.descriptionDetail}
      />
      <WorksDetail
        src={workDetail.src}
        title={workDetail.title}
        description={workDetail.description}
        link={workDetail.link}
        tags={workDetail.tags}
        images={workDetail.images}
        client={workDetail.client}
        year={workDetail.year}
      />
      <WorksDetailFooter />
    </Layout>
  );
}
