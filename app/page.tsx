import type { Metadata } from "next";

import Hero from "../components/Hero";
import Advantages from "@/components/Advantages";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import RequestSection from "@/components/RequestSection";

export const metadata: Metadata = {
  title: "ЗемВін — землеустрій та геодезія у Вінниці",
  description:
    "Землевпорядні та геодезичні послуги у Вінниці та Вінницькій області. Кадастрові номери, проєкти землеустрою, поділ земельних ділянок, топографічна зйомка та інші послуги.",
  alternates: {
    canonical: "https://zem.vn.ua",
  },
};

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
