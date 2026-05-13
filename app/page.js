import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Pricing />
        <Contact />
        <CtaBand />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
