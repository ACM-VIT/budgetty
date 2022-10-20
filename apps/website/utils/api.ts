import axios from "axios";

const BASE_URL = "http://localhost:3333";

export const post = async (url: string, data: any) => {
  const response = await axios.post(`${BASE_URL}${url}`, data);
  return response.data;
};

export const get = async (url: string, params: any) => {
  const response = await axios.get(`${BASE_URL}${url}`, {
    params,
  });
  return response.data;
};
