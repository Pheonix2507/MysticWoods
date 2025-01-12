"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import image5 from "@/app/assets/Group.png";
import carasoul1 from "@/app/assets/Carasoul1.png";
import carasoul2 from "@/app/assets/Carasoul2.png";
import carasoul3 from "@/app/assets/Carasoul3.png";
import carasoul4 from "@/app/assets/Carasoul4.png";
// import { Almendra_SC } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// const almendra = Almendra_SC({
//   subsets: ["latin"],
//   weight: "400",
// });
gsap.registerPlugin(ScrollTrigger);

const pages = [
  { name: "Nature", image: carasoul1 },
  { name: "City", image: carasoul2 },
  { name: "Technology", image: carasoul3 },
  { name: "Space", image: carasoul4 },
];

export default function PerformersCarousel() {
  return (
    <div className="relative overflow-hidden w-full h-screen flex items-center justify-center">
      {/* Carousel */}
      <div className="w-full max-w-5xl px-4">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            loop: true,
          }}
          className="w-full bg-transparent mx-auto flex justify-center items-center"
        >
          <CarouselContent>
            {pages.map((page, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-4">
                  <Image
                    src={page.image}
                    alt={page.name}
                    className="rounded-lg object-cover w-full h-auto"
                    width={300}
                    height={200}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 w-full">
        <Image
          src={image5}
          alt="Merge Effect Image"
          className="w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}