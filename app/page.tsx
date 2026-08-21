import Hero from "../components/Hero";
import Advantages from "@/components/Advantages";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import RequestSection from "@/components/RequestSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Advantages />
      <About />
      <Services />
      <Contact />
      <RequestSection />
    </main>
  );
}
