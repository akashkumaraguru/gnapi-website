"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imgContainer = "/assets/diff-panel1.png";
const imgContainer1 = "/assets/diff-panel2.png";
const imgFrame2147261817 = "/assets/diff-panel3.png";
const imgContainer2 = "/assets/diff-panel4.png";
const imgContainer3 = "/assets/diff-panel5.png";
const imgFrame2147261818 = "/assets/diff-panel6.png";
const imgContainer4 = "/assets/diff-panel7.png";

interface AccordionItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function WhatMakesUsDifferent() {
  // Set the first card (index 0) active by default on load
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const items: AccordionItem[] = [
    {
      id: 1,
      title: "Dedicated Long-Term Partnership",
      description: "We align our engineering goals with your business outcomes, building transparent partnerships focused on shared success.",
      image: imgContainer,
    },
    {
      id: 2,
      title: "Dedicated Teams That Understand Your Business",
      description: "Our engineers bring deep domain expertise, leveraging modern tech stacks and best practices to build robust solutions.",
      image: imgContainer1,
    },
    {
      id: 3,
      title: "Strong Engineering Culture",
      description: "We foster technical excellence, continuous improvement, and clean code practices across all our projects.",
      image: imgFrame2147261817,
    },
    {
      id: 4,
      title: "AI-Powered Development Workflows",
      description: "We integrate AI tools into our daily workflows to accelerate delivery, improve code quality, and automate testing.",
      image: imgContainer2,
    },
    {
      id: 5,
      title: "Enterprise-Grade Security & Compliance",
      description: "We adhere to strict security frameworks (SOC 2, ISO 27001) to protect your intellectual property and data assets.",
      image: imgContainer3,
    },
    {
      id: 6,
      title: "Continuous Learning Culture",
      description: "We invest heavily in training and development, keeping our engineering teams at the forefront of technology.",
      image: imgFrame2147261818,
    },
    {
      id: 7,
      title: "Open Source Leadership",
      description: "We actively contribute to and leverage open-source projects, driving innovation and collaboration.",
      image: imgContainer4,
    },
  ];

  return (
    <section className="pt-4 pb-12 bg-white w-full select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="max-w-xl flex flex-col gap-3">
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-dark tracking-tight leading-tight">
            What Makes <span className="text-primary font-bold">Gnapi</span>{" "}
            <span className="text-secondary font-bold">Different?</span>
          </h2>
          <p className="font-sans text-[#131315]/70 text-sm md:text-base leading-relaxed">
            The principles that shape how we think, build, and grow with our clients.
          </p>
        </div>

        {/* Horizontal Accordion Layout */}
        <div className="flex flex-col lg:flex-row h-[560px] lg:h-[380px] w-full rounded-[24px] overflow-hidden gap-2 bg-[#0c0c0c] p-2 shadow-2xl">
          {items.map((item, idx) => {
            const isActive = activeIdx === idx;

            // Inactive cards get flexGrow = 0.7, active gets flexGrow = 5.0
            const flexGrow = isActive ? 5.0 : 0.7;

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActiveIdx(idx)}
                animate={{ flexGrow }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="relative h-full flex flex-col justify-end overflow-hidden rounded-[16px] cursor-pointer group"
                style={{ flexBasis: "0%" }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 size-full transition-transform duration-700 ease-out group-hover:scale-103">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover size-full"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 transition-opacity duration-300 ${isActive ? "opacity-95" : "opacity-75"}`} />
                </div>

                {/* Content Overlay - Centered Title Only */}
                <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center text-white z-10">
                  <AnimatePresence>
                    {isActive && (
                      <motion.h3
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="font-sans font-semibold text-lg md:text-2xl tracking-tight leading-snug text-white max-w-[90%] whitespace-normal"
                      >
                        {item.title}
                      </motion.h3>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
