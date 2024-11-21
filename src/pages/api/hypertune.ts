import type { NextApiRequest, NextApiResponse } from "next";
import getHypertune from "src/lib/getHypertune";

type Data = { myFirstAPIFilter: boolean };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const hypertune = await getHypertune();

  const myFirstAPIFilter = hypertune.myFirstAPIFilter({ fallback: false });

  res.status(200).json({ myFirstAPIFilter });
}
