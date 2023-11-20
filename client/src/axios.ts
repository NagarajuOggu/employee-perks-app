import axios from "axios";
import { baseUrl } from "./constant";

export const post = (url: string, payload: any) => {
  const uri = baseUrl + url;
  return axios.post(uri, payload);
};

export const get = async(url: string) => {
  const uri = baseUrl + url;
  const resp = await axios.get(uri);
  return resp
};
