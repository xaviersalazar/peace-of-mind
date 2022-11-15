import { gql } from "@apollo/client";

export const GET_SERVICE = gql`
  query GetService($id: Int) {
    service(id: $id) {
      id
      title
      description
      category {
        id
        categoryName
      }
      prices {
        id
        price
        unit
        hasUpcharge
      }
    }
  }
`;
