import { gql } from "@apollo/client";

const EDIT_SERVICE = gql`
  mutation EditService($service: EditServiceInput!) {
    editService(service: $service) {
      id
      title
      description
      prices {
        id
        unit {
          id
          name
        }
        price
        hasUpcharge
      }
    }
  }
`;

const DELETE_SERVICE = gql`
  mutation DeleteService($id: Int!) {
    deleteService(id: $id) {
      id
    }
  }
`;

export { EDIT_SERVICE, DELETE_SERVICE };
