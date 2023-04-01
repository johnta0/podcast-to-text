import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

type ResponseData = {
  transcript: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { slug } = req.query
  const { data, error } = await supabase.from("episodes").select("transcript").eq("slug", slug);
  if (error) {
    throw new Error(error.message);
  }
  const transcript = data[0].transcript as string;
  res.status(200).json({ transcript });
}