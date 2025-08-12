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
import NoSSR from "@/components/NoSSR";

export default function Home() {
  return (
    <>
      <NoSSR>
        <Header />
      </NoSSR>
      <main>
        <Hero />
        <Heartbeat />
        <Credibility />
        <Method />
        <ScienceEmotion />
        <NoSSR>
          <Carousel />
        </NoSSR>
        <StepCta />
        <Ready />
        <NoSSR>
          <FinalCta />
        </NoSSR>
      </main>
      <Footer />
    </>
  );
}