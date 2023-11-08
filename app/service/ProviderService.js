import { httpAxios } from "../httpAxios"

export async function ProviderService(id){
    const result=await httpAxios.post(`api/services`,{id:Number(id)}).then((response)=>response.data)
    return result;
}