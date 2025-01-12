"use client";

import React from "react";
import Image from "next/image";
import back from "../assets/image_12.png";
import bgImg from "../assets/Event_text.svg"; // Replace with your actual background image
import { Roboto } from "next/font/google";
import Foort from "../End-App/page"
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});


// Event data array
const events = [
  {
    name: "Rampage",
    description:
      "Lights, camera, fashion! Watch new designers showcase their creativity as models strut to the music, impressing icons like Madhu Sneha and Richa.",
    image_url: "/image6.png" , // Replace with the actual image path
  },
  {
    name: "CosCon",
    description:
      "Join CosCon for a day of cosplay magic! Celebrate creativity with characters from anime, Bollywood, and Hollywood. Unleash your imagination and bring fantasy to life!",
    image_url: "/image6.png", // Replace with the actual image path
  },
  {
    name: "FootLose",
    description:
      "Lights, camera, fashion! Watch new designers showcase their creativity as models strut to the music, impressing icons like MadhuSneha and Richa.",
    image_url: "/image6.png", // Replace with the actual image path
  }
];


const FashionEvents: React.FC = () => {
  const router = useRouter();
  return (
    <div>
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
                  <div className="w-fit h-fit relative z-10 top-0 bg-black bg-opacity-10 left-0 flex items-center justify-center p-4 md:p-5">
              <button
                className="text-white transform transition duration-300 ease-in-out hover:scale-125 hover:text-gray-300"
                onClick={() => router.push("/")}
              >
                <IoMdArrowBack size={"2em"} />
              </button>
            </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <Image
            src = {bgImg}
            alt="Text Events"
            ></Image>
        </div>
      </div>

      {/* Events Section */}
      <div className="py-16 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Map through events dynamically */}
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl shadow-md overflow-hidden border border-white"
            >
              {/* Event Image */}
              <div className="relative w-full h-40 md:h-60">
                <Image
                  src={events[index].image_url}
                  alt="Done"
                  layout="fill"
                  className="object-cover"
                />
              </div>

              {/* Event Details */}
              <div className="p-6 bg-black text-white ">
                <h2 className="text-2xl font-bold mb-4">{events[index].name}</h2>
                <p className={`${roboto.className} mb-6`}>{events[index].description}</p>
                <button className="w-full bg-purple-900 hover:bg-purple-700 text-white font-semibold py-2 rounded" disabled>
                  Registration Coming Soon
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Foort/>
    </div>
    </div>
  );
};

export default FashionEvents;
