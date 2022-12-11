import { useEffect, useState } from "react";
import { Modal, Checkbox } from "react-daisyui";
import {
  FiDollarSign,
  FiEdit2,
  FiXCircle,
  FiCheckCircle,
  FiAlertCircle,
  FiFolder,
  FiMessageSquare,
} from "react-icons/fi";
import { useMutation } from "@apollo/client";
import { AnimatePresence, motion } from "framer-motion";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { Button, Spinner, StrikethruText } from "../../shared";
import { clean } from "../../utils/clean";
import { EDIT_SERVICE } from "../../../graphql/mutations";
import { GET_ALL_SERVICES_PAGINATED } from "../../../graphql/queries";
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
          <div className="text-sm font-light">
            <span className="block">Successfully saved</span>
            <span className="block">{title}</span>
          </div>
        ),
        type: "success",
      });
    },
  });
  const {
    register,
    control,
    getValues,
    setValue,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      id: "",
      title: "",
      description: "",
      prices: [],
      category: "",
    },
  });
  const { fields: pricesFields } = useFieldArray({
    control,
    name: "prices",
  });

  const [updateMsg, setUpdateMsg] = useState(null);

  useEffect(() => {
    reset(service);
  }, [service]);

  useEffect(() => {
    if (updateMsg) {
      setTimeout(() => {
        setUpdateMsg(null);
      }, 5000);
    }
  }, [updateMsg]);

  const handleRangePriceChange = (e, index) => {
    const { name, value } = e.target;
    const currPriceRangeVal = getValues(`prices.${index}.price`);
    const from = currPriceRangeVal.split(",")[0];
    const to = currPriceRangeVal.split(",")[1];

    if (name === "price-range-from")
      setValue(`prices.${index}.price`, [value, to].join(",").trim());

    if (name === "price-range-to")
      setValue(`prices.${index}.price`, [from, value].join(",").trim());
  };

  const onSave = async () => {
    const service = clean(getValues(), keysToOmitForMutation);

    try {
      await editService({ variables: { service } });
    } catch (e) {
      setUpdateMsg({
        msg: (
          <div className="text-sm font-light">
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
        className="overflow-x-hidden overflow-y-scroll md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl"
        open={isEditModalOpen}
      >
        <form id={`${service?.id}-edit-form`} onSubmit={handleSubmit(onSave)}>
          <Header className="text-2xl font-bold text-center mb-4">
            <StrikethruText text={service?.title} color="#10FFCB" />
          </Header>
          <Body className="bg-slate-50 px-4 py-4 pb-2 rounded-2xl">
            <div className="form-control w-full">
              <div className="mb-2">
                <label className="label">
                  <span className="label-text font-bold">Category</span>
                </label>
                {loading ? (
                  <div className="bg-white w-full h-10 rounded-lg animate-pulse" />
                ) : (
                  <div className="relative">
                    <input
                      name="categoryName"
                      type="text"
                      className="input text-sm w-full h-10 font-light rounded-lg disabled:bg-slate-200 disabled:outline-none disabled:border-none"
                      value={service?.category.categoryName}
                      disabled
                    />
                    <FiFolder className="absolute right-2 bottom-[0.8rem] text-xs text-slate-300" />
                  </div>
                )}
              </div>
              <div className="mb-2">
                <label className="label">
                  <span className="label-text font-bold">Description</span>
                </label>
                {loading ? (
                  <div className="bg-white w-full h-32 rounded-lg animate-pulse" />
                ) : (
                  <div className="relative">
                    <textarea
                      name="description"
                      className="textarea text-sm leading-6 w-full h-32 font-light text-slate-500 rounded-lg resize-none focus:outline-primary"
                      {...register("description", {
                        required: false,
                      })}
                    />
                    <FiMessageSquare className="absolute right-2 top-3 text-xs text-slate-300" />
                  </div>
                )}
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-bold">Price(s)</span>
                </label>
                {pricesFields.length > 0 &&
                  pricesFields.map((field, index) => (
                    <div
                      key={field.id}
                      className="grid grid-cols-4 grid-rows-2 md:grid-cols-5 md:grid-rows-1 gap-x-2 bg-white rounded-lg px-4 pt-2 pb-4 mx-auto my-4"
                    >
                      <InputContainer className="relative col-span-4 md:col-span-2">
                        <label className="label">
                          <span className="text-sm label-text font-regular">
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
                              className="input bg-slate-50 text-sm w-full h-10 font-light text-slate-500 rounded-lg focus:outline-primary"
                              {...register(`prices.${index}.unit`, {
                                required: false,
                              })}
                            />
                            <FiEdit2 className="absolute right-2 bottom-[0.8rem] text-xs text-slate-300" />
                          </>
                        )}
                      </InputContainer>
                      <InputContainer className="relative col-span-3 md:col-span-2">
                        {pricesFields[index].unit === "Range" ? (
                          <div className="grid grid-cols-2 gap-x-2 w-full">
                            <label className="label pb-2">
                              <span className="text-sm label-text font-regular">
                                From Price
                              </span>
                            </label>
                            <label className="label pb-2">
                              <span className="text-sm label-text font-regular">
                                To Price
                              </span>
                            </label>
                          </div>
                        ) : (
                          <label className="label">
                            <span className="text-sm label-text font-regular">
                              Price
                            </span>
                          </label>
                        )}
                        {loading ? (
                          <div className="bg-white w-full h-10 rounded-lg animate-pulse" />
                        ) : (
                          <>
                            {pricesFields[index].unit === "Range" ? (
                              <Controller
                                control={control}
                                name={`prices.${index}.price`}
                                render={({ field: { name, value } }) => (
                                  <div className="grid grid-cols-2 gap-x-2">
                                    <div className="relative">
                                      <NumericFormat
                                        id="price-range-from"
                                        name="price-range-from"
                                        className="input bg-slate-50 text-sm w-full h-10 font-light text-slate-500 rounded-lg focus:outline-primary"
                                        allowLeadingZeros={false}
                                        decimalScale={2}
                                        fixedDecimalScale
                                        value={value.split(",")[0]}
                                        onChange={(e) =>
                                          handleRangePriceChange(e, index)
                                        }
                                      />
                                      <FiDollarSign className="absolute right-2 bottom-[0.82rem] text-xs text-slate-300" />
                                    </div>
                                    <div className="relative">
                                      <NumericFormat
                                        id="price-range-to"
                                        name="price-range-to"
                                        className="input bg-slate-50 text-sm w-full h-10 font-light text-slate-500 rounded-lg focus:outline-primary"
                                        allowLeadingZeros={false}
                                        decimalScale={2}
                                        fixedDecimalScale
                                        value={value.split(",")[1]}
                                        onChange={(e) =>
                                          handleRangePriceChange(e, index)
                                        }
                                      />
                                      <FiDollarSign className="absolute right-2 bottom-[0.82rem] text-xs text-slate-300" />
                                    </div>
                                    <input
                                      type="hidden"
                                      name={name}
                                      value={value}
                                    />
                                  </div>
                                )}
                              />
                            ) : (
                              <Controller
                                control={control}
                                name={`prices.${index}.price`}
                                render={({
                                  field: { onChange, name, value },
                                }) => (
                                  <div className="relative">
                                    <NumericFormat
                                      id="price"
                                      className="input bg-slate-50 text-sm w-full h-10 font-light text-slate-500 rounded-lg focus:outline-primary"
                                      allowLeadingZeros={false}
                                      thousandSeparator=","
                                      decimalScale={2}
                                      fixedDecimalScale
                                      name={name}
                                      value={value}
                                      onChange={onChange}
                                    />
                                    <FiDollarSign className="absolute right-2 bottom-[0.82rem] text-xs text-slate-300" />
                                  </div>
                                )}
                              />
                            )}
                          </>
                        )}
                      </InputContainer>
                      <div className="col-span-1 text-center">
                        <label className="label justify-center">
                          <span className="label-text font-regular">
                            Upcharge?
                          </span>
                        </label>
                        <Checkbox
                          name="hasUpcharge"
                          color="primary"
                          className="relative top-[0.5rem] focus:outline-primary"
                          {...register(`prices.${index}.hasUpcharge`, {
                            required: false,
                          })}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </Body>
          <Actions className="mt-0 gap-x-2">
            <Button type="button" btnType="cancel" onClick={toggleEditModal}>
              Close
            </Button>
            <Button type="submit" disabled={!isValid || loading}>
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
                  {updateMsg.msg}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </Modal>
    </EditModal>
  );
};

export default EditServiceModal;
