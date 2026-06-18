import { DEFAULT_QUERY, REPO_PER_PAGE } from "@/lib/constants";
import { TFetchReposResponse } from "./types";

export type FetchRepos = {
  q?: string;
  page: number;
};

export async function fetchRepos({
  q,
  page,
}: FetchRepos): Promise<TFetchReposResponse> {
  const params = new URLSearchParams({
    q: q ? q + DEFAULT_QUERY : DEFAULT_QUERY,
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
