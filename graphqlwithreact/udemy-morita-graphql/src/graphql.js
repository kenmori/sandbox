import gql from "graphql-tag";

export const ME = gql`
  query me {
    user(login: "kenmori") {
      name
      avatarUrl
    }
  }
`;

export const SEARCH_REPOSITORIES = gql`
  query searchRepositories(
    $first: Int
    $after: String
    $before: String
    $last: Int
    $query: String!
  ) {
    search(
      first: $first
      after: $after
      before: $before
      last: $last
      query: $query
      type: REPOSITORY
    ) {
      repositoryCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ... on Repository {
            id
            name
            url
            stargazers {
              totalCount
            }
            viewerHasStarred
          }
        }
      }
    }
  }
`;