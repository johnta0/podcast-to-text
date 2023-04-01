import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  const { data: episodes, error } = await supabase.from("episodes").select("slug");
  if (error) {
    throw new Error(error.message);
  }

  const slugs = episodes?.map(episode => episode.slug) || [];

  res.status(200).json(slugs);
}
