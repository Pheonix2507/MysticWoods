import axios, {  AxiosRequestConfig } from "axios";
import {User} from "@/types/auth.types";

export const url =  process.env.NEXT_PUBLIC_baseUrl;
export const getConfig = (): AxiosRequestConfig => {
    const t = localStorage.getItem("token");
    return {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${t}`,
        },
    } as AxiosRequestConfig;
};

export const userRegister = async (registerRequest:User) => {
    const URL = url + "api/register";
    console.log(URL)
    const payload = {
        first_name: registerRequest.first_name,
        last_name: registerRequest.last_name,
        phone_number: registerRequest.phone_number,
        DOB: registerRequest.DOB,
        gender: registerRequest.gender,
        Clg: registerRequest.Clg,
        email: registerRequest.email,
        password: registerRequest.password
    }
    return axios
        .post(URL, payload)
        .then((response) => {
            console.log(response)
            return response.data;
        })
        .catch((error) => {
            // Handle error
            console.error("Error occurred during login:", error);
            throw error;
        });
};

export const otpValidate = async (otp: string) => {
    const email = localStorage.getItem("email"); // Retrieve email from localStorage
    if (!email) {
        throw new Error("Email not found in localStorage");
    }

    const URL = url + "api/validate-otp"; // Endpoint for OTP validation
    console.log("OTP Validate API URL:", URL);

    const payload = {
        email,
        otp,
    };

    return axios
        .post(URL, payload)
        .then((response) => {
            console.log("OTP Validation Response:", response.data);
            return response.data;
        })
        .catch((error) => {
            console.error("Error during OTP validation:", error);
            throw error;
        });
}

export const userLogin = async (email: string, password: string) => {
    const URL = url + "api/login"; // Replace with your login endpoint
    console.log("Login API URL:", URL);

    const payload = {
        email,
        password,
    };

    return axios
        .post(URL, payload)
        .then((response) => {
            console.log("Login Response:", response.data);
            localStorage.setItem("token", response.data.token); // Store token in localStorage
            return response.data;
        })
        .catch((error) => {
            console.error("Error during login:", error);
            throw error;
        });
};