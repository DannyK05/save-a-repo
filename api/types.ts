export type TRepo = {
  allow_forking: boolean;
  default_branch: string;
  description: string;
  forks_count: number;
  full_name: string;
  git_url: string;
  has_issues: number;
  has_pull_requests: boolean;
  homepage: string;
  html_url: string;
  id: number;
  is_template: boolean;
  language: string;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
  name: string;
  open_issues_count: number;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    html_url: string;
    organizations_url: string;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    type: string;
    url: string;
    user_view_type: string;
  };
  size: number;
  stargazers_count: number;
  topics: string[];
  url: string;
  watchers_count: number;
};

export type TFetchReposResponse = {
  items: TRepo[];
  total_count: number;
  incomplete_results: number;
};

export type TLoginUserPayload = {
  access_token: string;
};
