export type TRepo = {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  htmlUrl: string;
  language: string | null;
  stargazers_count: number;
  forks: number;
  topics: string[];
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string | null;
    node_id: string;
  } | null;
  updatedAt: string;
  owner: {
    login: string;
    avatarUrl: string;
  };
};

export type TFetchReposResponse = { items: TRepo[]; pageCount: number };
