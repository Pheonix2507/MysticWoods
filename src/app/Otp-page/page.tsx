"use client";

import React, { useState } from "react";
import Link from "next/link";
import { otpValidate } from "@/Services/auth.services";
import { useRouter } from "next/navigation";

const MagicJourneyPage: React.FC = () => {
  const router = useRouter();
  const [code, setCode] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCode(value); // Only update if the input is numeric
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    otpValidate(code)
      .then((res) => {
        console.log("OTP Validated Successfully:", res);
        router.push('/');
      })
      .catch((err) => {
        console.error("OTP Validation Failed:", err);
      });
  };


  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: 'url(/image6.png)' }}>
      <div className="lg:mx-[15rem] flex flex-col-reverse lg:flex-row items-center justify-center gap-0 lg:gap-[16rem]">
        {/* Form Container */}
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h1 className="text-center text-2xl font-bold mb-6">
            Create your magical journey
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Magic Code Input */}
            <input
              type="integer"
              name="magicCode"
              placeholder="Enter your magic code"
              value={code}
              onChange={handleChange}
              maxLength={6}
              className="w-full p-4 text-center text-lg tracking-wider bg-black text-white border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white text-lg rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            >
              Continue
            </button>

            {/* Login Link */}
            <div className="justify-center text-center text-sm text-indigo-600 mt-2 flex">
              Already have an account?
              <div className="text-center text-sm text-indigo-600 hover:underline ml-2"><Link href="/Login-Page">Log in</Link></div>
            </div>
          </form>
        </div>

        {/* Logo Section */}
        <div className="order-none lg:order-2 lg:mb-0 flex-shrink-1">
          <img
            src="/logo.svg" // Replace with your SVG logo path
            alt="Logo"
            className="w-[70vw] h-[30vh] lg:w-[70vw] lg:h-[50vh] xl:w-[70vw] xl:h-[50vh] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default MagicJourneyPage;
