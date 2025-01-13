"use client"
import React, { useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    dob: "",
    gender: "",
    college: "",
    email: ""
  });

    const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-row items-center px-[15rem]">
                  {/* Back Button */}
      <div className="w-fit h-fit absolute top-0 left-0 flex items-center justify-center p-4 md:p-5">
        <button
          className="text-white transform transition duration-300 ease-in-out hover:scale-125 hover:text-gray-300"
          onClick={() => router.push("/")}
        >
          <IoMdArrowBack size={"2em"} />
        </button>
      </div>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-[10rem]">
        <div className="md:col-span-1">

          {/* Profile Section */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-6">Profile</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={profile.firstName}
                onChange={handleChange}
                className="bg-transparent text-white p-3 rounded-md focus:outline-none border border-white"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={profile.lastName}
                onChange={handleChange}
                className="bg-transparent text-white p-3 rounded-md focus:outline-none border border-white"
                required
              />
              <div className="col-span-2 border border-white">
                <div className="flex">
                  <select
                    name="countryCode"
                    value="INR(+91)"
                    className="bg-transparent text-white p-3 rounded-l-md focus:outline-none"
                    disabled
                  >
                    <option>INR(+91)</option>
                  </select>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={profile.phone}
                    onChange={handleChange}
                    className="bg-transparent text-white p-3 rounded-r-md focus:outline-none w-full"
                    required
                  />
                </div>
              </div>
              <div className="col-span-2 md:col-span-2 flex gap-[4rem]">
                <input
                  type="date"
                  name="dob"
                  placeholder="DOB: dd/mm/yyyy"
                  value={profile.dob}
                  onChange={handleChange}
                  className="bg-transparent text-white p-3 rounded-md focus:outline-none w-full border border-white"
                  required
                />
                <select
                  name="gender"
                  value={profile.gender}
                  onChange={handleChange}
                  className="bg-transparent text-white p-3 rounded-md focus:outline-none border border-white"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">MALE</option>
                  <option value="female">FEMALE</option>
                  <option value="other">OTHER</option>
                </select>
              </div>
              <input
                type="text"
                name="college"
                placeholder="College"
                value={profile.college}
                onChange={handleChange}
                className="bg-transparent text-white p-3 rounded-md focus:outline-none col-span-2 border border-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={profile.email}
                onChange={handleChange}
                className="bg-transparent text-white p-3 rounded-md focus:outline-none col-span-2 border border-white"
                required
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          {/* Registered Events Section */}
          <RegisteredEvents />

          {/* Accommodation Section */}
          <Accommodation />
        </div>
      </div>
    </div>
  );
};

const RegisteredEvents: React.FC = () => (
  <div className="mb-10">
    <h2 className="text-2xl font-bold mb-4">Registered events</h2>
    <div className="space-y-4">
      <div className="bg-transparent p-4 rounded-md flex justify-between items-center border border-white">
        <div>
          <p className="font-bold">Event name</p>
          <p className="text-gray-400">category</p>
        </div>
        <p className="text-green-500 font-semibold">Registered</p>
      </div>
      <div className="bg-transparent p-4 rounded-md flex justify-between items-center border border-white">
        <div>
          <p className="font-bold">Event name</p>
          <p className="text-gray-400">category</p>
        </div>
        <p className="text-yellow-500 font-semibold">form incomplete</p>
      </div>
    </div>
  </div>
);

const Accommodation: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Accommodation</h2>
    <div className="bg-transparent p-4 rounded-md flex justify-between items-center border border-white">
      <p className="font-bold">2 days accommodation</p>
      <p className="text-green-500 font-semibold">Registered</p>
    </div>
  </div>
);

export default ProfilePage;