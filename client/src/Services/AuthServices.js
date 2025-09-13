// src/Services/AuthServices.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1", // ✅ সঠিক URL
});

const registerUser = (data) => API.post("/user/register", data);
const loginUser = (data) => API.post("/user/login", data);

const AuthServices = { registerUser, loginUser };
export default AuthServices;

