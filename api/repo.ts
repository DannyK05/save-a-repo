import { REPO_PER_PAGE } from "@/lib/constants";
import { TFetchReposResponse } from "./types";

export type FetchRepos = {
  page: number;
};

export async function fetchRepos({
  page,
}: FetchRepos): Promise<TFetchReposResponse> {
  const params = new URLSearchParams({
    q: "stars:<1000 good-first-issues:>10 archived:false",
    per_page: REPO_PER_PAGE.toString(),
    page: page.toString(),
    sort: "stars",
    order: "desc",
  });

  const res = await fetch(
    `https://api.github.com/search/repositories?${params.toString()}`,
  );

  if (!res.ok) {
    throw new Error("Bad response");
  }

  return res.json();
}
