import axios from "../api/axios";

export let setSESSION = (session_name, data) => {
  return localStorage.setItem(session_name, data);
};

export let getSESSION = (session_name) => {
  let value = localStorage.getItem(session_name);
  try {
    return JSON.parse(localStorage.getItem(session_name));
  } catch (error) {
    return value;
  }
};

export let removeSESSION = (session_name) => {
  return localStorage.removeItem(session_name);
};

export const setAxiosAuthorizationHeader = token => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};