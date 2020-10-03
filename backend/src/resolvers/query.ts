import { QueryResolvers } from "../models.generated";

export const queryResolvers: QueryResolvers = {
  image(root, args) {
    return args.id;
  },
  gallery() {
    return "gallery"
  }
};
