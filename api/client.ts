import { PROXY_LINK } from "@/lib/constants";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const request = async (endpoint: string, init?: RequestInit) => {
  if (!PROXY_LINK) {
    throw new Error("PROXY_LINK is not configured");
  }
  const url = new URL(endpoint, PROXY_LINK);
  const res = await fetch(url, init);

  if (!res.ok) {
    throw new Error(await res.text());
  }
  return res.json();
};

export const apiClient = {
  get: (endpoint: string) => request(endpoint),
  post: (endpoint: string, body: BodyInit) =>
    request(endpoint, { method: "POST", body }),
};
