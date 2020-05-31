import axios from "axios";
import cheerio from "cheerio";

type ContributionLog = {
  date: string;
  count: number;
};

export async function crawl(GitHubUsername: string): Promise<ContributionLog> {
  let data: string;
  try {
    const response = await axios.get(
      `https://github.com/users/${GitHubUsername}/contributions`
    );
    data = response.data;
    if (!data) {
      return Promise.reject();
    }
  } catch (e) {
    console.log(e);
    return Promise.reject();
  }
  const $ = cheerio.load(data);
  const lastRect = $("rect")[$("rect").length - 1];
  return {
    date: lastRect.attribs["data-date"].replace(/-/g, "/"),
    count: ~~lastRect.attribs["data-count"]
  };
}
