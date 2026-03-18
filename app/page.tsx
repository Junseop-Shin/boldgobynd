import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import PartnerSection from "@/components/sections/PartnerSection";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PartnerSection />
        <ProjectsPreview />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
