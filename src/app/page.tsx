import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Heartbeat from "@/components/Heartbeat";
import Credibility from "@/components/Credibility";
import Method from "@/components/Method";
import ScienceEmotion from "@/components/ScienceEmotion";
import Carousel from "@/components/Carousel";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import StepCta from "@/components/StepCta";
import Ready from "@/components/Ready";
import FloatingButtons from "@/components/FloatingButtons";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Heartbeat />
        <Credibility />
        <Method />
        <ScienceEmotion />
        <Carousel />
        <StepCta />
        <Ready />
        <FinalCta />
      </main>
      <Footer />
      <FloatingButtons />
      <CookieConsent />
    </>
  );
}