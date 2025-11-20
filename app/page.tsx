"use client";

import Grid from "@/components/Grid";
import Clients from "@/components/Clients";
import TechStack from "@/components/TechStack";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center
    flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero/>
        <ScrollReveal>
          <Grid/>
        </ScrollReveal>
        <ScrollReveal>
          <RecentProjects />
        </ScrollReveal>
        <ScrollReveal>
          <TechStack />
        </ScrollReveal>
        <ScrollReveal>
          <Experience />
        </ScrollReveal>
        <ScrollReveal>
          <Approach />
        </ScrollReveal>
        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </div>
    </main>
  );
}
