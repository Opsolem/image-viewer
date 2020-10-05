import { galleryResolver } from "../../src/resolvers/gallery";
import { assertResolverIsAFunction, mockGraphQLInfo } from "../.helpers/graphql";

describe("galleryResolver", () => {
  it("should return a list of image seeds", () => {
    assertResolverIsAFunction(galleryResolver.seeds);

    const resolvedSeeds = galleryResolver.seeds("", {}, {}, mockGraphQLInfo());

    expect(resolvedSeeds).toStrictEqual(["image_1", "image_2", "image_3", "image_4", "image_5"]);
  });
});
