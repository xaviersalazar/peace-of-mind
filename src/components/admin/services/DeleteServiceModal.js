import { Modal } from "react-daisyui";
import { Button, StrikethruText } from "../../shared";
import styled from "styled-components";

const DeleteModal = styled.div`
  & .modal {
    top: 0;
    background: rgba(248, 250, 252, 0.8);
  }
`;

const { Header, Body, Actions } = Modal;

const DeleteServiceModal = ({
  isDeleteModalOpen,
  toggleDeleteModal,
  service,
}) => {
  return (
    <DeleteModal>
      <Modal
        className="overflow-hidden md:max-w-md lg:max-w-lg"
        open={isDeleteModalOpen}
      >
        <Header className="text-2xl font-bold text-center mb-4">
          <StrikethruText text="Delete Service" color="#fb7185" />
        </Header>
        <Body className="p-4 rounded-2xl text-center">
          <p className="text-sm font-light text-slate-400">
            Are you sure you want to delete{" "}
            <span className="text-slate-700 font-bold">{service?.title}</span>?
            This process is irreversible
          </p>
        </Body>
        <Actions className="mt-0 gap-x-2">
          <Button type="cancel" onClick={toggleDeleteModal}>
            Cancel
          </Button>
          <Button
            type="delete"
            onClick={(e) => {
              e.currentTarget.blur();
            }}
          >
            Delete
          </Button>
        </Actions>
      </Modal>
    </DeleteModal>
  );
};

export default DeleteServiceModal;
