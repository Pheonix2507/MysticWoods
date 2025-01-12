import axios, { AxiosError, AxiosRequestConfig } from "axios";
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

export const userRegister = async (registerRequest) => {
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
        .post<User>(URL, payload)
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