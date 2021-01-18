import { gql } from 'apollo-boost';

export const SIGN_IN = gql`
mutation login($username: String!, $password: String!) {
  authorize(credentials: { username: $username, password: $password }) {
    accessToken
  }
}
`;

export const SIGN_UP = gql`
mutation signup($user: CreateUserInput) {
  createUser(user: $user) {
    id
    username
  }
}
`;

export const CREATE_REVIEW = gql`
mutation createReview($review: CreateReviewInput!) {
    createReview(review: $review) {
        repositoryId
    }
}
`;