import axios from "axios";

const api = axios.create({
  baseURL: "https://mock-api.driven.com.br/api/v8/cineflex",
});

export default api;
