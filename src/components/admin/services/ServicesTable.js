import { useState } from "react";
import { useQuery } from "@apollo/client";
import { FiEdit, FiTrash2, FiSearch, FiFilter } from "react-icons/fi";
import { GET_ALL_SERVICES_PAGINATED } from "../../../graphql/queries/getAllServicesPaginated";
import { isEmpty, uniqueId } from "lodash";
import EditServiceModal from "./EditServiceModal";
import { Button, Error } from "../../shared";
import ServicesTableLoader from "./ServicesTableLoader";
import classNames from "classnames";
import DeleteServiceModal from "./DeleteServiceModal";

const PAGE_LIMIT = 30;

const ServicesTable = () => {
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(0);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

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
      if (unit === "Range") {
        const prices = price.split(",");

        return `$${prices[0].trim()} - $${prices[1].trim()}`;
      }

      return `${unit}: $${price}`;
    }

    return `$${price}`;
  };

  const toggleEditModal = () => setIsEditModalOpen(!isEditModalOpen);

  const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);

  return (
    <>
      <div className="flex mb-8 gap-x-4 md:justify-end">
        <div className="md:flex-1">
          <button className="btn btn-primary text-slate-500 rounded-lg px-4 py-2 text-xs xl:text-sm font-light capitalize">
            <FiFilter className="inline text-xs xl:text-sm mr-2" /> Filter
          </button>
        </div>
        <div className="relative flex-1 md:flex-2">
          <FiSearch className="absolute text-slate-300 top-4 left-4" />
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="bg-slate-50 input w-full h-12 font-light rounded-lg indent-6"
          />
        </div>
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
                  {description}
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
                        setSelectedService({
                          id,
                          title,
                          description,
                          prices,
                          category,
                        });
                        toggleEditModal();
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
      <EditServiceModal
        isEditModalOpen={isEditModalOpen}
        toggleEditModal={toggleEditModal}
        service={selectedService}
      />
      <DeleteServiceModal
        isDeleteModalOpen={isDeleteModalOpen}
        toggleDeleteModal={toggleDeleteModal}
        service={selectedService}
      />
    </>
  );
};

export default ServicesTable;
