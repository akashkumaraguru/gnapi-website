"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const imgGroup5 = "/assets/gnapi-logo.svg";

interface NavItem {
  name: string;
  hasDropdown: boolean;
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "Products", hasDropdown: true },
    { name: "Services & Solutions", hasDropdown: true },
    { name: "Life at Gnapi", hasDropdown: false },
    { name: "About Gnapi", hasDropdown: false },
    { name: "Careers", hasDropdown: false },
  ];

  const productsList = [
    { name: "Ticketspi", image: "/assets/prod-ticketspi.png" },
    { name: "Katalyst", image: "/assets/prod-katalyst.png" },
    { name: "Stratum", image: "/assets/prod-stratum.png" },
    { name: "Gnapi Design System", image: "/assets/prod-designsystem.png" },
  ];

  const servicesList = [
    { name: "Engineering", image: "/assets/provide-engineering.png" },
    { name: "GIS", image: "/assets/provide-getty1.png" },
    { name: "Clean Transportation", image: "/assets/provide-getty2.png" },
    { name: "Advanced Energy", image: "/assets/provide-getty3.png" },
    { name: "IT Solutions", image: "/assets/provide-getty4.png" },
    { name: "AR / VR", image: "/assets/diff-panel2.png" },
    { name: "Networking Solutions", image: "/assets/diff-panel4.png" },
    { name: "Electrical & Power", image: "/assets/diff-panel5.png" },
  ];

  const solutionsList = [
    { name: "Digital Solutions", image: "/assets/diff-panel1.png" },
    { name: "Data Management", image: "/assets/diff-panel3.png" },
    { name: "Network Modeling", image: "/assets/diff-panel6.png" },
    { name: "System Integration", image: "/assets/diff-panel7.png" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-[#0c0c0c]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12">
            <img
              src={imgGroup5}
              alt="Gnapi Tech Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-sans font-medium text-lg tracking-wide text-white group-hover:text-primary transition-colors">
            Gnapi.tech
          </span>
        </a>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-sans font-normal text-white/90 hover:text-primary transition-colors duration-200 py-2">
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <ChevronDown className={`w-4 h-4 transition-transform duration-250 ${activeDropdown === item.name ? "rotate-180 text-primary" : "text-white/60"}`} />
                )}
              </button>

              <AnimatePresence>
                {item.hasDropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full mt-2 rounded-[16px] bg-white border border-black/5 p-3 shadow-2xl z-50 ${
                      item.name === "Products"
                        ? "left-0 w-max"
                        : "left-1/2 -translate-x-[62%] w-[764px] max-w-[90vw]"
                    }`}
                  >
                    {/* Products Dropdown Panel */}
                    {item.name === "Products" && (
                      <div className="flex items-center gap-3">
                        {productsList.map((product) => (
                          <div
                            key={product.name}
                            className="w-[180px] h-[120px] bg-[#f5f5f5] rounded-[8px] overflow-hidden flex items-center justify-center p-4 hover:bg-neutral-200/80 transition-colors cursor-pointer"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="max-h-[85%] max-w-[85%] object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Services & Solutions Dropdown Panel */}
                    {item.name === "Services & Solutions" && (
                      <div className="flex flex-col gap-6 text-left p-2">
                        {/* Services Grid (8 items: 4 cols x 2 rows) */}
                        <div>
                          <span className="block text-black/55 text-[12px] font-sans font-semibold tracking-wider uppercase mb-3">
                            Services
                          </span>
                          <div className="grid grid-cols-4 gap-2">
                            {servicesList.map((service) => (
                              <div
                                key={service.name}
                                className="group/card relative h-[110px] rounded-[8px] overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                              >
                                <img
                                  src={service.image}
                                  alt={service.name}
                                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/45 transition-colors group-hover/card:bg-black/55" />
                                <span className="absolute bottom-0 left-0 p-3 text-white text-[15px] font-medium font-outfit leading-tight tracking-wide z-10">
                                  {service.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Solutions Grid (4 items: 4 cols) */}
                        <div>
                          <span className="block text-black/55 text-[12px] font-sans font-semibold tracking-wider uppercase mb-3">
                            Solutions
                          </span>
                          <div className="grid grid-cols-4 gap-2">
                            {solutionsList.map((solution) => (
                              <div
                                key={solution.name}
                                className="group/card relative h-[110px] rounded-[8px] overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                              >
                                <img
                                  src={solution.image}
                                  alt={solution.name}
                                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/45 transition-colors group-hover/card:bg-black/55" />
                                <span className="absolute bottom-0 left-0 p-3 text-white text-[15px] font-medium font-outfit leading-tight tracking-wide z-10">
                                  {solution.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop Contact Us Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href="#contact"
          className="hidden md:inline-flex h-[34px] w-[99px] items-center justify-center border border-primary rounded-[8px] bg-gradient-to-br from-primary to-[#7b7914] text-[14px] font-medium font-outfit text-white leading-[22px] transition-all duration-300 hover:shadow-[0_4px_12px_rgba(179,180,53,0.3)] shadow-[0_4px_8px_rgba(179,180,53,0.15)] cursor-pointer"
        >
          Contact Us
        </motion.a>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Drawer Dropdown Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="md:hidden absolute top-full left-0 right-0 bg-[#0c0c0c]/98 border-b border-white/10 backdrop-blur-lg overflow-hidden z-40"
            >
              <div className="flex flex-col p-6 gap-4 text-left text-white max-h-[80vh] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.name} className="flex flex-col gap-1">
                    <button
                      onClick={() => {
                        if (item.hasDropdown) {
                          setActiveMobileDropdown(activeMobileDropdown === item.name ? null : item.name);
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                      className="flex items-center justify-between py-2.5 text-base font-sans font-medium text-white/95 border-b border-white/5"
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown className={`w-4 h-4 transition-transform duration-250 ${activeMobileDropdown === item.name ? "rotate-180 text-primary" : "text-white/60"}`} />
                      )}
                    </button>

                    {/* Accordion Submenu Links */}
                    {item.hasDropdown && activeMobileDropdown === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="pl-4 flex flex-col gap-2 py-2 border-l border-white/10"
                      >
                        {item.name === "Products" &&
                          productsList.map((product) => (
                            <a
                              key={product.name}
                              href="#"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-sm text-white/70 hover:text-primary py-1 block"
                            >
                              {product.name}
                            </a>
                          ))}
                        {item.name === "Services & Solutions" && (
                          <>
                            <div className="text-[11px] font-sans font-semibold uppercase tracking-wider text-white/40 mt-1">
                              Services
                            </div>
                            {servicesList.map((service) => (
                              <a
                                key={service.name}
                                href="#"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-sm text-white/70 hover:text-primary py-1 block pl-2"
                              >
                                {service.name}
                              </a>
                            ))}
                            <div className="text-[11px] font-sans font-semibold uppercase tracking-wider text-white/40 mt-2">
                              Solutions
                            </div>
                            {solutionsList.map((solution) => (
                              <a
                                key={solution.name}
                                href="#"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-sm text-white/70 hover:text-primary py-1 block pl-2"
                              >
                                {solution.name}
                              </a>
                            ))}
                          </>
                        )}
                      </motion.div>
                    )}
                  </div>
                ))}

                {/* Mobile Contact Us Button */}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-6 h-[44px] w-full flex items-center justify-center border border-primary rounded-[8px] bg-gradient-to-br from-primary to-[#7b7914] text-sm font-medium font-outfit text-white transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
