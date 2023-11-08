import { httpAxios } from "../httpAxios";

export async function contactuserService() {
  const result = await httpAxios
    .post("api/contactUser")
    .then((response) => response.data);
  return result;
}
