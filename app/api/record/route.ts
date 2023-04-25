import { createRecord, getAllRecords, getRecordCount } from "../../../prisma/Record";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Get the current session data with {user, email, id}
  // Run if the request was a post request
  // Get note title & body from the request body
  const req = await request.json();
  const { productName, totalPrice, quantity } = req;
  
  // Create a new note
  // also pass the session which would be use to get the user information
  const res = await createRecord(productName, totalPrice, quantity);
  console.log(res);
  
  return NextResponse.json(res);
}


// export async function POST(request: Request) {
//   const res = await request.json();
//   return NextResponse.json({ res })
// }



export async function GET() {
  // Do whatever you want
  const res = await getAllRecords();
  return NextResponse.json(res);
}
