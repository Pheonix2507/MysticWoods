"use client"

// components/Contact.tsx
import Navbar from '../navbar';
import React from "react";
import Image from "next/image";
import insta from "../assets/insta.svg";
import face from "../assets/face.svg";
import yout from "../assets/yout.svg";
import mainl from "../assets/mainl.svg";
import { Almendra_SC } from "next/font/google";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});


const almendra = Almendra_SC({
  subsets: ['latin'],
  weight: '400',
});
const Contact: React.FC = () => {
  return (

    <div className="w-[100vw] h-[100vh] bg-black">
      <nav className="relative z-50 flex justify-between items-center ">
        <Navbar />
      </nav>
      <div className="w-4/5 h-[500px] mx-auto p-6 pt-20 flex gap-8 bg-black text-white">
      {/* Left Section */}
      <div className="flex flex-col justify-between h-full w-[800px]">
        <h1 className="text-3xl font-bold text-[4rem]"><span className={almendra.className}>CONTACT US</span></h1>
        <div className={roboto.className}>
        <section className="space-y-2">
          <h2 className="text-lg mb-2">Reach Us Out At</h2>
          <p>Vivek Chaudhari: +91 6354 042 414<br/>
          Harshali Dharmik: +91 7600 051 765<br/>
          Kushal Desai: +91 9727 055 132</p>
        </section>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col h-full w-full justify-between text-right">
        <div className="flex justify-end items-end">
          <Image
            src={mainl}
            alt="Synapse Logo"
            className="h-full w-auto object-cover"
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col space-y-4 self-end justify-end items-end">
          <div className="mb-5">
            <span className={roboto.className}>
           <p>synapse.thefest@gmail.com <br/>synapse@daiict.ac.in</p>
           </span>
          </div>
          <div className="flex gap-4 w-fit justify-end border border-white p-2 rounded-lg">
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
  );
};

export default Contact;

