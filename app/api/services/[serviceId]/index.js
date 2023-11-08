import { useParams } from "next/navigation";

export function POST(request){
    const {serviceId}=useParams
    return <div>this is {serviceId} page</div>
}