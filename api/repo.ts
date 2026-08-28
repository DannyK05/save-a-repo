import { DEFAULT_QUERY, REPO_PER_PAGE } from "@/lib/constants";
import { TFetchReposResponse } from "./types";
import { apiClient } from "./client";
import { endpoints } from "@/lib/endpoints";

export type FetchRepos = {
  q?: string;
  page: number;
  trainingWheels: "on" | "off";
};

export async function fetchRepos({
  q,
  page,
  trainingWheels,
}: FetchRepos): Promise<TFetchReposResponse> {
  const params = new URLSearchParams({
    q: q ? `${q} ${DEFAULT_QUERY}` : DEFAULT_QUERY,
    trainingWheels: trainingWheels,
    per_page: REPO_PER_PAGE.toString(),
    page: page.toString(),
  });

  const repos = await apiClient.get(endpoints.query(params));
  return repos;
}
