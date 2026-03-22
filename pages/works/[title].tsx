import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../../components/Layout";
import WorksDetail from "../../components/WorksDetail";
import WorksDetailHeader from "../../components/WorksDetailHeader";
import WorksDetailFooter from "../../components/WorksDetailFooter";
import { works, Work } from "../../assets/works";

const SITE_URL = "https://boldgobynd.vercel.app";

interface Params {
  title: string;
}

export default function WorkDetailPages({ work }: { work: Work }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const ogImage = `${SITE_URL}${work.thumbnailImage}`;
  const ogTitle = `${work.titleDesc} — Studio BOLD`;
  const ogDescription = work.workDetail ?? work.categoryDesc;
  const ogUrl = `${SITE_URL}/works/${work.title}`;

  return (
    <>
      <Head>
        <title>{ogTitle}</title>
        <meta name="description" content={ogDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:alt" content={work.titleDesc} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <article>
        <Layout headerBgColor>
          <WorksDetailHeader work={work} />
          <WorksDetail work={work} />
          <WorksDetailFooter />
        </Layout>
      </article>
    </>
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
