import { gql } from "@apollo/client";

const GET_SERVICE = gql`
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

const GET_ALL_SERVICES_PAGINATED = gql`
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

const GET_SERVICES_BY_CATEGORY = gql`
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

export { GET_SERVICE, GET_ALL_SERVICES_PAGINATED, GET_SERVICES_BY_CATEGORY };
