import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpHost = "http://localhost:4000";

const link = new HttpLink({
  uri: httpHost
});
export const cache = new InMemoryCache();

export const client = new ApolloClient({
  link,
  cache
});
