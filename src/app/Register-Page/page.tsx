// pages/index.tsx
"use client"
// pages/index.tsx
import React, { useState } from "react";
import {userRegister} from "@/Services/auth.services";

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    DOB: "",
    gender: "",
    Clg: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    userRegister(formData)
        .then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log(err)
    })
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div style={{ backgroundImage: 'url(/image6.png)' }} // Add the path to your image here
  className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-4 gap-[16rem] bg-cover bg-center">
    <div className="lg:mx-[10rem] flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen bg-transparent px-4 gap-0 lg:gap-[16rem]">
      {/* Registration Form */}
      <div className="bg-black bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-md order-none lg:order-1">
        <h1 className="text-2xl text-white font-bold text-center mb-6">Create your magical journey</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Fields */}
          <div className="flex space-x-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-1/2 p-2 border text-white border-gray-300 rounded bg-transparent"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-1/2 p-2 border text-white border-gray-300 rounded bg-transparent"
            />
          </div>

          {/* Phone Number */}
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            maxLength={10}
            className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
          />

          {/* DOB and Gender */}
          <div style={{color:'rgba(209 213 219)'}}>
          <div className="flex space-x-4">
            <input
              type="date"
              name="DOB"
              value={formData.DOB}
              onChange={handleChange}
              className="w-1/2 p-2 border text-white border-gray-300 rounded bg-transparent"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-1/2 p-2 border text-white border-gray-300 rounded bg-transparent"
            >
              <option value="" className="bg-black text-gray-300">Gender</option>
              <option value="male" className="bg-black text-gray-300">Male</option>
              <option value="female" className="bg-black text-gray-300">Female</option>
              <option value="other" className="bg-black text-gray-300">Other</option>
            </select>
          </div>
          </div>

          {/* Clg */}
          <input
            type="text"
            name="Clg"
            placeholder="Clg Name"
            value={formData.Clg}
            onChange={handleChange}
            className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
            />
            <span
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "🚫"}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
            />
            <span
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "👁️" : "🚫"}
            </span>
          </div>

          {/* Submit Button */}
          {/*<Link href="/Otp-page">*/}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white text-lg rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
          >
            
            Get OTP
          </button>
        {/*</Link>*/}
          <p className="text-center text-sm text-gray-500 mt-2}">
            <span style={{color: 'rgba(251, 171, 36, 1)' }}>DAIICT student must register with DA Student ID*</span>
          </p>
          <div className="justify-center text-center text-sm text-indigo-600 mt-2 flex">
            Already have an account? 
            {/*<div className="text-center text-sm text-indigo-600 hover:underline ml-2"><Link href="/Login-Page">Log in</Link></div>          */}
            <div className="text-center text-sm text-indigo-600 hover:underline ml-2">Log in</div>
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

export default RegistrationForm;
