import Header from "@/components/Header";
import WorksHero from "@/components/sections/WorksHero";
import WorksGrid from "@/components/sections/WorksGrid";
import Footer from "@/components/Footer";

export default function WorksPage() {
  return (
    <>
      <Header />
      <main>
        <WorksHero />
        <WorksGrid />
      </main>
      <Footer />
    </>
  );
}
