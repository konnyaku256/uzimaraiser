import { crawl } from "../../src/utils/github_contributions";
import { NowRequest, NowResponse } from "@now/node";

export default async (req: NowRequest, res: NowResponse) => {
  const username = req.query.username as string;
  const data = await crawl(username);
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  res.json(data);
};
