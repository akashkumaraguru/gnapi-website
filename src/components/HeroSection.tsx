"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Canvas Particle Network Overlay (transparent background to let video show through)
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const particleCount = Math.min(Math.floor((width * height) / 10000), 80);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 0.8;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw particles and links
      ctx.fillStyle = "rgba(179, 180, 53, 0.4)";
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.18;
            ctx.strokeStyle = `rgba(179, 180, 53, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 size-full z-10 pointer-events-none" />;
}

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      title: "Geospatial & Engineering Solutions",
      description:
        "Transform geospatial data into actionable insights. Reduce network planning time by 60%. Lower infrastructure costs by 35%.",
    },
    {
      title: "Product Development",
      description:
        "Transform ideas into impactful digital products. Streamline product delivery by 60%. Create user-centric experiences that drive growth.",
    },
    {
      title: "Software Engineering Solutions",
      description:
        "Build reliable, scalable software for modern businesses. Improve team productivity by 45%. Reduce operational costs by 30%.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      value: "10+ Years",
      label: "A decade of trusted industry expertise",
    },
    {
      value: "30+ Projects",
      label: "Transforming ideas into successful digital products",
    },
    {
      value: "99% Sucess", // Spelled exactly like Figma design "Sucess"
      label: "Consistently achieving exceptional client outcomes",
    },
  ];

  return (
    <section className="relative h-[920px] w-full flex flex-col justify-between overflow-hidden bg-[#040814] select-none">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/Gnapi-Video.mp4" type="video/mp4" />
      </video>

      {/* Grid Overlay / Particles (z-index 10) */}
      <ParticleBackground />

      {/* Dark Gradient Overlay to match Figma opacity */}
      <div className="absolute inset-0 bg-gradient-to-l from-[rgba(0,0,0,0.55)] to-[rgba(0,0,0,0.45)] z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#040814] to-transparent z-10 pointer-events-none" />

      {/* Content Container (z-index 20) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pt-[240px]">
        <div className="h-[280px] md:h-[220px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col gap-6"
            >
              <h1 className="font-sans font-bold text-4xl md:text-[64px] text-white tracking-tight md:tracking-[-3.2px] leading-tight md:leading-[69px] max-w-4xl capitalize">
                {slides[index].title}
              </h1>
              <p className="font-geist font-light text-lg md:text-[32px] text-white/90 max-w-3xl leading-relaxed md:leading-[35px] tracking-normal md:tracking-[-0.32px]">
                {slides[index].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Stats / KPIs Container (z-index 20) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full pb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/20 pt-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1 }}
              whileHover={{ y: -4 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`flex flex-col gap-2 group cursor-pointer border-b border-transparent hover:border-primary/50 pb-4 transition-all duration-300 ${
                i > 0 ? "opacity-60 hover:opacity-100" : "opacity-100"
              }`}
            >
              <span className="font-outfit font-light text-3xl md:text-[42px] leading-tight md:leading-[54px] text-white tracking-normal md:tracking-[-2.16px] group-hover:text-primary transition-colors">
                {stat.value}
              </span>
              <span className="font-geist font-normal text-sm md:text-[18px] leading-snug md:leading-[20px] text-white/70 group-hover:text-white transition-colors tracking-normal md:tracking-[-0.36px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
