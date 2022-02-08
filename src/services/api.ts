import axios from "axios";

const api = axios.create({
  baseURL: "localhost:3333",
  headers: {
    "Authorization": `Bearer ${localStorage.getItem("tokenFoodgram")}`
  }
});

export default api;