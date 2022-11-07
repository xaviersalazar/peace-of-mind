import { gql } from "@apollo/client";

// Pages limited to 30 by default
export const GET_ALL_SERVICES = gql`
  query getAllServices {
    servicesCollection {
      edges {
        node {
          id
          title
          description
          category {
            id
            categoryName
          }
          pricesCollection {
            edges {
              node {
                id
                price
              }
            }
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
