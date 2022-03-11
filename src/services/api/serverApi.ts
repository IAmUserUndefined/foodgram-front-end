import axios from "axios";
import nookies from "nookies";

const api = (context: any) => axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Authorization": `Bearer ${nookies.get(context).tokenFoodgram}`
  }
});

export default api;