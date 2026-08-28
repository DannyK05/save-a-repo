import { useQuery } from "@tanstack/react-query";
import { FetchRepos, fetchRepos } from "../../api/repo";

export function useFetchRepo({ q, page, trainingWheels }: FetchRepos) {
  return useQuery({
    queryKey: ["repos", q, page, trainingWheels],
    queryFn: () => fetchRepos({ q, page, trainingWheels }),
  });
}
