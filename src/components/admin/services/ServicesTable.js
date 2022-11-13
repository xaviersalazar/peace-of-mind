import { useQuery } from "@apollo/client";
import { FiEdit, FiTrash2, FiSearch, FiFilter } from "react-icons/fi";
import { GET_ALL_SERVICES } from "../../../graphql/queries/getAllServices";
import classNames from "classnames";
import { uniqueId } from "lodash";
import Button from "../../shared/Button";
import ServicesTableLoader from "./ServicesTableLoader";
import Error from "../../shared/Error";

const ServicesTable = () => {
  const { loading, data, error } = useQuery(GET_ALL_SERVICES);

  if (error) {
    return (
      <div className="mt-8">
        <Error />
      </div>
    );
  }

  return (
    <>
      <div className="flex mb-8 gap-x-4 md:justify-end">
        <div className="md:flex-1">
          <button className="btn rounded-lg px-4 py-2 text-xs xl:text-sm font-light text-slate-500 capitalize">
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
            <div className="table-cell text-left tracking-wider text-md font-bold px-2 py-4">
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
          data?.servicesCollection?.edges?.map(
            (
              { node: { id, title, category, description, pricesCollection } },
              i
            ) => (
              <div key={id} className="table-row">
                <div
                  className={classNames(
                    "table-cell md:w-[15%] text-xs xl:text-sm font-light text-slate-400 pl-4 pr-2 py-4",
                    i === data.length - 1
                      ? "border-none"
                      : "border-b border-slate-50"
                  )}
                >
                  {title}
                </div>
                <div
                  className={classNames(
                    "table-cell md:w-[15%] text-xs xl:text-sm font-light text-slate-400 px-2 py-4",
                    i === data.length - 1
                      ? "border-none"
                      : "border-b border-slate-50"
                  )}
                >
                  {category.categoryName}
                </div>
                <div
                  className={classNames(
                    "table-cell w-[50%] md:w-[25%] text-xs xl:text-sm font-light text-slate-400 px-2 py-4 border-b border-slate-50",
                    i === data.length - 1
                      ? "border-none"
                      : "border-b border-slate-50"
                  )}
                >
                  <div className="grid auto-cols-fr gap-y-2">
                    {pricesCollection.edges.map(
                      ({ node: { id: priceId, price, unit } }) => (
                        <p key={uniqueId(`${title}-price-${priceId}_`)}>
                          {unit}: ${price}
                        </p>
                      )
                    )}
                  </div>
                </div>
                <div
                  className={classNames(
                    "hidden md:table-cell md:w-[50%] text-xs xl:text-sm font-light text-slate-400 px-2 py-4 border-b border-slate-50",
                    i === data.length - 1
                      ? "border-none"
                      : "border-b border-slate-50"
                  )}
                >
                  {description}
                </div>
                <div
                  className={classNames(
                    "table-cell md:w-[10%] text-xs xl:text-sm font-light text-slate-400 pl-2 pr-4 py-4 border-b border-slate-50",
                    i === data.length - 1
                      ? "border-none"
                      : "border-b border-slate-50"
                  )}
                >
                  <div className="flex gap-x-4 justify-center">
                    <button>
                      <FiEdit />
                    </button>
                    <button>
                      <FiTrash2 className="text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
      <div className="grid grid-cols-3 gap-x-4 text-center mt-4">
        <Button className="md:w-3/4 lg:w-1/2 xl:w-3/12">Prev</Button>
        <p className="text-slate-300 text-sm font-light mt-7 xl:mt-8">
          Page 1 of {Math.floor(data?.servicesCollection?.totalCount / 30)}
        </p>
        <Button className="justify-self-end md:w-3/4 lg:w-1/2 xl:w-3/12">
          Next
        </Button>
      </div>
    </>
  );
};

export default ServicesTable;
