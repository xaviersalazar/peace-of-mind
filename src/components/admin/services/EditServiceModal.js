import { Modal } from "react-daisyui";
import Button from "../../shared/Button";
import styled from "styled-components";

const { Header, Body, Actions } = Modal;

const EditModal = styled.div`
  & .modal {
    top: -6rem;
    background: rgba(248, 250, 252, 0.8);
  }
`;

const EditServiceModal = ({ isEditModalOpen, toggleEditModal, service }) => {
  console.log(service);

  return (
    <EditModal>
      <Modal open={isEditModalOpen}>
        <Header className="text-2xl font-bold text-center">
          {service?.title}
        </Header>

        <Body>
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </Body>

        <Actions>
          <Button onClick={toggleEditModal}>Close</Button>
        </Actions>
      </Modal>
    </EditModal>
  );
};

export default EditServiceModal;
