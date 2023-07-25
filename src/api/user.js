import axios from "axios";

const url = "http://134.209.207.128/api/user";

export const createUser = async data => {
  try {
    const response = axios.post(`${url}/create`, data);
    return response;
  } catch (err) {
    console.log(err);
  }
};
