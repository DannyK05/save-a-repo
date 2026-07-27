export const endpoints = {
  root: "/",
  query: (params: URLSearchParams) =>  `/search/repositories?${params.toString()}`,
};
