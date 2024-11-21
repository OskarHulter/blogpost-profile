import type { NextApiRequest, NextApiResponse } from 'next'
import { initialComments } from 'src/server/helpers'
import type { Comments } from 'src/server/schema'
import { OpenFeature } from "@openfeature/server-sdk";


  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Comments>
  ) {

    const client = OpenFeature.getClient()


    const showWelcomeMessage = await client.getBooleanValue("welcome-message", false)

    if (showWelcomeMessage) {
      console.log("Express + TypeScript + OpenFeature Server")
    } else {
      console.log("Express + TypeScript Server")
    }

    const comments = initialComments;

    if (!comments) {
      res.status(404).json([])
    }

    switch (req.method) {
      case "GET":
        res
          .status(200)
          .json(comments)
      
      case "POST":
        res
          .status(200)
          .json(comments)
      case "PUT":
        res
          .status(200)
          .json(comments)
      default:
        res.status(500).json([])
    }
  }
