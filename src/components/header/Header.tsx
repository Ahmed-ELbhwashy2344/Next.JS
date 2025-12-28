"use client";
import Link from "next/link";
import Navbar from "./Navbar";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function Header() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.to(container.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: container }
  );
  return (
    <>
      <header
        ref={container}
        className="main-nav opacity-0 bg-amber-50 px-12 py-5 border-b-4  border-black/30 flex justify-between items-center"
      >
        <Navbar />
        <div>
          <Link
            className="mx-6 font-bold bg-blue-500 p-2.5 rounded-2xl text-white"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="mx-6 font-bold bg-blue-500 p-2.5 rounded-2xl text-white"
            href="/register"
          >
            Register
          </Link>
        </div>
      </header>
    </>
  );
}
