import { connectDatabase } from "@/app/database/db";
import { services } from "@/app/modal/serviceModal";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    connectDatabase();

    // Get the parameters from the URL
    const { serviceId, uniqueKey } = request.params;

    // Find the service in the database based on provider_id and uniqueKey
    const response = await services.findOne({
      provider_id: parseInt(serviceId),
      unique_key: uniqueKey, // Replace 'unique_key' with the actual key field name in your data
    });

    // Check if the service was found
    if (!response) {
      // If not found, return a 404 response
      return NextResponse.json(404, "Service not found");
    }

    // Return the service data
    return NextResponse.json(response);
  } catch (error) {
    // Return an error response if there is any issue
    return NextResponse.json({ error: error.message });
  }
}
