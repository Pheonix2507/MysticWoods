"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import bgImg from "./assets/CarasoulBg.jpeg";
import image5 from "./assets/image5.png";
import carasoul1 from "./assets/Carasoul1.png";
import carasoul2 from "./assets/Carasoul2.png";
import carasoul3 from "./assets/Carasoul3.png";
import carasoul4 from "./assets/Carasoul4.png";

gsap.registerPlugin(ScrollTrigger);

export default function PerformersCarousel() {
  const containerRef = useRef(null);
  const eventsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".panel"); // Select all panels
      const totalPanels = sections.length;

      // Horizontal scrolling for carousel after event details
      gsap.to(sections, {
        xPercent: -100 * (totalPanels - 1), // Move horizontally for each panel
        ease: "none",
        scrollTrigger: {
          trigger: eventsRef.current, // Trigger the scroll after events section
          pin: containerRef.current, // Pin the container while scrolling
          scrub: 1, // Smooth scrolling
          start: "top bottom", // Start when the upcoming events section reaches the bottom
          end: () => `+=${window.innerWidth * (totalPanels - 1)}`, // Adjust end dynamically
          markers: true, // Use markers for debugging (can be removed later)
        },
      });

      // ScrollTrigger for artist panels to appear when 50% of upcoming events is scrolled
      gsap.fromTo(
        ".artist-panel",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: eventsRef.current,
            start: "top 50%", // Trigger after 50% of the event section is visible
            end: "bottom 50%", // Finish when 50% of the section is scrolled
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div className="w-full">
      {/* Event Details Section */}
      <div
        ref={eventsRef}
        className="intro-section min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex flex-col items-center justify-center p-10"
      >
        <h1 className="text-5xl font-bold text-white mb-6">Upcoming Events</h1>
        <p className="text-lg text-white text-center max-w-2xl">
          Join us for an exciting lineup of performances featuring world-class
          artists! Scroll down to explore the artists and their mesmerizing
          acts. Let's celebrate art and creativity together.
        </p>
        <div className="mt-10">
          <button className="px-6 py-3 text-lg font-semibold bg-white text-purple-600 rounded-md shadow hover:shadow-lg hover:bg-purple-50">
            Learn More
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Section */}
      <div
        ref={containerRef}
        className="container relative flex w-[400%] overflow-hidden"
      >
        {/* Background Panel */}
        <div className="panel blue relative min-h-screen w-screen">
          <Image
            src={bgImg}
            alt="Background"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        {/* Artist Panels - these will appear after the 50% scroll of the events section */}
        <section className="artist-panel panel red relative min-h-screen w-screen bg-red-400 flex items-center justify-center opacity-0">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Artist 1</h1>
            <div className="relative w-[300px] h-[300px] mx-auto">
              <Image
                src={carasoul1}
                alt="Performer 1"
                fill
                className="relative object-cover rounded-full transition-transform duration-300 shadow-lg"
              />
            </div>
          </div>
        </section>
        <section className="artist-panel panel purple relative min-h-screen w-screen flex items-center justify-center bg-purple-500 opacity-0">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Artist 2</h1>
            <div className="relative w-[300px] h-[300px] mx-auto">
              <Image
                src={carasoul2}
                alt="Performer 2"
                fill
                className="relative object-cover rounded-full transition-transform duration-300 shadow-lg"
              />
            </div>
          </div>
        </section>
        <section className="artist-panel panel orange relative min-h-screen w-screen flex items-center justify-center bg-orange-400 opacity-0">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Artist 3</h1>
            <div className="relative w-[300px] h-[300px] mx-auto">
              <Image
                src={carasoul3}
                alt="Performer 3"
                fill
                className="relative object-cover rounded-full transition-transform duration-300 shadow-lg"
              />
            </div>
          </div>
        </section>
        <section className="artist-panel panel green relative min-h-screen w-screen flex items-center justify-center bg-green-500 opacity-0">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Artist 4</h1>
            <div className="relative w-[300px] h-[300px] mx-auto">
              <Image
                src={carasoul4}
                alt="Performer 4"
                fill
                className="relative object-cover rounded-full transition-transform duration-300 shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Bottom Silhouette */}
        <div className="absolute bottom-0 w-full">
          <Image
            src={image5}
            alt="City Silhouette"
            className="w-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
