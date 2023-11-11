import { httpAxios } from "../httpAxios";

export async function ProviderService() {
  const result = await httpAxios
    .get(`api/services`)
    .then((response) => response.data);
  return result;
}
