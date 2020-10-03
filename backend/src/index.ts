import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { typeDefs } from "./models.generated";

process.on("unhandledRejection", (e) => {
  throw e;
});

const apollo = new ApolloServer({ resolvers, typeDefs });

apollo.listen().then(({ url }) => {
  console.log(`Apollo server is running on port ${url}`);
});
