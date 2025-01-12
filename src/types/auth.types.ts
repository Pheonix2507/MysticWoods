import { JwtPayload } from "jwt-decode";

export interface CustomJwtPayload extends JwtPayload {
    email: string;
}

export interface User {
    first_name: string,
    last_name: string,
    phone_number: string,
    DOB: string,
    gender: string,
    Clg: string,
    email: string,
    password: string,
}