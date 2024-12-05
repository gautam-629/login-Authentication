import { ICredentials } from "@/types/auth";
import MockAdapter from 'axios-mock-adapter';
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const signin=async (data:ICredentials)=> await api.post('login',data)



// Set up the mock adapter
const mock = new MockAdapter(api);

// Mock a POST request to /login
mock.onPost("/login").reply((config) => {
  const { email, password } = JSON.parse(config.data) as {
    email: string;
    password: string;
  };

  if (email === "example@gmail.com" && password === "Password@123") {
    return [200, { token: "fake-jwt-token" }];
  }

  return [401, { message: "Invalid email or password" }];
});
