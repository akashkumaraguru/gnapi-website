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
        <WhatWeProvide />
        <WhatMakesUsDifferent />
        <Testimonials />
        <Certifications />
        <Blogs />
        <QueryForm />
        <AskAI />
      </main>
      <Footer />
    </>
  );
}
