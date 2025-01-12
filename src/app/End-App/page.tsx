"use client";

// components/Contact.tsx
import React from "react";
import Image from "next/image";
import bgImg from "../assets/backgroundP2.jpeg";
import insta from "../assets/insta.svg";
import face from "../assets/face.svg";
import yout from "../assets/yout.svg";
import mainl from "../assets/synapselogo.png";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});


const Contact: React.FC = () => {
  return (
    <div className="relative w-screen h-screen bg-black">
      {/* Background Image */}
      <Image
        src={bgImg}
        alt="Starry night sky with bridge silhouette"
        fill
        className="absolute inset-0 object-cover brightness-50 z-0"
        priority
      />

      {/* Navbar */}


      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="w-full max-w-5xl bg-black bg-opacity-80 text-white rounded-xl p-6 md:p-10 border border-white flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="flex-1 flex flex-col justify-between items-center md:items-start">
            {/* Logo */}
            <div className="flex justify-center md:justify-end ">
              <Image
                src={mainl}
                alt="Synapse Logo"
                className="w-[60vw] h-[20vh] md:w-full md:h-fit"
              />
            </div>
            <div className={`mt-10 ${roboto.className}`}>
              <section className="space-y-4 text-center md:text-left">
                <h2 className="text-lg md:text-xl font-semibold">
                  Reach Us Out At
                </h2>
                <p className="text-sm md:text-base">
                  Vivek Chaudhari: +91 6354 042 414
                  <br />
                  Harshali Dharmik: +91 7600 051 765
                  <br />
                  Kushal Desai: +91 9727 055 132
                </p>
              </section>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col justify-between items-center md:items-end">

            {/* Address and Social Links */}
            <div className="text-center md:text-right space-y-6 mt-0 lg:mt-[12rem]">
              <div>
                <p className={`text-sm md:text-base ${roboto.className}`}>
                  synapse.thefest@gmail.com <br />
                  synapse@daiict.ac.in
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex justify-center md:justify-end gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Image src={insta} alt="Instagram" width={30} height={30} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Image src={yout} alt="YouTube" width={30} height={30} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Image src={face} alt="Facebook" width={30} height={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
