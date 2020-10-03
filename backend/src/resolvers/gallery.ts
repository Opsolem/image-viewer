import { GalleryResolvers } from "../models.generated";

export const galleryResolver: GalleryResolvers = {
    seeds() {
        return ["image_1", "image_2", "image_3", "image_4", "image_5"];
    }
}
