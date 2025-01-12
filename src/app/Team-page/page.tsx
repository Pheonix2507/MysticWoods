"use client";

import React from "react";
import Image from "next/image";
import Team from "../assets/Team.svg"

const TeamPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <header
        className="w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/Team.png')" }} // Replace with your image path
      >
        <Image 
        src = {Team}
        alt="Team in the deathly hallows"
        className="w-[10vw] h-[15vh]"
        ></Image>
      </header>

      {/* Team Members Section */}
      <section className="py-10 w-full max-w-screen-lg">
        {/* Core Team */}
        <h2 className="text-3xl font-bold text-center mb-6">Core Team</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-md overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gray-600"></div> {/* Placeholder for image */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">Name</h3>
                <p className="text-sm text-gray-400">Position</p>
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
              className="bg-gray-800 rounded-md overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gray-600"></div> {/* Placeholder for image */}
              <div className="p-4 text-center">
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
              className="bg-gray-800 rounded-md overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gray-600"></div> {/* Placeholder for image */}
              <div className="p-4 text-center">
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
              className="bg-gray-800 rounded-md overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gray-600"></div> {/* Placeholder for image */}
              <div className="p-4 text-center">
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
              className="bg-gray-800 rounded-md overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gray-600"></div> {/* Placeholder for image */}
              <div className="p-4 text-center">
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
