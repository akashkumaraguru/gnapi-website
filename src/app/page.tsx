import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoCloud from "@/components/LogoCloud";
import WhatWeProvide from "@/components/WhatWeProvide";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import Blogs from "@/components/Blogs";
import QueryForm from "@/components/QueryForm";
import AskAI from "@/components/AskAI";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full min-h-screen bg-white">
        <HeroSection />
        <LogoCloud />

        {/* Unified Technical Blueprint Border Layout Wrapper */}
        <div className="max-w-7xl mx-auto w-[calc(100%-32px)] sm:w-[calc(100%-48px)] lg:w-full relative border-l border-r border-black/[0.06]">
          {/* Plus signs at the top intersections */}
          <div className="absolute -top-[4px] -left-[4px] w-[9px] h-[9px] pointer-events-none select-none z-20">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-black/45 -translate-y-1/2" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/45 -translate-x-1/2" />
          </div>
          <div className="absolute -top-[4px] -right-[4px] w-[9px] h-[9px] pointer-events-none select-none z-20">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-black/45 -translate-y-1/2" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/45 -translate-x-1/2" />
          </div>

          {/* Top Horizontal Border Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-black/[0.06] z-20" />

          <WhatWeProvide />
          <WhatMakesUsDifferent />
          <Testimonials />
          <Certifications />
          <Blogs />
          <QueryForm />
          <AskAI />
        </div>
      </main>
      <Footer />
    </>
  );
}
