import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import WhyUs from "./components/WhyUs";
import Careers from "./components/Careers";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Stats />
        <Projects />
        <WhyUs />
        
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
