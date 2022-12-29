import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Checkbox } from "react-daisyui";
import {
  FiDollarSign,
  FiXCircle,
  FiCheckCircle,
  FiAlertCircle,
  FiFolder,
  FiMessageSquare,
} from "react-icons/fi";
import { useMutation, useQuery } from "@apollo/client";
import { AnimatePresence, motion } from "framer-motion";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import ReactSelect from "react-select";
import { Button, Spinner, StrikethruText } from "../../shared";
import { clean } from "../../utils/clean";
import { EDIT_SERVICE } from "../../../graphql/mutations";
import {
  GET_ALL_SERVICES_PAGINATED,
  GET_UNITS,
} from "../../../graphql/queries";
import styled from "styled-components";

const keysToOmitForMutation = ["__typename", "title", "category"];

const errorTypes = {
  success: <FiCheckCircle className="text-sm md:text-lg" />,
  info: <FiAlertCircle className="text-sm md:text-lg" />,
  error: <FiXCircle className="text-sm md:text-lg" />,
};

const InputContainer = styled.div`
  & .input:focus ~ svg {
    color: #10ffcb;
  }
`;

const Select = styled(ReactSelect)`
  & .react-select__control {
    background: #f8fafc;
    border: none;
    border-radius: 0.5rem;
    height: 3rem;
    box-shadow: none;
  }

  & .react-select__control--is-focused {
    border-color: transparent !important;
    outline: 2px solid #10ffcb !important;
    outline-offset: 2px;
  }

  & .react-select__control:hover {
    border-color: transparent !important;
  }

  & .react-select__menu {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 0.5rem;
  }
`;

