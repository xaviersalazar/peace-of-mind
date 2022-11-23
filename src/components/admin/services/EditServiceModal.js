import { useEffect, useState } from "react";
import { Modal, Checkbox } from "react-daisyui";
import {
  FiDollarSign,
  FiEdit2,
  FiXCircle,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { useMutation } from "@apollo/client";
import { AnimatePresence, motion } from "framer-motion";
import { Button, Spinner, StrikethruText } from "../../shared";
import { EDIT_SERVICE } from "../../../graphql/mutations/editService";
import { clean } from "../../utils/clean";
import { GET_ALL_SERVICES_PAGINATED } from "../../../graphql/queries/getAllServicesPaginated";
import styled from "styled-components";

const keysToOmitForMutation = ["__typename", "title", "category"];

const errorTypes = {
  success: <FiCheckCircle />,
  info: <FiAlertCircle />,
  error: <FiXCircle />,
};

const { Header, Body, Actions } = Modal;

const EditModal = styled.div`
  & .modal {
    top: 0;
    background: rgba(248, 250, 252, 0.8);
  }
`;

const InputContainer = styled.div`
  & .input:focus ~ svg {
    color: #10ffcb;
  }
`;

const EditServiceModal = ({ isEditModalOpen, toggleEditModal, service }) => {
  const [editService, { loading }] = useMutation(EDIT_SERVICE, {
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
    onCompleted: (response) => {
      const {
        editService: { title },
      } = response;

      setUpdateMsg({
        msg: (
          <div>
            <span className="block">Successfully saved</span>
            <span className="block">{title}</span>
          </div>
        ),
        type: "success",
      });
    },
  });

  const [editedService, setEditedService] = useState(null);
  const [updateMsg, setUpdateMsg] = useState(null);

  useEffect(() => {
    setEditedService(service);
  }, [service]);

  useEffect(() => {
    if (updateMsg) {
      setTimeout(() => {
        setUpdateMsg(null);
      }, 5000);
    }
  }, [updateMsg]);

  const onChange = (e) => {
    let { name, value } = e.target;

    if (name === "unit" || name === "price" || name === "hasUpcharge") {
      const priceId = e.target.dataset.priceid;
      const checked = name === "hasUpcharge" ? value === "on" : false;

      const updatedPrices = editedService.prices.map((price) =>
        price.id === priceId
          ? { ...price, [name]: name === "hasUpcharge" ? checked : value }
          : price
      );

      setEditedService({
        ...editedService,
        prices: updatedPrices,
      });
    } else {
      setEditedService({
        ...editedService,
        [name]: value,
      });
    }
  };

  const onSave = async () => {
    const service = clean(editedService, keysToOmitForMutation);

    try {
      await editService({ variables: { service } });
    } catch (e) {
      setUpdateMsg({
        msg: (
          <div>
            <span className="block">Oops! Something happened</span>
            <span className="block">Please try again</span>
          </div>
        ),
        type: "error",
      });
    }
  };

  return (
    <EditModal>
      <Modal
        className="overflow-hidden md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl"
        open={isEditModalOpen}
      >
        <Header className="text-2xl font-bold text-center mb-4">
          <StrikethruText text={editedService?.title} color="#10FFCB" />
        </Header>
        <Body className="bg-slate-50 p-4 rounded-2xl">
          <div id={`${editedService?.id}-edit-form`}>
            <div className="form-control w-full">
              <div className="mb-2">
                <label className="label">
                  <span className="label-text font-medium">Category</span>
                </label>
                {loading ? (
                  <div className="bg-white w-full h-10 rounded-lg animate-pulse" />
                ) : (
                  <input
                    name="categoryName"
                    type="text"
                    className="input text-sm w-full h-10 font-light rounded-lg disabled:bg-slate-200 disabled:outline-none disabled:border-none"
                    value={editedService?.category.categoryName}
                    disabled
                  />
                )}
              </div>
              <div className="mb-2">
                <label className="label">
                  <span className="label-text font-medium">Description</span>
                </label>
                {loading ? (
                  <div className="bg-white w-full h-32 rounded-lg animate-pulse" />
                ) : (
                  <textarea
                    name="description"
                    className="textarea w-full h-32 font-light rounded-lg resize-none focus:outline-primary"
                    value={editedService?.description}
                    onChange={onChange}
                  />
                )}
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium">Price(s)</span>
                </label>
                {editedService?.prices.map(
                  ({ id, price, unit, hasUpcharge }) => (
                    <div key={id} className="flex gap-x-2">
                      <InputContainer className="relative md:flex-1">
                        <label className="label">
                          <span className="text-sm label-text font-light">
                            Unit
                          </span>
                        </label>
                        {loading ? (
                          <div className="bg-white w-full h-10 rounded-lg animate-pulse" />
                        ) : (
                          <>
                            <input
                              name="unit"
                              type="text"
                              className="input text-sm w-full h-10 font-light rounded-lg pl-7 focus:outline-primary"
                              value={unit || "N/A"}
                              onChange={onChange}
                              data-priceid={id}
                            />
                            <FiEdit2 className="absolute left-2 bottom-[0.8rem] text-xs text-slate-300" />
                          </>
                        )}
                      </InputContainer>
                      <InputContainer className="relative lg:flex-1">
                        <label className="label">
                          <span className="text-sm label-text font-light">
                            Price
                          </span>
                        </label>
                        {loading ? (
                          <div className="bg-white w-full h-10 rounded-lg animate-pulse" />
                        ) : (
                          <>
                            <input
                              name="price"
                              type="text"
                              className="input text-sm w-full h-10 font-light rounded-lg pl-6 focus:outline-primary"
                              value={price}
                              onChange={onChange}
                              data-priceid={id}
                            />
                            <FiDollarSign className="absolute left-2 bottom-[0.82rem] text-xs text-slate-300" />
                          </>
                        )}
                      </InputContainer>
                      <div className="text-center">
                        <label className="label">
                          <span className="label-text font-light">
                            Upcharge?
                          </span>
                        </label>
                        <Checkbox
                          name="hasUpcharge"
                          color="primary"
                          className="relative top-[0.5rem] focus:outline-primary"
                          defaultChecked={hasUpcharge}
                          onChange={onChange}
                          data-priceid={id}
                          disabled={loading}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </Body>
        <Actions className="mt-0">
          <Button type="cancel" onClick={toggleEditModal}>
            Cancel
          </Button>
          <Button
            disabled={loading}
            onClick={(e) => {
              e.currentTarget.blur();
              onSave();
            }}
          >
            {loading ? (
              <>
                <Spinner size={4} /> Saving
              </>
            ) : (
              "Save"
            )}
          </Button>
        </Actions>
        <AnimatePresence>
          {updateMsg && (
            <motion.div
              className={`alert alert-${updateMsg.type} shadow-lg absolute left-32 top-6 z-[100] w-full items-start md:left-[18rem] lg:left-[24rem] xl:left-[30rem] 2xl:left-[34rem]`}
              initial={{ x: 800 }}
              animate={{ x: 0 }}
              exit={{ x: 800 }}
            >
              <div>
                {errorTypes[updateMsg.type]}
                <p className="text-sm font-light">{updateMsg.msg}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    </EditModal>
  );
};

export default EditServiceModal;
