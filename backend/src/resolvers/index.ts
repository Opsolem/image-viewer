import { Resolvers } from "../models.generated";
import { imageResolvers } from "./image";
import { queryResolvers } from "./query";
import { galleryResolver } from "./gallery";

export const resolvers: Resolvers = {
  Query: queryResolvers,
  Image: imageResolvers,
  Gallery: galleryResolver
};
