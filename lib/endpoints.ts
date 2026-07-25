export const endpoints = {
  root: "/",
  query: (params: URLSearchParams) => `/query?${params.toString()}`,
};
