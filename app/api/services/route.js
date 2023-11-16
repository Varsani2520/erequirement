import { NextResponse } from "next/server";
import { services } from "@/app/modal/serviceModal";
import { connectDatabase } from "@/app/database/db";
export async function POST(request) {
  const { id } = await request.json();

  return NextResponse.json({ msg: `success provider ${id}` });
}

//get service from database
export async function GET(request) {
  console.log("service get receveid");
  try {
    connectDatabase()
    const servicesProvider = await services.find();
    return NextResponse.json(servicesProvider);
  } catch (error) {
    console.log("service not received", error);
    return NextResponse.json({
      message: "failed service fetch",
      success: false,
    });
  }
}
