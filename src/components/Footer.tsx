"use client";

import React from "react";
import { Linkedin, Twitter, Youtube, Github } from "lucide-react";

// Flag Asset Constants
const imgCanada = "/assets/flag-canada.png";
const imgUSA = "/assets/flag-usa.png";
const imgIndia = "/assets/flag-india.png";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ];

  const products = [
    { label: "Ticketspi", href: "#" },
    { label: "Katalyst", href: "#" },
    { label: "Custom Products", href: "#" },
  ];

  const services = [
    { label: "GIS & Geospatial Solutions", href: "#" },
    { label: "Software Development", href: "#" },
    { label: "Digital Product Engineering", href: "#" },
    { label: "DevOps Services", href: "#" },
    { label: "AI & Emerging Technologies", href: "#" },
  ];

  return (
    <footer className="bg-[#1b2746] text-white pt-24 pb-8 border-t border-white/5 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* Main Columns Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Brand/Description & Countries Column */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h4 className="font-sans font-semibold text-[24px] tracking-[-1.44px] leading-[28px] text-white max-w-lg">
                Engineering Digital Excellence Through Innovation
              </h4>
              <p className="font-sans font-normal text-[24px] tracking-[-1.44px] leading-[28px] text-white/40 max-w-lg">
                We build intelligent geospatial, software, and digital solutions that help businesses transform operations, accelerate growth, and create lasting impact.
              </p>
            </div>

            {/* Country Selector Flags */}
            <div className="flex items-center gap-4 text-sm text-white/80">
              {/* Canada */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <img
                  src={imgCanada}
                  alt="Canada Flag"
                  className="w-7 h-5 object-cover rounded-sm opacity-80 group-hover:opacity-100 transition-opacity border border-white/10"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="font-geist text-[18px] tracking-[-1.44px] group-hover:text-primary transition-colors">Canada</span>
              </div>
              <div className="h-5 w-px bg-white/25" />
              
              {/* USA */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <img
                  src={imgUSA}
                  alt="USA Flag"
                  className="w-7 h-5 object-cover rounded-sm opacity-80 group-hover:opacity-100 transition-opacity border border-white/10"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="font-geist text-[18px] tracking-[-1.44px] group-hover:text-primary transition-colors">USA</span>
              </div>
              <div className="h-5 w-px bg-white/25" />
              
              {/* India */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <img
                  src={imgIndia}
                  alt="India Flag"
                  className="w-7 h-5 object-cover rounded-sm opacity-80 group-hover:opacity-100 transition-opacity border border-white/10"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="font-geist text-[18px] tracking-[-1.44px] group-hover:text-primary transition-colors">India</span>
              </div>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h5 className="font-geist text-[16px] text-white font-normal tracking-[-0.16px]">
                Quick Links
              </h5>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-geist text-[14px] tracking-[-0.14px] text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="flex flex-col gap-4">
              <h5 className="font-geist text-[16px] text-white font-normal tracking-[-0.16px]">
                Products
              </h5>
              <ul className="flex flex-col gap-3">
                {products.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-geist text-[14px] tracking-[-0.14px] text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Solutions */}
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
              <h5 className="font-geist text-[16px] text-white font-normal tracking-[-0.16px]">
                Services & Solutions
              </h5>
              <ul className="flex flex-col gap-3">
                {services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-geist text-[14px] tracking-[-0.14px] text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar (Border-t) */}
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-white/60">
          
          {/* Left: Sub Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
            <a href="#" className="font-sans text-[13.5px] tracking-[-0.14px] hover:text-white transition-colors">Terms</a>
            <a href="#" className="font-sans text-[13.5px] tracking-[-0.14px] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="font-sans text-[13.5px] tracking-[-0.14px] hover:text-white transition-colors">Cookie Declaration</a>
          </div>

          {/* Middle: Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="#"
              className="font-sans text-[13.5px] tracking-[-0.14px] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4 text-white/60" />
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              className="font-sans text-[13.5px] tracking-[-0.14px] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Youtube className="w-4 h-4 text-white/60" />
              <span>Youtube</span>
            </a>
            <a
              href="#"
              className="font-sans text-[13.5px] tracking-[-0.14px] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Twitter className="w-4 h-4 text-white/60" />
              <span>X (Twitter)</span>
            </a>
            <a
              href="#"
              className="font-sans text-[13.5px] tracking-[-0.14px] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4 text-white/60" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Right: Copyright */}
          <div className="text-center lg:text-right">
            <p className="font-sans text-[13.5px] tracking-[-0.14px]">© 2026 Gnapi Technologies. All rights reserved.</p>
          </div>

        </div>

      </div>
    </footer>
  );
}
