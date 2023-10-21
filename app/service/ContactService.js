import { httpAxios } from "../httpAxios";

export async function ContactService(){
   const result= await httpAxios.post("api/contact").then((response)=>response.data)
   return result;
}