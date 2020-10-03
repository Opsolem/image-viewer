import { imageResolvers } from "../../src/resolvers/image";
import {
  assertResolverIsAFunction,
  mockGraphQLInfo,
} from "../.helpers/graphql";

describe("imageResolvers", () => {
  it("generates the image url from its id", () => {
    assertResolverIsAFunction(imageResolvers.src);

    const id = "my-image-id";
    const resolvedUrl = imageResolvers.src(id, {}, {}, mockGraphQLInfo());

    expect(resolvedUrl).toBe(
      "https://picsum.photos/seed/my-image-id/1200/600"
    );
  });
});
