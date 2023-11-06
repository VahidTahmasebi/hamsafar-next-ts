import http from "./httpService";

export function getAllHotels() {
  return http
    .get(`hotels`, { withCredentials: false })
    .then(({ data }) => data);
}