const EditService = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const service = state?.service;

  const { loading: loadingUnits, data: unitsData } = useQuery(GET_UNITS);

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
          <div className="text-sm font-bold md:text-base">
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
  const { fields } = useFieldArray({
    control,
    name: "prices",
  });
  const fieldsValues = useWatch({
    name: "prices",
    control,
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
          <div className="text-sm font-bold md:text-base">
            <span className="block">Oops! Something happened</span>
            <span className="block">Please try again</span>
          </div>
        ),
        type: "error",
      });
    }
  };

  return (
    <form
      id={`${service?.id}-edit-form`}
      className="mt-4 mb-8"
      onSubmit={handleSubmit(onSave)}
    >
      <AnimatePresence>
        {updateMsg && (
          <motion.div
            className={`alert alert-${updateMsg.type} opacity-[90%] shadow-lg fixed left-32 top-6 z-[100] w-full items-start md:left-[18rem] lg:left-[24rem] xl:left-[30rem] 2xl:left-[48rem]`}
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            exit={{ x: 1000 }}
          >
            <div>
              {errorTypes[updateMsg.type]}
              {updateMsg.msg}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <h1 className="text-2xl font-extra-bold text-center mb-4 md:text-3xl lg:text-4xl xl:text-5xl">
        <StrikethruText
          text={service?.title}
          color="#10FFCB"
          height="h-2 md:h-3 xl:h-4"
          position="bottom-0.5 lg:bottom-1"
        />
      </h1>
      <div className="bg-slate-50 px-4 py-4 pb-2 rounded-2xl">
        <div className="form-control w-full">
          <div className="mb-2">
            <label className="label">
              <span className="label-text font-bold">Category</span>
            </label>
            {loading ? (
              <div className="bg-white w-full h-12 rounded-lg animate-pulse" />
            ) : (
              <div className="relative">
                <input
                  name="categoryName"
                  type="text"
                  className="input text-sm w-full h-12 font-light rounded-lg disabled:bg-slate-200 disabled:outline-none disabled:border-none"
                  value={service?.category?.categoryName}
                  disabled
                />
                <FiFolder className="absolute right-2 bottom-4 text-xs text-slate-300" />
              </div>
            )}
          </div>
          <div className="mt-2">
            <label className="label">
              <span className="label-text font-bold">Price(s)</span>
            </label>
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="grid grid-cols-4 grid-rows-3 md:grid-cols-5 md:grid-rows-1 gap-x-2 bg-white rounded-lg px-4 pt-2 pb-4 mx-auto my-4 mt-0"
              >
                <InputContainer className="relative col-span-4 mb-4 md:mb-0 md:col-span-2">
                  <label className="label">
                    <span className="label-text text-xs md:text-sm font-regular">
                      Unit
                    </span>
                  </label>
                  {loading || loadingUnits ? (
                    <div className="bg-white w-full h-12 rounded-lg animate-pulse" />
                  ) : (
                    <Controller
                      name={`prices.${index}.unit`}
                      control={control}
                      render={({ field: { onChange, name, value } }) => (
                        <Select
                          name={name}
                          value={value?.name}
                          placeholder={value?.name}
                          classNamePrefix="react-select"
                          className="text-sm font-light text-slate-500"
                          isClearable
                          theme={(theme) => ({
                            ...theme,
                            colors: {
                              ...theme.colors,
                              primary: "#10FFCB",
                              primary25: "#10FFCB",
                            },
                          })}
                          options={unitsData?.units || []}
                          getOptionLabel={(option) => `${option.name}`}
                          getOptionValue={(option) => `${option.id}`}
                          onChange={onChange}
                        />
                      )}
                    />
                  )}
                </InputContainer>
                <InputContainer className="relative col-span-4 md:col-span-2">
                  {fieldsValues[index].unit?.name === "Range" ? (
                    <div className="grid grid-cols-2 gap-x-2 w-full">
                      <label className="label pb-2">
                        <span className="label-text text-xs md:text-sm font-regular">
                          From Price
                        </span>
                      </label>
                      <label className="label pb-2">
                        <span className="label-text text-xs md:text-sm font-regular">
                          To Price
                        </span>
                      </label>
                    </div>
                  ) : (
                    <label className="label">
                      <span className="label-text text-xs md:text-sm font-regular">
                        Price
                      </span>
                    </label>
                  )}
                  {loading ? (
                    <div className="bg-white w-full h-12 rounded-lg animate-pulse" />
                  ) : (
                    <>
                      {fieldsValues[index].unit?.name === "Range" ? (
                        <Controller
                          control={control}
                          name={`prices.${index}.price`}
                          render={({ field: { name, value } }) => (
                            <div className="grid grid-cols-2 gap-x-2">
                              <div className="relative">
                                <NumericFormat
                                  id="price-range-from"
                                  name="price-range-from"
                                  className="input bg-slate-50 text-sm w-full h-12 font-light text-slate-500 rounded-lg focus:outline-primary"
                                  allowLeadingZeros={false}
                                  decimalScale={2}
                                  fixedDecimalScale
                                  value={value.split(",")[0]}
                                  onChange={(e) =>
                                    handleRangePriceChange(e, index)
                                  }
                                />
                                <FiDollarSign className="absolute right-2 bottom-[1.1rem] text-xs text-slate-300" />
                              </div>
                              <div className="relative">
                                <NumericFormat
                                  id="price-range-to"
                                  name="price-range-to"
                                  className="input bg-slate-50 text-sm w-full h-12 font-light text-slate-500 rounded-lg focus:outline-primary"
                                  allowLeadingZeros={false}
                                  decimalScale={2}
                                  fixedDecimalScale
                                  value={value.split(",")[1]}
                                  onChange={(e) =>
                                    handleRangePriceChange(e, index)
                                  }
                                />
                                <FiDollarSign className="absolute right-2 bottom-[1.1rem] text-xs text-slate-300" />
                              </div>
                              <input type="hidden" name={name} value={value} />
                            </div>
                          )}
                        />
                      ) : (
                        <Controller
                          control={control}
                          name={`prices.${index}.price`}
                          render={({ field: { onChange, name, value } }) => (
                            <div className="relative">
                              <NumericFormat
                                id="price"
                                className="input bg-slate-50 text-sm w-full h-12 font-light text-slate-500 rounded-lg focus:outline-primary"
                                allowLeadingZeros={false}
                                thousandSeparator=","
                                decimalScale={2}
                                fixedDecimalScale
                                name={name}
                                value={value}
                                onChange={onChange}
                              />
                              <FiDollarSign className="absolute right-2 bottom-[1.1rem] text-xs text-slate-300" />
                            </div>
                          )}
                        />
                      )}
                    </>
                  )}
                </InputContainer>
                <div className="col-span-4 md:col-span-1 text-center">
                  <label className="label justify-center">
                    <span className="label-text text-xs md:text-sm font-regular">
                      Upcharge?
                    </span>
                  </label>
                  <Checkbox
                    name="hasUpcharge"
                    color="primary"
                    className="relative top-[0.65rem] focus:outline-primary"
                    {...register(`prices.${index}.hasUpcharge`, {
                      required: false,
                    })}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-2">
          <label className="label">
            <span className="label-text font-bold">Description</span>
          </label>
          {loading ? (
            <div className="bg-white w-full h-48 rounded-lg animate-pulse" />
          ) : (
            <div className="relative">
              <textarea
                name="description"
                className="textarea text-sm leading-6 h-48 w-full font-light text-slate-500 rounded-lg resize-none focus:outline-primary"
                {...register("description", {
                  required: false,
                })}
              />
              <FiMessageSquare className="absolute right-2 top-3 text-xs text-slate-300" />
            </div>
          )}
        </div>
      </div>
      <div className="mt-0 gap-x-2 text-right">
        <Button
          type="button"
          btnType="cancel"
          className="mr-4"
          onClick={() => navigate("/admin/services")}
        >
          Cancel
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
      </div>
    </form>
  );
};

export default EditService;
