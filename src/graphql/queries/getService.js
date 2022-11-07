import { gql } from "@apollo/client";

export const GET_SERVICE = (categoryId) =>
  gql`
    query getService {
      servicesCollection(filter: { categoryId: { eq: ${categoryId} } }) {
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
      }
    }
`;
