import Blogs from "@/components/Blogs";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LogoCloud from "@/components/LogoCloud";
import Navbar from "@/components/Navbar";
import QueryForm from "@/components/QueryForm";
import Testimonials from "@/components/Testimonials";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent";
import WhatWeProvide from "@/components/WhatWeProvide";

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
      </main>
      <Footer />
    </>
  );
}
