"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Asset URLs
const imgGlobalConnectivity = "/assets/blog-transformation.png";
const imgSmartInfrastructure = "/assets/blog-infrastructure.png";
const imgSmartCities = "/assets/blog-cities.png";
const imgSmartLogistics = "/assets/blog-logistics.png";

interface BlogCard {
  title: string;
  image: string;
  category: string;
  date: string;
}

export default function Blogs() {
  const blogs: BlogCard[] = [
    {
      title: "Global Connectivity & Digital Transformation",
      image: imgGlobalConnectivity,
      category: "Transformation",
      date: "June 25, 2026",
    },
    {
      title: "Smart Infrastructure & Energy Networks",
      image: imgSmartInfrastructure,
      category: "Infrastructure",
      date: "June 18, 2026",
    },
    {
      title: "Smart Cities & Digital Innovation",
      image: imgSmartCities,
      category: "Innovation",
      date: "June 10, 2026",
    },
    {
      title: "Smart Logistics & Supply Chain Systems",
      image: imgSmartLogistics,
      category: "Logistics",
      date: "June 02, 2026",
    },
  ];

  return (
    <section className="py-12 bg-white w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="flex items-end justify-between w-full border-b border-black/5 pb-6">
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-black tracking-tight leading-tight">
            Blogs
          </h2>
          <a
            href="#"
            className="group flex items-center gap-1 text-sm font-semibold text-primary hover:text-[#8d8e33] transition-colors underline decoration-solid decoration-1 underline-offset-4"
          >
            View all articles
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={`${blog.title}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-[422px] rounded-[40px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Background */}
              <div className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105 size-full">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover size-full"
                  onError={(e) => {
                    // Fallback placeholder image if figma local asset isn't ready
                    e.currentTarget.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80";
                  }}
                />
                {/* Gradient dark overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
              </div>

              {/* Card Title */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end text-white z-10">
                <h3 className="font-sans font-semibold text-2xl md:text-[28px] tracking-tight leading-[1.2] transition-colors duration-250 group-hover:text-primary">
                  {blog.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
