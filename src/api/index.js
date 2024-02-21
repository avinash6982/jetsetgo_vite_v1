import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getRequest = (params) => axios.get(API_URL + API_KEY, params);
