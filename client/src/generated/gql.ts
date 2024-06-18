/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation AddPost($content: String!) {\n  addPost(content: $content)\n}": types.AddPostDocument,
    "query Bye {\n  bye\n}": types.ByeDocument,
    "mutation GetPost($postId: String!) {\n  getPost(postId: $postId) {\n    content\n    author {\n      email\n    }\n  }\n}": types.GetPostDocument,
    "query Hello {\n  hello\n}": types.HelloDocument,
    "mutation Login($password: String!, $email: String!) {\n  login(password: $password, email: $email) {\n    accessToken\n    user {\n      id\n      email\n    }\n  }\n}": types.LoginDocument,
    "mutation Logout {\n  logout\n}": types.LogoutDocument,
    "query Me {\n  me {\n    id\n    email\n  }\n}": types.MeDocument,
    "query Posts {\n  posts {\n    id\n    content\n  }\n}": types.PostsDocument,
    "mutation Register($password: String!, $email: String!) {\n  register(password: $password, email: $email)\n}": types.RegisterDocument,
    "query Users {\n  users {\n    id\n    email\n  }\n}": types.UsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation AddPost($content: String!) {\n  addPost(content: $content)\n}"): (typeof documents)["mutation AddPost($content: String!) {\n  addPost(content: $content)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Bye {\n  bye\n}"): (typeof documents)["query Bye {\n  bye\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation GetPost($postId: String!) {\n  getPost(postId: $postId) {\n    content\n    author {\n      email\n    }\n  }\n}"): (typeof documents)["mutation GetPost($postId: String!) {\n  getPost(postId: $postId) {\n    content\n    author {\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Hello {\n  hello\n}"): (typeof documents)["query Hello {\n  hello\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($password: String!, $email: String!) {\n  login(password: $password, email: $email) {\n    accessToken\n    user {\n      id\n      email\n    }\n  }\n}"): (typeof documents)["mutation Login($password: String!, $email: String!) {\n  login(password: $password, email: $email) {\n    accessToken\n    user {\n      id\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Logout {\n  logout\n}"): (typeof documents)["mutation Logout {\n  logout\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Me {\n  me {\n    id\n    email\n  }\n}"): (typeof documents)["query Me {\n  me {\n    id\n    email\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Posts {\n  posts {\n    id\n    content\n  }\n}"): (typeof documents)["query Posts {\n  posts {\n    id\n    content\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($password: String!, $email: String!) {\n  register(password: $password, email: $email)\n}"): (typeof documents)["mutation Register($password: String!, $email: String!) {\n  register(password: $password, email: $email)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Users {\n  users {\n    id\n    email\n  }\n}"): (typeof documents)["query Users {\n  users {\n    id\n    email\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;