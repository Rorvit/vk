import axios from "axios";
import jsonpAdapter from "axios-jsonp";

const api = axios.create({
  baseURL: "https://api.vk.com/method",
  adapter: jsonpAdapter,
});

api.defaults.params = {
  // eslint-disable-next-line @typescript-eslint/camelcase
  access_token:
    "3286ed343286ed343286ed34f032f56c03332863286ed346dbcbcf1aa564ac49b8388f",
};

export default api;
