import { useEffect, useState } from "react";
import { Modal, Checkbox } from "react-daisyui";
import Button from "../../shared/Button";
import styled from "styled-components";
import StrikethruText from "../../shared/StrikethruText";

const { Header, Body, Actions } = Modal;

const EditModal = styled.div`
  & .modal {
    top: -6rem;
    background: rgba(248, 250, 252, 0.8);
  }
`;

const EditServiceModal = ({ isEditModalOpen, toggleEditModal, service }) => {
  const [editedService, setEditedService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setEditedService(service);
    setLoading(false);
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

  if (loading) return <h1>Loading</h1>;

  return (
    <EditModal>
      <Modal open={isEditModalOpen}>
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
                  className="textarea w-full h-32 font-light rounded-lg resize-none"
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
                      <div>
                        <label className="label">
                          <span className="text-sm label-text font-light">
                            Unit
                          </span>
                        </label>
                        <input
                          name="unit"
                          type="text"
                          className="input text-sm w-full h-10 font-light rounded-lg"
                          value={unit || "N/A"}
                          onChange={onChange}
                          data-priceid={id}
                        />
                      </div>
                      <div>
                        <label className="label">
                          <span className="text-sm label-text font-light">
                            Price
                          </span>
                        </label>
                        <input
                          name="price"
                          type="text"
                          className="input text-sm w-full h-10 font-light rounded-lg"
                          value={price}
                          onChange={onChange}
                          data-priceid={id}
                        />
                      </div>
                      <div className="text-center">
                        <label className="label">
                          <span className="label-text font-light">
                            Upcharge?
                          </span>
                        </label>
                        <Checkbox
                          name="hasUpcharge"
                          className="relative top-[0.5rem]"
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
