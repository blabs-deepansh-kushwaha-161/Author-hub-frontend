import axios from "axios";

const Api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

Api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refresh = localStorage.getItem("refresh_token");
      if (refresh) {
        try {
          const res = await axios.post("http://127.0.0.1:8000/api/token/refresh/", {
            refresh,
          });
          localStorage.setItem("access_token", res.data.access);
          error.config.headers["Authorization"] = `Bearer ${res.data.access}`;
          return Api.request(error.config); // retry original request
        } catch (err) {
          console.error("Token refresh failed:", err);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default Api;
