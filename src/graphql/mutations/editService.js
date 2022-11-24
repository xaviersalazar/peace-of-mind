import { gql } from "@apollo/client";

export const EDIT_SERVICE = gql`
  mutation EditService($service: EditServiceInput!) {
    editService(service: $service) {
      id
      title
      description
      prices {
        id
        unit
        price
        hasUpcharge
      }
    }
  }
`;
