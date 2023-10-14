import axios from "axios";
import { BACKEND_URL } from "../constant/URL";


export const serviceProvider = axios.create({baseURL: BACKEND_URL});