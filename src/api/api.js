import axios from "axios";

const api = axios.create({
  baseURL: "https://62cfc353486b6ce8265b3e1c.mockapi.io/api/",
});

export default api;
