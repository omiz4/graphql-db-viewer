import type React from "react";
import { useState } from "react";
import { Provider } from "../../hooks/useSearch";

export function SearchProvider({
  initialValue,
  children,
}: {
  initialValue: string;
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState(initialValue);
  return <Provider value={{ search, setSearch }}>{children}</Provider>;
}
