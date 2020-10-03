import { Resolvers } from "../models.generated";
import { imageResolvers } from "./image";
import { queryResolvers } from "./query";

export const resolvers: Resolvers = {
  Query: queryResolvers,
  Image: imageResolvers,
};
