"use client"
import React, { useState } from "react";
import { userRegister } from "@/Services/auth.services";
import Link from "next/link";

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

  const [errors, setErrors] = useState({
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
    validateInput(name, value);
  };

  const validateInput = (name: string, value: string, returnErrors = false): string | void => {
    let error = "";
    switch (name) {
      case 'first_name':
      case 'last_name':
        if (!value) {
          error = "This field is required";
        }
        break;
      case 'phone_number':
        if (!/^\d{10}$/.test(value)) {
          error = "Phone number must be 10 digits";
        }
        break;
      case 'DOB':
        if (!value) {
          error = "Date of birth is required";
        } else {
          const dob = new Date(value);
          const today = new Date();
          const fifteenYearsAgo = new Date(today.getFullYear() - 15, today.getMonth(), today.getDate());

          if (dob > today) {
            error = "Date of birth cannot be in the future";
          } else if (dob > fifteenYearsAgo) {
            error = "You must be at least 15 years old";
          }
        }
        break;
      case 'gender':
        if (!value) {
          error = "Please select a gender";
        }
        break;
      case 'Clg':
        if (!value) {
          error = "College name is required";
        }
        break;
      case 'email':
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = "Invalid email address";
        }
        break;
      case 'password':
        if (value.length < 6) {
          error = "Password must be at least 6 characters long";
        }
        break;
      case 'confirmPassword':
        if (value !== formData.password) {
          error = "Passwords do not match";
        }
        break;
    }
    if (returnErrors) {
      return error;
    } else {
      setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    }
  };

    const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== "") && 
           Object.values(errors).every(error => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform synchronous validation on all fields before attempting to submit
    const newErrors = Object.keys(formData).reduce((acc, key) => {
      const value = formData[key as keyof typeof formData];
      const error = validateInput(key, value, true); // Pass true to return errors instead of setting state
      if (error) {
        acc[key as keyof typeof errors] = error;
      }
      return acc;
    }, {} as typeof errors);

    // Update the errors state
    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (!hasErrors) {
      userRegister(formData)
        .then(res => {
          console.log("Registration successful", res);
        })
        .catch(err => {
          console.log("Error registering user", err);
        });
    } else {
      console.log("Form has errors:", newErrors);
    }
  };

  return (
    <div style={{ backgroundImage: 'url(/image6.png)' }} className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-4 gap-[5rem] lg:gap-[16rem] bg-cover bg-center">
      <div className="bg-black bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-md order-none lg:order-1">
        <h1 className="text-2xl text-white font-bold text-center mb-6">Create your magical journey</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
              />
              {errors.first_name && <p className="text-red-500 text-xs italic">{errors.first_name}</p>}
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
              />
              {errors.last_name && <p className="text-red-500 text-xs italic">{errors.last_name}</p>}
            </div>
          </div>
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            maxLength={10}
            className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
          />
          {errors.phone_number && <p className="text-red-500 text-xs italic">{errors.phone_number}</p>}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <input
                type="date"
                name="DOB"
                value={formData.DOB}
                onChange={handleChange}
                className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
              />
              {errors.DOB && <p className="text-red-500 text-xs italic">{errors.DOB}</p>}
            </div>
            <div className="w-1/2">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-2.5 border text-white border-gray-300 rounded bg-transparent"
              >
                <option value="" className="text-black">Gender</option>
                <option value="male" className="text-black">Male</option>
                <option value="female" className="text-black">Female</option>
                <option value="other" className="text-black">Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-xs italic">{errors.gender}</p>}
            </div>
          </div>
          <input
            type="text"
            name="Clg"
            placeholder="Clg Name"
            value={formData.Clg}
            onChange={handleChange}
            className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
          />
          {errors.Clg && <p className="text-red-500 text-xs italic">{errors.Clg}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border text-white border-gray-300 rounded bg-transparent"
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
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
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
          </div>
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
            {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>}
          </div>
          <Link href="/Otp-page">
          <button
            type="submit"
              className={`w-full py-3 text-lg rounded-md transition duration-300 ${
                isFormValid()
                  ? "bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
          >
            Get OTP
          </button>
          </Link>
          <p className="text-center text-sm text-gray-500 mt-2">
            <span style={{ color: 'rgba(251, 171, 36, 1)' }}>DAIICT student must register with DA Student ID*</span>
          </p>
          <div className="text-center text-sm text-indigo-600 hover:underline ml-2 text-[3vh]">Log In</div>
        </form>
      </div>
      <div className="order-none lg:order-2 lg:mb-0 flex-shrink-1">
        <img
          src="/logo.svg"
          alt="Logo"
          className="w-[70vw] h-[30vh] lg:w-[70vw] lg:h-[50vh] xl:w-[70vw] xl:h-[50vh] mx-auto"
        />
      </div>
    </div>
  );
};

export default RegistrationForm;