import axios from "axios";

const api = axios.create({
  baseURL: "https://gorest.co.in/public/v2/users/1986",
});

export default api;
