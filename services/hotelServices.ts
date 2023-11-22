import http from "./httpService";

export function getAllHotels() {
  return http
    .get(`hotels`, { withCredentials: false })
    .then(({ data }) => data);
}
export function getOneHotelsById(id: string) {
  return http
    .get(`hotels/${id}`, { withCredentials: false })
    .then(({ data }) => data);
}
