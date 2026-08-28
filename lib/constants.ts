export const REPO_PER_PAGE = 10;
export const FILTER_QUERY = {
  all: "",
  street: "stars:<1000 ",
  global: "stars:1000..9999 ",
  cosmic: "stars:10000..99999 ",
  multiversal: "stars:>=100000 ",
};

export const DEFAULT_QUERY = " license:MIT";

export const PROXY_LINK = process.env.NEXT_PUBLIC_PROXY_LINK;
