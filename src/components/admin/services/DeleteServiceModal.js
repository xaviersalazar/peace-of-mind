import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { Modal } from "react-daisyui";
import { Button, StrikethruText, Spinner } from "../../shared";
import { FiXCircle } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { DELETE_SERVICE } from "../../../graphql/mutations";
import { GET_ALL_SERVICES_PAGINATED } from "../../../graphql/queries";
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
  setDeleteMsg,
}) => {
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (errorMsg) {
      setTimeout(() => {
        setErrorMsg(null);
      }, 5000);
    }
  }, [errorMsg]);

  const [deleteService, { loading }] = useMutation(DELETE_SERVICE, {
    refetchQueries: [
      {
        query: GET_ALL_SERVICES_PAGINATED,
        variables: {
          skip: 0,
          take: 30,
        },
      },
      "GetServicesPaginated",
    ],
    onCompleted: () => {
      setDeleteMsg(
        <div className="text-sm font-light">
          <span className="block">Successfully deleted</span>
          <span className="block">{service?.title}</span>
        </div>
      );
      toggleDeleteModal();
    },
  });

  const onDelete = async () => {
    try {
      await deleteService({ variables: { id: parseInt(service?.id) } });
    } catch (e) {
      setErrorMsg(
        <div className="text-sm font-light">
          <span className="block">Oops! Something happened</span>
          <span className="block">Please try again</span>
        </div>
      );
    }
  };

  return (
    <DeleteModal>
      <Modal
        className="overflow-hidden flex flex-col justify-between min-h-[20rem] md:max-w-md lg:max-w-lg"
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
          <Button type="button" btnType="cancel" onClick={toggleDeleteModal}>
            Cancel
          </Button>
          <Button
            type="delete"
            onClick={(e) => {
              onDelete();
              e.currentTarget.blur();
            }}
          >
            {loading ? (
              <>
                <Spinner size={4} /> Deleting
              </>
            ) : (
              "Delete"
            )}
          </Button>
        </Actions>
        <AnimatePresence>
          {errorMsg && (
            <motion.div
              className={`alert alert-error shadow-lg absolute left-32 top-6 z-[100] w-full items-start md:left-[12rem] lg:left-[16rem]`}
              initial={{ x: 800 }}
              animate={{ x: 0 }}
              exit={{ x: 800 }}
            >
              <div>
                <FiXCircle />
                {errorMsg}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </DeleteModal>
  );
};

export default DeleteServiceModal;
