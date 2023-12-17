import http from "./httpService";

export function getAllHotels(qs: string, cookies: string): Promise<any> {
  return http
    .get(`hotels?${qs}`, {
      withCredentials: false,
      headers: {
        Cookie: cookies,
      },
    })
    .then(({ data }: { data: any }) => data);
}
export function getOneHotelsById(id: string) {
  return http
    .get(`hotels/${id}`, { withCredentials: false })
    .then(({ data }) => data);
}
