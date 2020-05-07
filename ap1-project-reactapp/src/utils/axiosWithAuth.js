import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    baseURL: "http://localhost:4000/api",
  });
};

export default axiosWithAuth;
