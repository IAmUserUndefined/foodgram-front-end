import axios, { HeadersDefaults } from "axios";

export interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string | null | undefined; 
}

const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  }
});

export default api;