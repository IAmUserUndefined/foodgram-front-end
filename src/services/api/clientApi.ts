import axios, { HeadersDefaults } from "axios";
import nookies from "nookies";

export interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string | null | undefined; 
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Authorization": `Bearer ${nookies.get().tokenFoodgram}`
  }
});

export default api;