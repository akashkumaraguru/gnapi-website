"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Asset URLs
const imgEngineering = "/assets/provide-engineering.png";
const imgGetty1 = "/assets/provide-getty1.png";
const imgGetty2 = "/assets/provide-getty2.png";
const imgGetty3 = "/assets/provide-getty3.png";
const imgGetty4 = "/assets/provide-getty4.png";

const imgIcon = "/assets/icon-engineering.svg";
const imgIcon1 = "/assets/icon-products.svg";
const imgIcon2 = "/assets/icon-services.svg";

interface CardItem {
  title: string;
  image: string;
  icon?: string;
}

export default function WhatWeProvide() {
  const [activeTab, setActiveTab] = useState<"Engineering" | "Products" | "Services">("Engineering");

  const tabs = [
    { id: "Engineering", label: "Engineering" },
    { id: "Products", label: "Products" },
    { id: "Services", label: "Services" },
  ] as const;

  const content: Record<"Engineering" | "Products" | "Services", CardItem[]> = {
    Engineering: [
      { title: "Engineering", image: imgEngineering, icon: imgIcon },
      { title: "Electrical Engineering", image: imgGetty1, icon: imgIcon },
      { title: "Clean Transportation", image: imgGetty2, icon: imgIcon1 },
      { title: "Advanced Energy", image: imgGetty3, icon: imgIcon },
      { title: "Green Technology", image: imgGetty3, icon: imgIcon },
      { title: "Environmental, Health, & Safety Management", image: imgGetty4, icon: imgIcon2 },
    ],
    Products: [
      { title: "Stratum", image: "/assets/prod-stratum.png" },
      { title: "Ticketspi", image: "/assets/prod-ticketspi.png" },
      { title: "Katalyst", image: "/assets/prod-katalyst.png" },
      { title: "Gnapi Design System", image: "/assets/prod-designsystem.png" },
    ],
    Services: [
      { title: "GIS & Geospatial Solutions", image: imgGetty1, icon: imgIcon },
      { title: "Software Development", image: imgGetty2, icon: imgIcon1 },
      { title: "Digital Product Engineering", image: imgGetty3, icon: imgIcon },
      { title: "Aviation Services", image: imgGetty4, icon: imgIcon2 },
      { title: "R&D Emerging Technologies", image: imgEngineering, icon: imgIcon },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  return (
    <section className="pt-12 pb-4 bg-white w-full select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        {/* Header and Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-xl flex flex-col gap-3">
            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-dark tracking-tight leading-tight">
              What We Provide
            </h2>
            <p className="font-sans text-[#131315]/70 text-sm md:text-base leading-relaxed">
              Purpose-built solutions and products designed to simplify complex processes, empower teams, and deliver measurable business value.
            </p>
          </div>

          {/* Dynamic Tab Selector */}
          <div className="bg-[#a7a7a7]/10 p-1.5 rounded-full flex items-center justify-start self-start lg:self-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 z-10 ${
                  activeTab === tab.id ? "text-white" : "text-[#131315] hover:text-[#131315]/80"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-[#8d8e33] -z-10 shadow-[0_8px_16px_rgba(179,180,53,0.2)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Cards Grid */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className={
                activeTab === "Products"
                  ? "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              }
            >
              {content[activeTab].map((item, idx) => {
                if (activeTab === "Products") {
                  return (
                    <motion.div
                      key={`${item.title}-${idx}`}
                      variants={cardVariants}
                      whileHover={{ scale: 1.02 }}
                      className="group relative h-[159px] bg-white rounded-[20px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5 flex items-center justify-center p-6"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-[85%] max-w-[85%] object-contain transition-transform duration-500 ease-out group-hover:scale-103"
                      />
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={`${item.title}-${idx}`}
                    variants={cardVariants}
                    className="group relative h-[220px] rounded-[20px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 bg-neutral-900 border border-white/5"
                  >
                    {/* Image background */}
                    <div className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105 size-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover size-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10 transition-opacity duration-300" />
                    </div>

                    {/* Backdrop blur overlay slider */}
                    <div className="absolute inset-x-0 bottom-0 h-[100px] flex items-end p-6 backdrop-blur-[4px] border-t border-white/10 bg-black/40 group-hover:h-[130px] group-hover:bg-black/60 transition-all duration-300 rounded-b-[20px]">
                      <div className="flex items-center justify-between w-full relative z-10 mb-2">
                        <h4 className="font-sans font-medium text-lg md:text-xl text-white tracking-wide pr-6 leading-tight">
                          {item.title}
                        </h4>
                        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:-rotate-45 group-hover:bg-primary group-hover:text-[#0c0c0c] group-hover:border-primary">
                          {item.icon ? (
                            <img
                              src={item.icon}
                              alt=""
                              className="w-4 h-4 object-contain invert brightness-0 group-hover:invert-0"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          ) : (
                            <ArrowUpRight className="w-4 h-4 text-white group-hover:text-[#0c0c0c]" />
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View More Link */}
        <div className="flex justify-end mt-4">
          <a
            href="#"
            className="group flex items-center gap-1.5 text-sm font-semibold text-dark hover:text-primary transition-colors underline decoration-solid decoration-1 underline-offset-4"
          >
            View more
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
