import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { AnimatePresence, motion } from "framer-motion";
import { isEmpty, uniqueId } from "lodash";
import { FiEdit, FiTrash2, FiFilter, FiCheckCircle } from "react-icons/fi";
import { Button, Error, StrikethruText } from "../../shared";
import { GET_ALL_SERVICES_PAGINATED } from "../../../graphql/queries";
import ServicesTableLoader from "./ServicesTableLoader";
import DeleteServiceModal from "./DeleteServiceModal";
import Search from "./Search";
import classNames from "classnames";

const PAGE_LIMIT = 30;

const ServicesTable = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(0);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [deleteMsg, setDeleteMsg] = useState(null);

  useEffect(() => {
    if (deleteMsg) {
      setTimeout(() => {
        setDeleteMsg(null);
      }, 5000);
    }
  }, [deleteMsg]);

  const { data, error, refetch } = useQuery(GET_ALL_SERVICES_PAGINATED, {
    onCompleted: () => setLoading(false),
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
    variables: {
      skip: 0,
      take: PAGE_LIMIT,
    },
  });

  if (error) {
    return (
      <div className="mt-8">
        <Error />
      </div>
    );
  }

  const getPrice = (price, unit) => {
    if (unit) {
      const { name } = unit;

      if (name === "Range") {
        const prices = price.split(",");

        return `$${prices[0].trim()} - $${prices[1].trim()}`;
      }

      return `${name}: $${price}`;
    }

    return `$${price}`;
  };

  const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);

  return (
    <>
      <AnimatePresence>
        {deleteMsg && (
          <motion.div
            className={`alert alert-success shadow-lg absolute left-44 top-6 z-[100] w-full items-start md:left-[30rem] lg:left-[42rem] xl:left-[64rem] 2xl:left-[84rem]`}
            initial={{ x: 800 }}
            animate={{ x: 0 }}
            exit={{ x: 800 }}
          >
            <div>
              <FiCheckCircle />
              {deleteMsg}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-extra-bold text-center mb-0 md:text-3xl lg:text-4xl xl:text-5xl">
          <StrikethruText
            text="Services"
            color="#10FFCB"
            height="h-2 md:h-3 xl:h-4"
            position="bottom-0.5 lg:bottom-1"
          />
        </h1>
      </div>
      <div className="flex mb-8">
        <Search />
      </div>
      <div className="table w-full text-sm text-left text-gray-500 rounded-2xl">
        <div className="table-header-group text-[0.75rem] text-slate-300 uppercase bg-slate-50 rounded-tl-lg rounded-tr-2xl">
          <div className="table-row rounded-2xl">
            <div className="table-cell text-left tracking-wider text-md font-bold pl-4 pr-2 py-4 rounded-tl-2xl">
              Title
            </div>
            <div className="hidden md:table-cell text-left tracking-wider text-md font-bold px-2 py-4">
              Service
            </div>
            <div className="table-cell text-left tracking-wider text-md font-bold px-2 py-4">
              Prices
            </div>
            <div className="hidden md:table-cell text-left tracking-wider text-md font-bold px-2 py-4">
              Description
            </div>
            <div className="table-cell text-center tracking-wider text-md font-bold pl-2 pr-4 py-4 rounded-tr-2xl">
              Actions
            </div>
          </div>
        </div>
        {loading ? (
          <ServicesTableLoader />
        ) : (
          data?.servicesPaginated.services.map(
            ({ id, title, description, prices, category }, i) => (
              <div key={id} className="table-row">
                <div
                  className={classNames(
                    "table-cell md:w-[15%] text-xs xl:text-sm font-light text-slate-400 pl-4 pr-2 py-4",
                    i % 2 === 0 ? "bg-white" : "bg-slate-50",
                    i === data?.servicesPaginated.services.length - 1
                      ? "rounded-bl-2xl"
                      : "rounded-none"
                  )}
                >
                  {title}
                </div>
                <div
                  className={classNames(
                    "hidden md:table-cell md:w-[15%] text-xs xl:text-sm font-light text-slate-400 px-2 py-4",
                    i % 2 === 0 ? "bg-white" : "bg-slate-50"
                  )}
                >
                  {category.categoryName}
                </div>
                <div
                  className={classNames(
                    "table-cell w-[50%] md:w-[25%] text-xs xl:text-sm font-light text-slate-400 px-2 py-4 border-b border-slate-50",
                    i % 2 === 0 ? "bg-white" : "bg-slate-50"
                  )}
                >
                  <div className="grid auto-cols-fr gap-y-2">
                    {isEmpty(prices)
                      ? "N/A"
                      : prices.map(({ id: priceId, price, unit }) => (
                          <p key={uniqueId(`${title}-price-${priceId}_`)}>
                            {getPrice(price, unit)}
                          </p>
                        ))}
                  </div>
                </div>
                <div
                  className={classNames(
                    "hidden md:table-cell md:w-[50%] text-xs xl:text-sm font-light text-slate-400 px-2 py-4 border-b border-slate-50",
                    i % 2 === 0 ? "bg-white" : "bg-slate-50"
                  )}
                >
                  {isEmpty(description) ? "N/A" : description}
                </div>
                <div
                  className={classNames(
                    "table-cell md:w-[10%] text-xs xl:text-sm font-light text-slate-400 pl-2 pr-4 py-4 border-b border-slate-50",
                    i % 2 === 0 ? "bg-white" : "bg-slate-50",
                    i === data?.servicesPaginated.services.length - 1
                      ? "rounded-br-2xl"
                      : "rounded-none"
                  )}
                >
                  <div className="flex gap-x-4 justify-center">
                    <button
                      onClick={() => {
                        const service = {
                          id,
                          title,
                          description,
                          prices,
                          category,
                        };

                        setSelectedService(service);
                        navigate(`/admin/services/${id}`, {
                          state: { service },
                        });
                      }}
                    >
                      <FiEdit />
                    </button>
                    <button>
                      <FiTrash2
                        className="text-red-400"
                        onClick={() => {
                          setSelectedService({
                            id,
                            title,
                            description,
                            prices,
                            category,
                          });
                          toggleDeleteModal();
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
      <div className="grid grid-cols-3 gap-x-4 text-center ">
        <Button
          className="md:w-3/4 lg:w-1/2 xl:w-3/12"
          disabled={pageNum === 0}
          onClick={(e) => {
            let prevPage = pageNum - 1;

            refetch({ skip: prevPage * PAGE_LIMIT });
            setPageNum(prevPage);
            e.currentTarget.blur();
          }}
        >
          Prev
        </Button>
        <p className="text-slate-300 text-sm font-light mt-7 xl:mt-8">
          Page {data?.servicesPaginated.pageNumber} of{" "}
          {data?.servicesPaginated.totalPages}
        </p>
        <Button
          className="justify-self-end md:w-3/4 lg:w-1/2 xl:w-3/12"
          disabled={pageNum + 1 === data?.servicesPaginated.totalPages}
          onClick={(e) => {
            let nextPage = pageNum + 1;

            refetch({ skip: nextPage * PAGE_LIMIT });
            setPageNum(nextPage);
            e.currentTarget.blur();
          }}
        >
          Next
        </Button>
      </div>
      <DeleteServiceModal
        isDeleteModalOpen={isDeleteModalOpen}
        toggleDeleteModal={toggleDeleteModal}
        service={selectedService}
        setDeleteMsg={setDeleteMsg}
      />
    </>
  );
};

export default ServicesTable;
