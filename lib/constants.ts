export const REPO_PER_PAGE = 10;
export const FILTER_QUERY = {
  all: "stars:>=50",
  street: "stars:50..999 ",
  global: "stars:1000..9999 ",
  cosmic: "stars:10000..99999 ",
  multiversal: "stars:>=100000 ",
};

export const DEFAULT_QUERY =
  "license:mit license:apache-2.0 license:gpl-3.0 fork:false is:public archived:false";

export const PROXY_LINK = process.env.NEXT_PUBLIC_PROXY_LINK;
