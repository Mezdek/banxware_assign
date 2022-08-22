// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import "dotenv/config";
export default function handler(req, res) {
  const url =
    "https://uh4goxppjc7stkg24d6fdma4t40wxtly.lambda-url.eu-central-1.on.aws/balances";

  const token = process.env.TOKEN;
  const headers = {
    headers: { Authorization: token },
  };

  axios
    .get(url, headers)
    .then((resp) => {
      res.status(200).json(resp.data);
    })
    .catch((err) => {
      res.json(err.message);
    });
}
