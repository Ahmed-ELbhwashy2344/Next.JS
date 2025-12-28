"use client"; // ضروري جداً لأن GSAP بتتعامل مع الـ DOM
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// تفعيل إضافة السكرول
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function GsapLearningPage() {
  const container = useRef(null); // Ref للمكان اللي فيه العناصر

  useGSAP(
    () => {
      // 1. انيميشن الـ Hero (يشتغل فوراً)
      const tl = gsap.timeline(); // بنعمل "تايم لاين" عشان الحركات تيجي ورا بعض بانتظام

      tl.to("#hero-title", {
        opacity: 1,
        y: -20,
        duration: 1,
        ease: "power4.out",
      })
        .to(
          "#hero-desc",
          { opacity: 1, y: -20, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        ) // يبدأ قبل ما اللي قبله يخلص بـ 0.5 ثانية
        .to(
          "#hero-btn",
          { opacity: 1, y: -20, duration: 0.5, ease: "power3.out" },
          "-=0.3"
        ); // 2. انيميشن الكروت مع السكرول
      gsap.to("#feature-card", {
        opacity: 1,
        x: 25,
        duration: 2,
        ease: "power2.out",
        stagger: 1, // الفرق الزمني بين كل كرت والتاني
        scrollTrigger: {
          trigger: "#feature-card", // مين العنصر اللي لما يلمس الشاشة يبدأ الأنيميشن؟
          start: "top 90%", // لما "قمة" الكرت تلمس "80%" من ارتفاع الشاشة
          end: "top 10%",
          scrub: true, // تشغيل عند الدخول، وعكس عند الخروج (رايح جاي)
        },
      });
      gsap.to(".feature-cardd", {
        opacity: 1,
        x: -25,
        duration: 1,
        ease: "power2.out",
        stagger: 0.25, // الفرق الزمني بين كل كرت والتاني
        scrollTrigger: {
          trigger: ".feature-cardd", // مين العنصر اللي لما يلمس الشاشة يبدأ الأنيميشن؟
          end: "top 10%",
          start: "top 90%", // لما "قمة" الكرت تلمس "80%" من ارتفاع الشاشة
          toggleActions: "play none none reverse",
        },
      });
      // 3. انيميشن الصورة والنص (Side Reveal)
      // الصورة بتيجي من الشمال
      gsap.to("#side-image", {
        opacity: 1,
        x: 0, // هترجع لمكانها الأصلي في الـ CSS
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#side-image",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // النص بييجي من اليمين
      gsap.to("#side-text", {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#side-text",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container }
  ); // الـ scope بيخلي GSAP تدور بس جوه الـ Ref ده
  // جوه الـ Component بتاعك قبل الـ Return
  return (
    <main ref={container} className="bg-[#eff2f1] min-h-[200vh] font-sans">
      {/* 1. Hero Section (للتجربة عند تحميل الصفحة) */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4 bg-[#3b5d50]">
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-bold text-white mb-6 opacity-0"
        >
          Design Your Future
        </h1>
        <p id="hero-desc" className="text-white/70 max-w-xl mb-8 opacity-0">
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <button
          id="hero-btn"
          className="bg-amber-400 px-8 py-3 rounded-full font-bold opacity-0"
        >
          Get Started
        </button>
      </section>

      {/* 2. Feature Cards (لتجربة الـ Stagger Effect عند السكرول) */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-[#2f2f2f]">
          Our Specialized Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              id="feature-card"
              className=" bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center opacity-0"
            >
              <div className="w-16 h-16 bg-[#3b5d50]/10 rounded-full mb-6 flex items-center justify-center text-[#3b5d50] text-2xl font-bold">
                0{item}
              </div>
              <h3 className="text-xl font-bold mb-4">Service Layer {item}</h3>
              <p className="text-gray-500">
                Learning GSAP scroll triggers is easier with structured layouts
                like this one.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 container mx-auto ml-50 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="feature-cardd bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center opacity-0 "
            >
              <div className="w-16 h-16 bg-[#3b5d50]/10 rounded-full mb-6 flex items-center justify-center text-[#3b5d50] text-2xl font-bold">
                0{item}
              </div>
              <h3 className="text-xl font-bold mb-4">Service Layer {item}</h3>
              <p className="text-gray-500">
                Learning GSAP scroll triggers is easier with structured layouts
                like this one.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Image & Text Section (لتجربة الـ Reveal من اليمين واليسار) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            id="side-image"
            className="rounded-3xl overflow-hidden shadow-2xl opacity-0 -translate-x-20"
          >
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000"
              alt="Furniture"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div id="side-text" className="opacity-0 translate-x-20">
            <h2 className="text-4xl font-bold mb-6 text-[#2f2f2f]">
              Crafted Excellence
            </h2>
            <p className="text-gray-600 mb-6">
              This section is perfect for testing how to trigger animations as
              they enter the viewport from opposite sides.
            </p>
            <ul className="space-y-4 text-[#3b5d50] font-medium">
              <li>✓ Modern Aesthetic</li>
              <li>✓ Durable Materials</li>
              <li>✓ Ergonomic Design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Space */}
      <footer className="h-64 bg-[#2f2f2f] flex items-center justify-center text-white/20">
        Scroll Up to See Magic
      </footer>
    </main>
  );
}
