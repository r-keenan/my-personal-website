const { posts } = require("./data.json");

export default function handler(req, res) {
  const evt = posts.filter((ev) => ev.slug === request.query.slug);

  if (req.method === "GET") {
    res.status(200).json(evt);
  } else {
    res.setHeader("Allow", ["GET"]);
    res
      .status(405)
      .json({ message: `Method ${request.method} is not allowed` });
  }
}
