"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import synapselogo from "./assets/synapselogo.png";
import bgImage from "./assets/castle2.png";
import Events from "./events";
import Theme from "./theme";
import Navbar from "./navbar";
import About from "./about";
import PerformersCarousel from "./carasoul";

export default function HomePage() {
  return (
    <>
      <main className="relative bg-black min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src={bgImage}
          alt="Mystical night scene"
          fill
          className="object-cover relative"
          priority
        />

        {/* Navigation */}
        <nav className="relative z-50 flex justify-between items-center ">
          <Navbar />
        </nav>

        {/* Main Content */}
        <div className="relative flex flex-col items-center min-h-[calc(100vh-80px)] text-center">
          {/* Centered Synapse Logo */}
          <div className="w-full h-[50vh] flex items-center flex-col sm:gap-80">
            <Image
              src={synapselogo}
              alt="Synapse Logo"
              className="w-80 p-5 sm:w-[40vw] h-fit"
            />
            {/* Register Button */}
            <Button
              asChild
              className="px-8 py-6 text-lg bg-black/30 hover:bg-black/40 backdrop-blur-sm
                     border border-white/20 text-white rounded-md transition-all
                     hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <Link href="/Register-Page">Register</Link>
            </Button>
          </div>
        </div>
        <div className="mx-auto z-50 relative text-center text-sm text-white/90 sm:text-lg md:text-xl leading-relaxed">For accomodation and Event Registration, Login into your account</div>
      </main>

      <Events />
      <Theme />
      <PerformersCarousel />
      <About />
      {/* <MainAboutUS /> */}
    </>
  );
}
