



export default async function qouteHander(req, res) {
  try {
    const response = await fetch("https://zenquotes.io/api/quotes");
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.status(200).json(data);

  } catch (error) {
   console.error("Error fetching quotes:", error);
    res.status(500).json({ error: "Failed to fetch quotes" });
  }
}
