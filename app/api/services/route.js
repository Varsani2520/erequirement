import { NextResponse } from "next/server";
import toys from "../services/json/toys.json";
import kids from "../services/json/kids.json";
import woman from "../services/json/woman.json";
import men from "../services/json/men.json";
import beauty from "../services/json/beauty.json";
import bag from "../services/json/bag.json";
import jewellery from "../services/json/jewellery.json";
import kitchen from "../services/json/kitchen.json";
import electronic from "../services/json/electronic.json";
import { services } from "@/app/modal/serviceModal";
export async function POST(request) {
  const { id } = await request.json();

  return NextResponse.json({ msg: `success provider ${id}` });
}

//get service from database
export async function GET(request) {
  console.log("service get receveid");
  try {
    const servicesProvider = await services.find();
    console.log("service receveid", servicesProvider);
    return NextResponse.json(servicesProvider);
  } catch (error) {
    console.log("service not received", error);
    return NextResponse.json({
      message: "failed service fetch",
      success: false,
    });
  }
}
