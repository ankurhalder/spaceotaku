import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get("http://api.open-notify.org/iss-now.json");
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching ISS location:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
