import { Resolver, ResolverFn } from "../../src/models.generated";
import { GraphQLResolveInfo } from "graphql";

export function assertResolverIsAFunction<A, B, C, D>(
  resolver: Resolver<A, B, C, D>
): asserts resolver is ResolverFn<A, B, C, D> {
  if (typeof resolver !== "function") {
    throw new Error("Resolver is not a function");
  }
}

export function mockGraphQLInfo(): GraphQLResolveInfo {
  return (undefined as unknown) as GraphQLResolveInfo;
}
