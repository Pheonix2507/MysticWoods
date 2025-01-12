"use client";

import React from "react";
import Image from "next/image";
import Team from "../assets/Team.svg"
import Team2 from "../assets/Team2.svg"
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const TeamPage: React.FC = () => {
      const router = useRouter();
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div
        className="w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/Team.png')" }} // Replace with your image path
      >
              <div className="w-fit h-fit absolute top-0 left-0 flex items-center justify-center p-4 md:p-5">
                <button
                  className="text-white transform transition duration-300 ease-in-out hover:scale-125 hover:text-gray-300"
                  onClick={() => router.push("/")}
                >
                  <IoMdArrowBack size={"2em"} />
                </button>
              </div>
        <div className="flex flex-col lg:gap-0 justify-center items-center">
        <Image 
        src = {Team}
        alt="Team"
        className="w-[50vw] h-[30vh]"
        ></Image>
        <Image
        src={Team2}
        alt="Deathly hallows"
        className="w-[20vw] h-[15vh]"
        ></Image>
        </div>
      </div>

      {/* Team Members Section */}
      <section className="py-10 w-full max-w-screen-lg">
        {/* Core Team */}
        <h2 className="text-3xl font-bold text-center mb-6">Core Team</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-md overflow-hidden shadow-lg border border-white"
            >
              <div className="h-48 bg-white"></div> {/* Placeholder for image */}
              <div className="p-4 text-center bg-black">
                <h3 className="text-xl font-semibold">Name</h3>
                <p className="text-sm text-nlac-400">Position</p>
              </div>
            </div>
          ))}
        </div>

        {/* Design Team */}
        <h2 className="text-3xl font-bold text-center mt-10 mb-6">Design Team</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-md overflow-hidden shadow-lg border border-white"
            >
              <div className="h-48 bg-white"></div> {/* Placeholder for image */}
              <div className="p-4 text-center bg-black">
                <h3 className="text-xl font-semibold">Name</h3>
                <p className="text-sm text-gray-400">Position</p>
              </div>
            </div>
          ))}
        </div>

        {/* Web Development Team */}
        <h2 className="text-3xl font-bold text-center mt-10 mb-6">
          Web Development Team
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-md overflow-hidden shadow-lg border border-white"
            >
              <div className="h-48 bg-white"></div> {/* Placeholder for image */}
              <div className="p-4 text-center bg-black">
                <h3 className="text-xl font-semibold">Name</h3>
                <p className="text-sm text-gray-400">Position</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Team */}
        <h2 className="text-3xl font-bold text-center mt-10 mb-6">
          Social Media Team
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-md overflow-hidden shadow-lg border border-white"
            >
              <div className="h-48 bg-white"></div> {/* Placeholder for image */}
              <div className="p-4 text-center bg-black">
                <h3 className="text-xl font-semibold">Name</h3>
                <p className="text-sm text-gray-400">Position</p>
              </div>
            </div>
          ))}
        </div>

        {/* Honorable Mentions */}
        <h2 className="text-3xl font-bold text-center mt-10 mb-6">
          Honorable Mentions
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-md overflow-hidden shadow-lg border border-white"
            >
              <div className="h-48 bg-white"></div> {/* Placeholder for image */}
              <div className="p-4 text-center bg-black">
                <h3 className="text-xl font-semibold">Name</h3>
                <p className="text-sm text-gray-400">Position</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
    </div>
  );
};

export default TeamPage;
