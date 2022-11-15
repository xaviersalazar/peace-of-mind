import { gql } from "@apollo/client";

export const GET_ALL_SERVICES_PAGINATED = gql`
  query GetServicesPaginated($skip: Int, $take: Int) {
    servicesPaginated(skip: $skip, take: $take) {
      services {
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
      pageNumber
      totalPages
      totalCount
    }
  }
`;
