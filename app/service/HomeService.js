import { httpAxios } from "../httpAxios";

export async function HomeService() {
  const swiper = await httpAxios
    .post("api/home-screen-data")
    .then((response) => response.data);
  return swiper;
}
