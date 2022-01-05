let { posts } = require("./data.json");

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(posts);
  } else {
    res.setHeader("Allow", ["GET"]);
    res
      .status(405)
      .json({ message: `Method ${request.method} is not allowed` });
  }
}
