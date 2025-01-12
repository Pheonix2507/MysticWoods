"use client";

import React, { useState } from "react";
import Link from 'next/link'
const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data Submitted:", formData);
  };

  return (
    <div
      style={{ backgroundImage: 'url(/image6.png)' }} // Add your background image path
      className="flex items-center justify-center min-h-screen px-4 bg-cover bg-center"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-0 lg:gap-[16rem]">
        {/* Login Form */}
        <div className="bg-black bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-[#ededed] text-center mb-6">Welcome Back!<br />do magic</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="e.g. rsharma@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded bg-transparent text-white"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded bg-transparent text-white"
              />
              <span
                className="absolute top-2 right-2 cursor-pointer text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "🚫"}
              </span>
            </div>

            {/* Forgotten Password */}
            <div className="justify-end flex text-sm">
              <Link href="/Forgot-Pass" className="text-indigo-500 hover:underline text-right">
                Forgotten your password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white text-lg rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            >
              Continue
            </button>

            <div className="justify-center text-center text-sm text-indigo-600 mt-2 flex">
              Don&apos;t have an account? {" "}
              <div className="text-center text-sm text-indigo-600 hover:underline ml-2"><Link href="/Register-Page">Register here.</Link></div>
            </div>
          </form>
        </div>

        {/* Logo Section */}
      <div className="order-none lg:order-2 lg:mb-0 flex-shrink-1">
        <img
          src="/logo.svg" // Replace with your SVG logo path
          alt="Logo"
          className="w-[70vw] h-[30vh] lg:w-[25vw] lg:h-[50vh] xl:w-[30vw] xl:h-[60vh] mx-auto"
        />
      </div>
      </div>
    </div>
  );
};

export default LoginForm;