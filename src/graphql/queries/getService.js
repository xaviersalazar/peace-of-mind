import { gql } from "@apollo/client";

export const GET_SERVICE = (categoryId) =>
  gql`
    query getService {
      servicesCollection(
        filter: { categoryId: { eq: ${categoryId} } }
        orderBy: [{ title: AscNullsFirst }]
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
      }
    }
`;
