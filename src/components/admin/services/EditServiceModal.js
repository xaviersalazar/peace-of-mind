import { useEffect, useState } from "react";
import { Modal, Checkbox } from "react-daisyui";
import { Button, StrikethruText } from "../../shared";
import { FiDollarSign, FiEdit2 } from "react-icons/fi";
import styled from "styled-components";

const { Header, Body, Actions } = Modal;

const EditModal = styled.div`
  & .modal {
    top: -6rem;
    background: rgba(248, 250, 252, 0.8);
  }
`;

const InputContainer = styled.div`
  & .input:focus ~ svg {
    color: #10ffcb;
  }
`;

const EditServiceModal = ({ isEditModalOpen, toggleEditModal, service }) => {
  const [editedService, setEditedService] = useState(null);

  useEffect(() => {
    setEditedService(service);
  }, [service]);

  const onChange = (e) => {
    let { name, value } = e.target;
    let updatedService = { ...editedService };

    if (name === "unit" || name === "price" || name === "hasUpcharge") {
      const priceId = e.target.dataset.priceid;
      const checked = name === "hasUpcharge" ? value === "on" : false;

      const updatedPrices = editedService.prices.map((price) =>
        price.id === priceId
          ? { ...price, [name]: name === "hasUpcharge" ? checked : value }
          : price
      );

      updatedService = {
        ...updatedService,
        prices: updatedPrices,
      };
    }

    setEditedService({
      ...updatedService,
      [name]: value,
    });
  };

  const onSave = () => {
    console.log(editedService);
  };

  return (
    <EditModal>
      <Modal
        className="md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl"
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
                <input
                  name="categoryName"
                  type="text"
                  className="input text-sm w-full h-10 font-light rounded-lg disabled:bg-slate-200 disabled:outline-none disabled:border-none"
                  value={editedService?.category.categoryName}
                  disabled
                />
              </div>
              <div className="mb-2">
                <label className="label">
                  <span className="label-text font-medium">Description</span>
                </label>
                <textarea
                  name="description"
                  className="textarea w-full h-32 font-light rounded-lg resize-none focus:outline-primary"
                  value={editedService?.description}
                  onChange={onChange}
                />
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
                        <input
                          name="unit"
                          type="text"
                          className="input text-sm w-full h-10 font-light rounded-lg pl-6 focus:outline-primary"
                          value={unit || "N/A"}
                          onChange={onChange}
                          data-priceid={id}
                        />
                        <FiEdit2 className="absolute left-2 bottom-[0.82rem] text-xs text-slate-300" />
                      </InputContainer>
                      <InputContainer className="relative lg:flex-1">
                        <label className="label">
                          <span className="text-sm label-text font-light">
                            Price
                          </span>
                        </label>
                        <input
                          name="price"
                          type="text"
                          className="input text-sm w-full h-10 font-light rounded-lg pl-6 focus:outline-primary"
                          value={price}
                          onChange={onChange}
                          data-priceid={id}
                        />
                        <FiDollarSign className="absolute left-2 bottom-[0.82rem] text-xs text-slate-300" />
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
          <Button cancelBtn onClick={toggleEditModal}>
            Cancel
          </Button>
          <Button onClick={onSave}>Save</Button>
        </Actions>
      </Modal>
    </EditModal>
  );
};

export default EditServiceModal;
