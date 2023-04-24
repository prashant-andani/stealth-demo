import { createRecord } from "../../prisma/Record";

export default async function handle(req, res) {
  // Get the current session data with {user, email, id}
  // Run if the request was a post request
  if (req.method == "POST") {
    // Get note title & body from the request body
    const { productName, totalPrice, quantity } = req.body;
    // Create a new note
    // also pass the session which would be use to get the user information
    const record = await createRecord(productName, totalPrice, quantity);
    // return created note
    return res.json(record);
  }
}
