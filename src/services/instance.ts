import axios from "axios";

const BASE_URL = 'https://fakestoreapi.com';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})