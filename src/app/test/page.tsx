"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GsapLearningPage() {
  const container = useRef(null);

  useGSAP(
    () => {
      // 1. انيميشن الـ Hero
      const tl = gsap.timeline();
      tl.to("#hero-title", { opacity: 1, y: 0, duration: 1, ease: "power4.out" })
        .to("#hero-desc", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .to("#hero-btn", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.3");

      // 2. انيميشن الكروت (تتحرك من الأسفل للأعلى فقط لضمان التوافق مع الموبايل)
      gsap.to(".feature-card-item", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".grid-container",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // 3. انيميشن الصورة والنص (Reveal)
      // نستخدم MatchMedia لعمل حركات مختلفة للموبايل عن الكمبيوتر
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // حركات الكمبيوتر (من الجوانب)
        gsap.to("#side-image", {
          opacity: 1,
          x: 0,
          duration: 1.5,
          scrollTrigger: { trigger: "#side-image", start: "top 80%", toggleActions: "play none none reverse" }
        });
        gsap.to("#side-text", {
          opacity: 1,
          x: 0,
          duration: 1.5,
          scrollTrigger: { trigger: "#side-text", start: "top 80%", toggleActions: "play none none reverse" }
        });
      });

      mm.add("(max-width: 767px)", () => {
        // حركات الموبايل (من الأسفل للأعلى فقط)
        gsap.to("#side-image, #side-text", {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: { trigger: "#side-image", start: "top 90%", toggleActions: "play none none reverse" }
        });
      });
    },
    { scope: container }
  );

  return (
    <main ref={container} className="bg-[#eff2f1] min-h-screen font-sans overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-[#3b5d50]">
        <h1 id="hero-title" className="text-4xl md:text-7xl font-bold text-white mb-6 opacity-0 translate-y-10">
          Design Your Future
        </h1>
        <p id="hero-desc" className="text-white/70 max-w-xl mb-8 opacity-0 translate-y-10 text-sm md:text-base">
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <button id="hero-btn" className="bg-amber-400 px-8 py-3 rounded-full font-bold opacity-0 translate-y-10 hover:bg-amber-500 transition-colors">
          Get Started
        </button>
      </section>

      {/* 2. Feature Cards Section */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-[#2f2f2f]">
          Our Specialized Services
        </h2>
        <div className="grid-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="feature-card-item bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center opacity-0 translate-y-16"
            >
              <div className="w-14 h-14 bg-[#3b5d50]/10 rounded-full mb-6 flex items-center justify-center text-[#3b5d50] text-xl font-bold">
                0{item}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Service Layer {item}</h3>
              <p className="text-sm text-gray-500">
                Learning GSAP scroll triggers is easier with structured layouts like this one.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Image & Text Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div
            id="side-image"
            className="rounded-3xl overflow-hidden shadow-xl opacity-0 translate-y-10 md:translate-y-0 md:-translate-x-20"
          >
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000"
              alt="Furniture"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
          <div id="side-text" className="opacity-0 translate-y-10 md:translate-y-0 md:translate-x-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2f2f2f]">
              Crafted Excellence
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              This section is perfect for testing how to trigger animations as they enter the viewport from opposite sides.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-[#3b5d50] font-medium text-sm">
              <li>✓ Modern Aesthetic</li>
              <li>✓ Durable Materials</li>
              <li>✓ Ergonomic Design</li>
              <li>✓ Eco Friendly</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-[#2f2f2f] text-center text-white/40 text-sm">
        &copy; 2025 GSAP Learning Project. All rights reserved.
      </footer>
    </main>
  );
}