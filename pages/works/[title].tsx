// pages/works/[id].js
import { useRouter } from "next/router";
import { galleryImages } from "../../components/Works";
import Layout from "../../components/Layout";
import WorksDetail from "../../components/WorksDetail";
import WorksDetailHeader from "../../components/WorksDetailHeader";
import WorksDetailFooter from "../../components/WorksDetailFooter";

export default function WorkDetailPages({ work }) {
  const router = useRouter();

  // fallback이 true인 경우 로딩 상태 처리
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <WorksDetailHeader work={work} />
      <WorksDetail work={work} />
      <WorksDetailFooter />
    </Layout>
  );
}

// 가능한 모든 작품 ID를 정의
export async function getStaticPaths() {
  // 작품 데이터를 가져오는 함수
  const works = galleryImages;

  const paths = works.map((work) => ({
    params: { title: work.link },
  }));

  return {
    paths,
    fallback: false, // true 또는 'blocking'으로 설정 가능
  };
}

// 각 페이지에 필요한 데이터 가져오기
export async function getStaticProps({ params }) {
  // params.id를 사용하여 특정 작품 데이터 가져오기
  const work = params.title;

  return {
    props: {
      work,
    },
  };
}
