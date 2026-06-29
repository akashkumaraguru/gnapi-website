"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// Avatar asset constants
const imgLink = "/assets/avatar-client1.png";
const imgLink1 = "/assets/avatar-client2.png";
const imgLink2 = "/assets/avatar-client3.png";
const imgLink3 = "/assets/avatar-client4.png";
const imgLink4 = "/assets/avatar-client5.png";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for Next (slide left), -1 for Prev (slide right)

  const testimonials: Testimonial[] = [
    {
      name: "Alexander A.",
      role: "Senior Product Manager, Consumer Electronics Company",
      avatar: imgLink,
      rating: 5,
      text: "“They transformed our ideas into a well-designed, scalable product. The entire process was efficient, collaborative, and delivered on time.”",
    },
    {
      name: "Michael Stephen",
      role: "Senior Manager, Consumer Electronics Company",
      avatar: imgLink1,
      rating: 5,
      text: "“They consistently designed with clarity and trust in mind.”",
    },
    {
      name: "Emma Wilson",
      role: "Tech Lead, IQGeo",
      avatar: imgLink2,
      rating: 5,
      text: "“Their ability to combine great user experience with modern design helped us create a product our users genuinely enjoy.”",
    },
    {
      name: "Olivia Bennett",
      role: "Tech Lead, IQGeo",
      avatar: imgLink3,
      rating: 5,
      text: "“Their technical expertise and problem-solving approach helped us reduce complexity and accelerate product delivery.”",
    },
    {
      name: "Matthew Bennett",
      role: "Tech Lead, IQGeo",
      avatar: imgLink4,
      rating: 5,
      text: "“Their technical expertise and problem-solving approach helped us reduce complexity and accelerate product delivery.”",
    },
  ];

  const handleNext = () => {
    if (startIndex < testimonials.length - 3) {
      setDirection(1);
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setDirection(-1);
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="py-12 bg-[#f5f5f5] w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-2">
            <h2 className="font-sans text-3xl md:text-4xl font-semibold text-black tracking-tight leading-tight">
              What Our Clients Say
            </h2>
          </div>
        </div>

        {/* Testimonials List with smooth row sliding animation */}
        <div className="relative w-full overflow-hidden py-2">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={startIndex}
              custom={direction}
              variants={{
                enter: (dir: number) => ({
                  x: dir > 0 ? 100 : -100,
                  opacity: 0,
                }),
                center: {
                  x: 0,
                  opacity: 1,
                },
                exit: (dir: number) => ({
                  x: dir > 0 ? -100 : 100,
                  opacity: 0,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {testimonials.slice(startIndex, startIndex + 3).map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-2xl p-8 flex flex-col justify-between h-[280px] shadow-sm border border-black/[0.03] hover:shadow-xl transition-all duration-300 relative group cursor-pointer"
                >
                  <div className="flex flex-col gap-4">
                    {/* Stars and Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="font-sans font-medium text-xs text-black/60">
                        {item.rating.toFixed(1)}
                      </span>
                    </div>

                    {/* Testimonial text */}
                    <p className="font-geist font-normal text-sm md:text-base text-black/80 leading-relaxed line-clamp-4">
                      {item.text}
                    </p>
                  </div>

                  {/* Profile info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-black/5 mt-auto">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-100 flex-shrink-0">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"; // Fallback placeholder
                        }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-geist font-bold text-sm text-black">
                        {item.name}
                      </span>
                      <span className="font-geist font-normal text-xs text-black/60 line-clamp-1">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Centered Slider Controls Below the Cards */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`w-10 h-10 rounded-full border border-black/20 flex items-center justify-center transition-all ${
              startIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100 hover:bg-black hover:text-white cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex >= testimonials.length - 3}
            className={`w-10 h-10 rounded-full border border-black/20 flex items-center justify-center transition-all ${
              startIndex >= testimonials.length - 3
                ? "opacity-30 cursor-not-allowed"
                : "opacity-100 hover:bg-black hover:text-white cursor-pointer"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
