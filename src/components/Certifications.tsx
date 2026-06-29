"use client";

import React from "react";
import { motion } from "framer-motion";

const imgImage35 = "/assets/cert-iso9001.png";
const imgImage36 = "/assets/cert-soc2.png";
const imgImage38 = "/assets/cert-iso27001.png";
const imgImage39 = "/assets/cert-sprint0.png";

export default function Certifications() {
  const certs = [
    { name: "ISO 9001", image: imgImage35, width: 127 },
    { name: "AICPA SOC 2", image: imgImage36, width: 91 },
    { name: "ISO 27001", image: imgImage38, width: 90 },
  ];

  return (
    <section className="py-12 bg-white w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="max-w-2xl flex flex-col gap-3">
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-dark tracking-tight leading-tight">
            Certifications & Partnerships
          </h2>
          <p className="font-sans text-[#131315]/70 text-sm md:text-base leading-relaxed">
            We meet the highest industry standards for security, quality, and compliance.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-[#d3dee8] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
          {certs.map((cert) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="h-[178px] flex items-center justify-center p-8 bg-white border-r border-b border-[#d3dee8] hover:bg-[#fcfdfd] transition-all duration-300 group cursor-pointer"
            >
              <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="max-h-[110px] w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </motion.div>
          ))}

          {/* Partner Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[178px] flex flex-col gap-4 items-center justify-center p-8 bg-[#fdfdfd] border-r border-b border-[#d3dee8] hover:bg-[#fbfbfb] transition-all duration-300 group cursor-pointer"
          >
            <span className="font-geist font-normal text-sm md:text-base text-[#131315]/60 group-hover:text-primary transition-colors">
              Partnered with
            </span>
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              <img
                src={imgImage39}
                alt="Partner Logo"
                className="max-h-[28px] w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
