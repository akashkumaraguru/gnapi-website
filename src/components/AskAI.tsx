"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AskAI() {
  const [copiedStatus, setCopiedStatus] = useState<string | null>(null);

  const aiModels = [
    {
      name: "ChatGPT",
      icon: "/assets/ai-chatgpt.svg",
      glowColor: "hover:drop-shadow-[0_0_12px_rgba(16,163,127,0.6)]",
    },
    {
      name: "Gemini",
      icon: "/assets/ai-gemini.svg",
      glowColor: "hover:drop-shadow-[0_0_12px_rgba(138,180,248,0.7)]",
    },
    {
      name: "Perplexity",
      icon: "/assets/ai-perplexity.svg",
      glowColor: "hover:drop-shadow-[0_0_12px_rgba(217,119,6,0.6)]",
    },
  ];

  const handleModelClick = (modelName: string) => {
    const prompt = "visit gnapi.tech and tell me what they do, who they work with, and how they work";
    const encodedPrompt = encodeURIComponent(prompt);

    // Copy to clipboard first so it's ready in user's clipboard
    navigator.clipboard.writeText(prompt)
      .then(() => {
        setCopiedStatus(modelName);
        setTimeout(() => setCopiedStatus(null), 2500);
      })
      .catch(() => {});

    let url = "";
    if (modelName === "ChatGPT") {
      url = `https://chatgpt.com/?q=${encodedPrompt}`;
    } else if (modelName === "Gemini") {
      url = `https://gemini.google.com/app?q=${encodedPrompt}`;
    } else if (modelName === "Perplexity") {
      url = `https://www.perplexity.ai/?q=${encodedPrompt}`;
    }

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-16 bg-white w-full flex flex-col items-center justify-center relative select-none">
      {/* Light dotted grid background using CSS radial-gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(#d1d5db 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        {/* Gnapi Logo */}
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="w-14 h-14 flex items-center justify-center cursor-pointer"
        >
          <img 
            src="/assets/gnapi-logo.svg" 
            alt="Gnapi Logo" 
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Text Heading */}
        <div className="flex flex-col gap-1 mt-1">
          <h3 className="font-sans font-light text-base md:text-lg text-black tracking-normal leading-[19.2px]">
            Ask AI about Gnapi Technologies
          </h3>
        </div>

        {/* AI Logos Row */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center justify-center gap-6 mt-2">
            {aiModels.map((model) => (
              <motion.div
                key={model.name}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleModelClick(model.name)}
                className="cursor-pointer relative group"
                title={`Ask on ${model.name}`}
              >
                <img
                  src={model.icon}
                  alt={model.name}
                  className={`w-6 h-6 object-contain transition-all duration-300 ${model.glowColor}`}
                />
              </motion.div>
            ))}
          </div>

          {/* Feedback Copy Toast Message */}
          <div className="h-6">
            <AnimatePresence>
              {copiedStatus && (
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 0.7, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="font-geist text-xs text-neutral-500 font-light"
                >
                  Prompt copied! Opening {copiedStatus}...
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
