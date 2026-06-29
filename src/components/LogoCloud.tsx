"use client";

import React from "react";

const logos = [
  { name: "brightspeed", url: "/assets/logo-brightspeed.png" },
  { name: "kil", url: "/assets/logo-kil.png" },
  { name: "bell", url: "/assets/logo-bell.png" },
  { name: "domingo", url: "/assets/logo-domingo.png" },
  { name: "telekom", url: "/assets/logo-telekom.png" },
  { name: "vst", url: "/assets/logo-vst.png" },
  { name: "proximus", url: "/assets/logo-proximus.png" },
  { name: "telus", url: "/assets/logo-telus.png" },
  { name: "stedin", url: "/assets/logo-stedin.png" },
  { name: "partner1", url: "/assets/logo-partner1.png" },
  { name: "partner2", url: "/assets/logo-partner2.png" }
];

export default function LogoCloud() {
  return (
    <section className="py-16 bg-white overflow-hidden w-full select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-10">
        <h2 className="font-sans text-[22px] font-normal text-dark/40 tracking-wide">
          Trusted by <span className="font-bold text-dark/70">Global Organizations</span>
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex flex-nowrap items-center before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:after-top-0 after:bottom-0 after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
        <div className="flex animate-marquee whitespace-nowrap min-w-full items-center gap-16 py-4">
          {logos.concat(logos).map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex-shrink-0 w-36 h-12 flex items-center justify-center filter grayscale opacity-40 hover:grayscale-0 hover:opacity-90 transition-all duration-900 ease-in-out cursor-pointer"
            >
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="max-h-8 max-w-full object-contain"
                onError={(e) => {
                  // Fallback if local figma asset fails
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
