"use client";

import React from "react";
import Image from "next/image";
import back from "../assets/image_12.png";
import bgImg from "../assets/Event_text.svg"; // Replace with your actual background image
import { Roboto } from "next/font/google";
import Foort from "../End-App/page"


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Event data array
const events = [
  {
    title: "Rampage",
    description:
      "Lights, camera, fashion! Watch new designers showcase their creativity as models strut to the music, impressing icons like Madhu Sneha and Richa.",
    // image: '/assets/bgimg.png' , // Replace with the actual image path
  },
  {
    title: "CosCon",
    description:
      "Join CosCon for a day of cosplay magic! Celebrate creativity with characters from anime, Bollywood, and Hollywood. Unleash your imagination and bring fantasy to life!",
    // image: '/assets/bgimg.png', // Replace with the actual image path
  },
];

const FashionEvents: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh]">
        <Image
          src={back}
          alt="Fashion Events Background"
          layout="fill"
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <Image
            src = {bgImg}
            alt="Text Events"
            ></Image>
        </div>
      </div>

      {/* Events Section */}
      <div className="py-16 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map through events dynamically */}
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl shadow-md overflow-hidden"
            >
              {/* Event Image */}
              <div className="relative w-full h-40 md:h-60">
                {/* <Image
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  className="object-cover"
                /> */}
              </div>

              {/* Event Details */}
              <div className="p-6 bg-black text-white border border-white">
                <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
                <p className={`${roboto.className} mb-6`}>{event.description}</p>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Foort/>
    </div>
  );
};

export default FashionEvents;
