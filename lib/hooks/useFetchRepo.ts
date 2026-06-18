import { useQuery } from "@tanstack/react-query";
import { FetchRepos, fetchRepos } from "../../api/repo";

export function useFetchRepo({ page }: FetchRepos) {
  return useQuery({ queryKey: ["repos"], queryFn: () => fetchRepos({ page }) });
}
