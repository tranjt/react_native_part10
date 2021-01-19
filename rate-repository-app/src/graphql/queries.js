import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query repositories(
    $orderBy: AllRepositoriesOrderBy, 
    $orderDirection: OrderDirection, 
    $searchKeyword: String){
      repositories (
        orderBy: $orderBy, 
        orderDirection: $orderDirection, 
        searchKeyword: $searchKeyword){
          edges {
            node {
              id
              fullName
              description
              language
              forksCount
              stargazersCount
              ratingAverage
              reviewCount
              ownerAvatarUrl        
            }
          }    
      }
  }
`;

export const GET_REPOSITORY = gql`
  query repository($id: ID!, $first: Int, $after: String){
    repository(id: $id) {
      id
      fullName
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl      
      url
      reviews (first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            repositoryId
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          totalCount
          hasNextPage
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query getAuthorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            repositoryId
            repository {
              fullName
            }
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          totalCount
          hasNextPage
        }
      }
    }
  }
`;

