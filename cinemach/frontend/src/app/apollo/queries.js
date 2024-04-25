import { gql } from "@apollo/client";

export const TEST = gql`
  query GetBooks {
    books {
      title
      author
    }
  }
`;
