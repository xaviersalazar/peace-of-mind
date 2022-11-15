import { gql } from "@apollo/client";

export const GET_SERVICES_BY_CATEGORY = gql`
  query GetServicesByCategory($categoryId: Int) {
    servicesByCategory(categoryId: $categoryId) {
      id
      title
      description
      prices {
        id
        price
        unit
        hasUpcharge
      }
    }
  }
`;
