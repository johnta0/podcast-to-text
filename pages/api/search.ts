import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  podcast: {
    slug: string
  }
  episode: {
    slug: string
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData[]>
) {
  const { q } = req.query
  // TODO: search for podcasts and episodes
  
  res.status(200).json([])
}