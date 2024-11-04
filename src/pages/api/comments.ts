import type { NextApiRequest, NextApiResponse } from 'next'
import { getInitialComments } from 'src/server/helpers'
import type { Comments } from 'src/server/schema'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comments>
) {

  const comments = getInitialComments()

  if (!comments) {
    res.status(404).json([]);
  }

  switch (req.method) {
    case "GET":
      res
      .status(200)
      .json(comments);
      case "POST":
      res
      .status(200)
      .json(comments);
      case "PUT":
      res
        .status(200)
        .json(comments);
    default:
      res.status(500).json([]);
  }
}
