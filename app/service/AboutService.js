import { httpAxios } from "../httpAxios";

export async function AboutService(){
   const result= await httpAxios.post("api/about").then((response)=>response.data)
   return result
}