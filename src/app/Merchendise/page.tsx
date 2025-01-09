"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../navbar";
import { useRouter } from "next/navigation";
import { Almendra_SC } from "next/font/google";
import { Roboto } from "next/font/google";
import MerchandisePage from "./merchDisplay";
import Contact from "../Contact-us/page";

const almendra = Almendra_SC({
  subsets: ["latin"],
  weight: "400",
});

gsap.registerPlugin(ScrollTrigger);

export default function Merchendise() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(videoRef.current, { opacity: 0 }, { opacity: 1, duration: 2 })
      .fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 },
        "-=1"
      )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=1"
      );

    // Parallax effect on scroll
    gsap.to(".parallax", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-black">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-10"
        >
          <source src="/Chamber-of-secrets.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-30"></div>

        {/* Navbar */}
        <nav className="relative z-30">
          <Navbar />
        </nav>

        {/* Main Content */}
        <div
          ref={containerRef}
          className="relative z-30 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 text-center"
        >
          <h1
            ref={titleRef}
            className={`text-6xl md:text-8xl font-bold text-white mb-4 parallax ${almendra.className}`}
            style={{
              textShadow: "0 0 10px rgba(255,255,255,0.5)",
            }}
          >
            Merchandise
          </h1>
          <h2
            ref={subtitleRef}
            className={`text-2xl md:text-3xl text-gray-300 parallax ${almendra.className}`}
          >
            Chamber of Secrets
          </h2>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center animate-bounce">
              <div className="w-1 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </main>
      <MerchandisePage />
      <Contact />
    </>
  );
}
