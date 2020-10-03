import { ImageResolvers } from "../models.generated";

export const imageResolvers: ImageResolvers = {
  id(imageId) {
    return imageId;
  },
  src(id) {
    return `https://picsum.photos/seed/${id}/1200/600`;
  },
};
