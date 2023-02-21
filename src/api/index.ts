import axios from "axios";

export const VITE_API = axios.create({
  // baseURL: 'https://real-vision-api.herokuapp.com'
  // baseURL: 'https://real-vision-api-mono.onrender.com/api/v3'
  //baseURL: 'https://partiaf-api.xyz/api/v3'
  // baseURL: "http://44.203.116.120:5000/api/v3/health-check",
  baseURL: "http://localhost:4200/api/v1",
});
