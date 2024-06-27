/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type LoginResponse = {
  __typename?: "LoginResponse";
  accessToken: Scalars["String"]["output"];
  user: User;
};

export type Mutation = {
  __typename?: "Mutation";
  addCommentToComment: Scalars["Boolean"]["output"];
  addPost: Scalars["Boolean"]["output"];
  addPostComment: Scalars["Boolean"]["output"];
  getComments: Array<PostComment>;
  getPost: Post;
  getPostComments: Array<PostComment>;
  login: LoginResponse;
  logout: Scalars["Boolean"]["output"];
  register: Scalars["Boolean"]["output"];
  revokeRefreshTokensForUser: Scalars["Boolean"]["output"];
};

export type MutationAddCommentToCommentArgs = {
  commentId: Scalars["Int"]["input"];
  content: Scalars["String"]["input"];
};

export type MutationAddPostArgs = {
  content: Scalars["String"]["input"];
  subject: Scalars["String"]["input"];
};

export type MutationAddPostCommentArgs = {
  content: Scalars["String"]["input"];
  postId: Scalars["Int"]["input"];
};

export type MutationGetCommentsArgs = {
  commentId: Scalars["Int"]["input"];
};

export type MutationGetPostArgs = {
  postId: Scalars["String"]["input"];
};

export type MutationGetPostCommentsArgs = {
  postId: Scalars["Int"]["input"];
};

export type MutationLoginArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationRegisterArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars["Int"]["input"];
};

export type Post = {
  __typename?: "Post";
  author: User;
  comments: Array<PostComment>;
  content: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  subject: Scalars["String"]["output"];
};

export type PostComment = {
  __typename?: "PostComment";
  author: User;
  comments: Array<PostComment>;
  content: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  post: Post;
  postComment: PostComment;
};

export type Query = {
  __typename?: "Query";
  bye: Scalars["String"]["output"];
  hello: Scalars["String"]["output"];
  me?: Maybe<User>;
  posts: Array<Post>;
  users: Array<User>;
};

export type User = {
  __typename?: "User";
  email: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
};

export type AddPostMutationVariables = Exact<{
  content: Scalars["String"]["input"];
  subject: Scalars["String"]["input"];
}>;

export type AddPostMutation = { __typename?: "Mutation"; addPost: boolean };

export type AddPostCommentMutationVariables = Exact<{
  content: Scalars["String"]["input"];
  postId: Scalars["Int"]["input"];
}>;

export type AddPostCommentMutation = {
  __typename?: "Mutation";
  addPostComment: boolean;
};

export type ByeQueryVariables = Exact<{ [key: string]: never }>;

export type ByeQuery = { __typename?: "Query"; bye: string };

export type GetCommentsMutationVariables = Exact<{
  commentId: Scalars["Int"]["input"];
}>;

export type GetCommentsMutation = {
  __typename?: "Mutation";
  getComments: Array<{
    __typename?: "PostComment";
    id: number;
    content: string;
  }>;
};

export type GetPostMutationVariables = Exact<{
  postId: Scalars["String"]["input"];
}>;

export type GetPostMutation = {
  __typename?: "Mutation";
  getPost: {
    __typename?: "Post";
    subject: string;
    content: string;
    author: { __typename?: "User"; email: string };
    comments: Array<{
      __typename?: "PostComment";
      id: number;
      content: string;
    }>;
  };
};

export type HelloQueryVariables = Exact<{ [key: string]: never }>;

export type HelloQuery = { __typename?: "Query"; hello: string };

export type LoginMutationVariables = Exact<{
  password: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "LoginResponse";
    accessToken: string;
    user: { __typename?: "User"; id: number; email: string };
  };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: "Mutation"; logout: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me?: { __typename?: "User"; id: number; email: string } | null;
};

export type PostsQueryVariables = Exact<{ [key: string]: never }>;

export type PostsQuery = {
  __typename?: "Query";
  posts: Array<{ __typename?: "Post"; id: number; subject: string }>;
};

export type RegisterMutationVariables = Exact<{
  password: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
}>;

export type RegisterMutation = { __typename?: "Mutation"; register: boolean };

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = {
  __typename?: "Query";
  users: Array<{ __typename?: "User"; id: number; email: string }>;
};

export const AddPostDocument = gql`
  mutation AddPost($content: String!, $subject: String!) {
    addPost(content: $content, subject: $subject)
  }
`;
export type AddPostMutationFn = Apollo.MutationFunction<
  AddPostMutation,
  AddPostMutationVariables
>;

/**
 * __useAddPostMutation__
 *
 * To run a mutation, you first call `useAddPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostMutation, { data, loading, error }] = useAddPostMutation({
 *   variables: {
 *      content: // value for 'content'
 *      subject: // value for 'subject'
 *   },
 * });
 */
export function useAddPostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddPostMutation,
    AddPostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddPostMutation, AddPostMutationVariables>(
    AddPostDocument,
    options
  );
}
export type AddPostMutationHookResult = ReturnType<typeof useAddPostMutation>;
export type AddPostMutationResult = Apollo.MutationResult<AddPostMutation>;
export type AddPostMutationOptions = Apollo.BaseMutationOptions<
  AddPostMutation,
  AddPostMutationVariables
>;
export const AddPostCommentDocument = gql`
  mutation AddPostComment($content: String!, $postId: Int!) {
    addPostComment(content: $content, postId: $postId)
  }
`;
export type AddPostCommentMutationFn = Apollo.MutationFunction<
  AddPostCommentMutation,
  AddPostCommentMutationVariables
