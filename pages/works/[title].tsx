// pages/works/[id].js
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import WorksDetail from "../../components/WorksDetail";
import WorksDetailHeader from "../../components/WorksDetailHeader";
import WorksDetailFooter from "../../components/WorksDetailFooter";
import { works, Work } from "../../assets/Works";

interface Params {
  title: string;
}

export default function WorkDetailPages({ work }: { work: Work }) {
  const router = useRouter();

  // fallback이 true인 경우 로딩 상태 처리
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout headerBgColor>
      <WorksDetailHeader work={work} />
      <WorksDetail work={work} />
      <WorksDetailFooter />
    </Layout>
  );
}

// 가능한 모든 작품 ID를 정의
export async function getStaticPaths() {
  // 작품 데이터를 가져오는 함수
  const paths = works.map((work) => ({
    params: { title: work.title },
  }));

  return {
    paths,
    fallback: false, // true 또는 'blocking'으로 설정 가능
  };
}

export async function getStaticProps({ params }: { params: Params }) {
  const filteredWorks = works.filter((work) => work.title === params.title);
  const work = filteredWorks.length > 0 ? filteredWorks[0] : null;

  if (!work) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      work,
    },
  };
}
