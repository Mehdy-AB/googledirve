import axios from "axios";
import { getSession } from "next-auth/react";

const axiosClient = axios.create({
  baseURL: '/api', // Replace with your API base URL
});

// Add a request interceptor to attach the token
axiosClient.interceptors.request.use(async (config) => {
  const session = await getSession(); // Fetch the session token
  if (session?.token) {
    config.headers.Authorization = `Bearer ${session.token}`;
  }
  return config;
});

export default axiosClient;