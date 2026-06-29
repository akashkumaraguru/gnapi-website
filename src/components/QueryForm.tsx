"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

export default function QueryForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSelectType = (type: string) => {
    setFormData({
      ...formData,
      inquiryType: type,
    });
    setError("");
  };

  const validateStep = () => {
    if (step === 1 && !formData.name.trim()) {
      setError("Please enter your name to proceed.");
      return false;
    }
    if (step === 2) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email)) {
        setError("Please enter a valid email address.");
        return false;
      }
    }
    if (step === 3 && !formData.inquiryType) {
      setError("Please select one of the options.");
      return false;
    }
    if (step === 4 && !formData.message.trim()) {
      setError("Please tell us more details about your query.");
      return false;
    }
    return true;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      if (step < 4) {
        setStep((prev) => prev + 1);
      } else {
        setIsSubmitted(true);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setError("");
      setStep((prev) => prev - 1);
    }
  };

  const inquiryOptions = [
    "Software Engineering Solutions",
    "Geospatial & Engineering Solutions",
    "Product Development",
    "Careers / Recruitment",
    "Other Business Inquiry",
  ];

  return (
    <section id="contact" className="py-12 bg-white w-full">
      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col gap-12 items-center">
        {/* Section Header */}
        <div className="text-center flex flex-col gap-2 max-w-xl">
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-dark tracking-tight">
            Have an Queries?
          </h2>
          <p className="font-sans text-[#131315]/70 text-sm md:text-base leading-relaxed">
            Fill out the form below and our engineering team will get in touch with you.
          </p>
        </div>

        {/* Wizard Form Card */}
        <div className="bg-[#fcfdfd] border border-black/[0.05] rounded-3xl p-8 md:p-12 shadow-xl w-full max-w-[805px] relative overflow-hidden min-h-[380px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleNext}
                className="flex flex-col justify-between h-full min-h-[250px] gap-6"
              >
                <div>
                  {/* Step Header */}
                  {step === 1 && (
                    <div className="flex flex-col gap-2 mb-6">
                      <label className="font-sans font-medium text-2xl text-dark tracking-tight">
                        What’s your Name
                      </label>
                      <p className="font-sans text-sm text-[#131315]/60">
                        So we know who we're talking to.
                      </p>
                    </div>
                  )}
                  {step === 2 && (
                    <div className="flex flex-col gap-2 mb-6">
                      <label className="font-sans font-medium text-2xl text-dark tracking-tight">
                        What’s your Email
                      </label>
                      <p className="font-sans text-sm text-[#131315]/60">
                        So we can get back to you with answers.
                      </p>
                    </div>
                  )}
                  {step === 3 && (
                    <div className="flex flex-col gap-2 mb-6">
                      <label className="font-sans font-medium text-2xl text-dark tracking-tight">
                        How can we help you?
                      </label>
                      <p className="font-sans text-sm text-[#131315]/60">
                        Select the primary nature of your query.
                      </p>
                    </div>
                  )}
                  {step === 4 && (
                    <div className="flex flex-col gap-2 mb-6">
                      <label className="font-sans font-medium text-2xl text-dark tracking-tight">
                        Tell us more details
                      </label>
                      <p className="font-sans text-sm text-[#131315]/60">
                        Provide specific context or scope requirements.
                      </p>
                    </div>
                  )}

                  {/* Step Fields */}
                  {step === 1 && (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full h-[64px] px-6 rounded-xl border border-[#d4d4d4] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none font-sans text-lg text-dark transition-all"
                    />
                  )}
                  {step === 2 && (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      autoFocus
                      className="w-full h-[64px] px-6 rounded-xl border border-[#d4d4d4] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none font-sans text-lg text-dark transition-all"
                    />
                  )}
                  {step === 3 && (
                    <div className="flex flex-col gap-3">
                      {inquiryOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleSelectType(option)}
                          className={`w-full text-left py-4 px-6 rounded-xl border transition-all font-sans text-sm md:text-base ${
                            formData.inquiryType === option
                              ? "border-primary bg-primary/5 text-dark font-medium"
                              : "border-[#d4d4d4] hover:bg-black/[0.02]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                  {step === 4 && (
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your requirements or questions..."
                      autoFocus
                      rows={4}
                      className="w-full p-6 rounded-xl border border-[#d4d4d4] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none font-sans text-base text-dark transition-all resize-none"
                    />
                  )}

                  {/* Error display */}
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-2 font-geist"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>

                {/* Form Footer Buttons */}
                <div className="flex items-center justify-between border-t border-black/5 pt-6 mt-auto">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-2.5 rounded-lg border border-black/20 text-sm font-semibold text-dark hover:bg-black/5 transition-all cursor-pointer"
                    >
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  <div className="flex items-center gap-6">
                    <span className="font-sans text-sm text-[#131315]/60">
                      <strong className="text-primary font-semibold">{step} </strong>
                      of 4 steps
                    </span>
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-[#8d8e33] text-white font-semibold text-base transition-all duration-300 hover:shadow-[0_8px_20px_rgba(179,180,53,0.3)] shadow-[0_8px_16px_rgba(179,180,53,0.2)] cursor-pointer"
                    >
                      {step === 4 ? "Submit" : "Next"}
                    </button>
                  </div>
                </div>
              </motion.form>
            ) : (
              // Success confirmation state
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center border border-green-200">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-sans text-2xl font-bold text-dark">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="font-sans text-[#131315]/70 max-w-md leading-relaxed">
                    Your request regarding <strong>{formData.inquiryType}</strong> has been received successfully. We will contact you at <strong>{formData.email}</strong> shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                    setFormData({ name: "", email: "", inquiryType: "", message: "" });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-lg border border-black/20 text-sm font-semibold text-dark hover:bg-black/5 transition-all"
                >
                  Submit another query
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
