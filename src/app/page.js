import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Problem from "./components/Problem";
import Engines from "./components/Engines";
import Work from "./components/Work";
import Case from "./components/Case";
import Process from "./components/Process";
import About from "./components/About";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Engines />
        <Work />
        <Case />
        <Process />
        <About />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
