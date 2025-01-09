// pages/theme.js

import Image from "next/image";
import aboutus from "./assets/aboutus.png";
import bgImg from "./assets/backgroundP2.jpeg";
export default function About() {
  return (
    <div className="relative min-h-[600px] w-full overflow-hidden">
      {/* Content Overlay */}
      <Image
        src={bgImg}
        alt="Starry night sky with bridge silhouette"
        fill
        className="object-cover brightness-50"
        priority
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-30"></div>

      <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-center px-4 text-center">
        <div className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[200px]">
          <Image
            src={aboutus}
            alt="Theme Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="mx-auto max-w-2xl text-sm text-white/90 sm:text-xl">
          Synapse, DAIICT&apos;s annual college fest, unites global artists and
          creative minds to showcase unique collages, share creative processes,
          and transforms into a vibrant night of live music, DJ performances,
          and dance parties, fostering creative connections and celebrating
          artistic expression.
        </p>
      </div>
    </div>
  );
}
