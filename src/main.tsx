import { SearchProvider } from "@/component/SearchBar/Provider";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:8080/query",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <SearchProvider initialValue="">
        <App />
      </SearchProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