>;

/**
 * __useAddPostCommentMutation__
 *
 * To run a mutation, you first call `useAddPostCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostCommentMutation, { data, loading, error }] = useAddPostCommentMutation({
 *   variables: {
 *      content: // value for 'content'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useAddPostCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddPostCommentMutation,
    AddPostCommentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AddPostCommentMutation,
    AddPostCommentMutationVariables
  >(AddPostCommentDocument, options);
}
export type AddPostCommentMutationHookResult = ReturnType<
  typeof useAddPostCommentMutation
>;
export type AddPostCommentMutationResult =
  Apollo.MutationResult<AddPostCommentMutation>;
export type AddPostCommentMutationOptions = Apollo.BaseMutationOptions<
  AddPostCommentMutation,
  AddPostCommentMutationVariables
>;
export const ByeDocument = gql`
  query Bye {
    bye
  }
`;

/**
 * __useByeQuery__
 *
 * To run a query within a React component, call `useByeQuery` and pass it any options that fit your needs.
 * When your component renders, `useByeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useByeQuery({
 *   variables: {
 *   },
 * });
 */
export function useByeQuery(
  baseOptions?: Apollo.QueryHookOptions<ByeQuery, ByeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ByeQuery, ByeQueryVariables>(ByeDocument, options);
}
export function useByeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ByeQuery, ByeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ByeQuery, ByeQueryVariables>(ByeDocument, options);
}
export function useByeSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<ByeQuery, ByeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ByeQuery, ByeQueryVariables>(
    ByeDocument,
    options
  );
}
export type ByeQueryHookResult = ReturnType<typeof useByeQuery>;
export type ByeLazyQueryHookResult = ReturnType<typeof useByeLazyQuery>;
export type ByeSuspenseQueryHookResult = ReturnType<typeof useByeSuspenseQuery>;
export type ByeQueryResult = Apollo.QueryResult<ByeQuery, ByeQueryVariables>;
export const GetCommentsDocument = gql`
  mutation GetComments($commentId: Int!) {
    getComments(commentId: $commentId) {
      id
      content
    }
  }
`;
export type GetCommentsMutationFn = Apollo.MutationFunction<
  GetCommentsMutation,
  GetCommentsMutationVariables
>;

/**
 * __useGetCommentsMutation__
 *
 * To run a mutation, you first call `useGetCommentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getCommentsMutation, { data, loading, error }] = useGetCommentsMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useGetCommentsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GetCommentsMutation,
    GetCommentsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<GetCommentsMutation, GetCommentsMutationVariables>(
    GetCommentsDocument,
    options
  );
}
export type GetCommentsMutationHookResult = ReturnType<
  typeof useGetCommentsMutation
>;
export type GetCommentsMutationResult =
  Apollo.MutationResult<GetCommentsMutation>;
export type GetCommentsMutationOptions = Apollo.BaseMutationOptions<
  GetCommentsMutation,
  GetCommentsMutationVariables
>;
export const GetPostDocument = gql`
  mutation GetPost($postId: String!) {
    getPost(postId: $postId) {
      subject
      content
      author {
        email
      }
      comments {
        id
        content
      }
    }
  }
`;
export type GetPostMutationFn = Apollo.MutationFunction<
  GetPostMutation,
  GetPostMutationVariables
>;

/**
 * __useGetPostMutation__
 *
 * To run a mutation, you first call `useGetPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getPostMutation, { data, loading, error }] = useGetPostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useGetPostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GetPostMutation,
    GetPostMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<GetPostMutation, GetPostMutationVariables>(
    GetPostDocument,
    options
  );
}
export type GetPostMutationHookResult = ReturnType<typeof useGetPostMutation>;
export type GetPostMutationResult = Apollo.MutationResult<GetPostMutation>;
export type GetPostMutationOptions = Apollo.BaseMutationOptions<
  GetPostMutation,
  GetPostMutationVariables
>;
export const HelloDocument = gql`
  query Hello {
    hello
  }
`;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(
  baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HelloQuery, HelloQueryVariables>(
    HelloDocument,
    options
  );
}
export function useHelloLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(
    HelloDocument,
    options
  );
}
export function useHelloSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<HelloQuery, HelloQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<HelloQuery, HelloQueryVariables>(
    HelloDocument,
    options
  );
}
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloSuspenseQueryHookResult = ReturnType<
  typeof useHelloSuspenseQuery
>;
export type HelloQueryResult = Apollo.QueryResult<
  HelloQuery,
  HelloQueryVariables
>;
export const LoginDocument = gql`
  mutation Login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      accessToken
      user {
        id
        email
      }
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`;
export type LogoutMutationFn = Apollo.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    options
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      id
      email
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    options
  );
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const PostsDocument = gql`
  query Posts {
    posts {
      id
      subject
    }
  }
`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(
  baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    options
  );
}
export function usePostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    options
  );
}
export function usePostsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    options
  );
}
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsSuspenseQueryHookResult = ReturnType<
  typeof usePostsSuspenseQuery
>;
export type PostsQueryResult = Apollo.QueryResult<
  PostsQuery,
  PostsQueryVariables
>;
export const RegisterDocument = gql`
  mutation Register($password: String!, $email: String!) {
    register(password: $password, email: $email)
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const UsersDocument = gql`
  query Users {
    users {
      id
      email
    }
  }
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export function useUsersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersSuspenseQueryHookResult = ReturnType<
  typeof useUsersSuspenseQuery
>;
export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>;
