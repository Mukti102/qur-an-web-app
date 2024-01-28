import { BASE_URL } from "./url";
import axios from "axios";
export const axiosInstance = axios.create({baseURL:BASE_URL,})