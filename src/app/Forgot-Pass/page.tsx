"use client";

import React, { useState } from "react";
import Link from "next/link";

const ResetPasswordPage: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value); // Updates email state
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email Submitted:", email);
    // Add logic for handling OTP request
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: 'url(/image6.png)' }} // Background image
    >
      <div className="lg:mx-[15rem] flex flex-col-reverse lg:flex-row items-center justify-center gap-0 lg:gap-[16rem]">
        {/* Form Container */}
        <div className="bg-black bg-opacity-75 p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h1 className="text-center text-2xl font-bold mb-6">
            Reset your password
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="e.g. rsharma@gmail.com"
              value={email}
              onChange={handleChange}
              className="w-full p-4 text-center text-lg tracking-wider bg-transparent text-white border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />

            {/* Submit Button */}
          <Link href="/Otp-page">
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white text-lg rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
          >
            
            Get OTP
          </button>
        </Link>

            {/* Sign-up Link */}
            <div className="justify-center text-center text-sm text-indigo-600 mt-2 flex">
              Don&apos;t have an account?{" "}
              <div className="text-center text-sm text-indigo-600 hover:underline ml-2">
                <Link href="/Register-Page">Register Here.</Link>
              </div>
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

export default ResetPasswordPage;
