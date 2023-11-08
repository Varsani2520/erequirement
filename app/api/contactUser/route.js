import { connectDatabase } from "@/app/database/db";
import { user } from "@/app/modal/contactUser";
import { NextResponse } from "next/server";
connectDatabase();
// get user
export async function GET(request) {
  console.log("get request received");

  try {
    const users = await user.find();
    console.log("user retrived is", users);
    return NextResponse.json(users);
  } catch (error) {
    console.log("error in get:", error);
    return NextResponse.json({ message: "failed to get user", success: false });
  }
}
// post method
export async function POST(request) {
  const { name, email, message } = await request.json();
  const UserSchema = new user({
    name: name,
    email: email,
    message: message,
  });
  try {
    const createuser = await UserSchema.save();
    console.log("user created successfully");
    return NextResponse.json(createuser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "falied user", success: "false" });
  }
}
