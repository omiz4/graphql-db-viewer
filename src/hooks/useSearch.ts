import { createCtx } from "./createCtx";

type SearchBarContext = {
  search: string;
  setSearch: (value: string) => void;
};

export const [useSearch, Provider] = createCtx<SearchBarContext>();
