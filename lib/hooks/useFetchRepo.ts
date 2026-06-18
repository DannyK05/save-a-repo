import { useQuery } from "@tanstack/react-query";
import { FetchRepos, fetchRepos } from "../../api/repo";

export function useFetchRepo({ q, page }: FetchRepos) {
  return useQuery({
    queryKey: ["repos", q, page],
    queryFn: () => fetchRepos({ q, page }),
  });
}
