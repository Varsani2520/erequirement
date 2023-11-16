import { httpAxios } from "../httpAxios";

export async function ProviderService(id) {
  const result = await httpAxios
    .get(`api/services`,{id:Number(id)})
    .then((response) => response.data);
  return result;
}
