import { gql } from "@apollo/client";

export const GET_ALL_SERVICES = gql`
  query Services($first: Int, $after: String) {
    servicesCollection(
      first: $first
      after: $after
      orderBy: [{ categoryId: AscNullsFirst }]
    ) {
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
                unit
                hasUpcharge
              }
            }
          }
        }
      }
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
