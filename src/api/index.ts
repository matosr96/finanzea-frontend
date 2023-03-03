import axios from "axios";

export const VITE_API = axios.create({
  baseURL: 'https://finanzea-backend-production.up.railway.app/api/v1'
  //baseURL: "http://localhost:4200/api/v1",
});
