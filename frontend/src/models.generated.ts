import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Image = {
  __typename?: 'Image';
  id: Scalars['ID'];
  src: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  image: Image;
};


export type QueryImageArgs = {
  id: Scalars['ID'];
};

export type GetImageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetImageQuery = (
  { __typename?: 'Query' }
  & { image: (
    { __typename?: 'Image' }
    & Pick<Image, 'id' | 'src'>
  ) }
);


export const GetImageDocument = gql`
    query GetImage($id: ID!) {
  image(id: $id) {
    id
    src
  }
}
    `;

/**
 * __useGetImageQuery__
 *
 * To run a query within a Vue component, call `useGetImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetImageQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetImageQuery(
 *   {
 *      id: // value for 'id'
 *   }
 * );
 */
export function useGetImageQuery(variables: GetImageQueryVariables | VueCompositionApi.Ref<GetImageQueryVariables> | ReactiveFunction<GetImageQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetImageQuery, GetImageQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetImageQuery, GetImageQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetImageQuery, GetImageQueryVariables>> = {}) {
            return VueApolloComposable.useQuery<GetImageQuery, GetImageQueryVariables>(GetImageDocument, variables, options);
          }
export type GetImageQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetImageQuery, GetImageQueryVariables>;