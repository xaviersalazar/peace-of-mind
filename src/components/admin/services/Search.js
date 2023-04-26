import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { SEARCH } from "../../../graphql/queries";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const navigate = useNavigate();

  const [search, { data, loading }] = useLazyQuery(SEARCH);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue && searchValue !== "") {
      search({
        variables: {
          searchInput: {
            searchValue,
          },
        },
      });
    }
  }, [searchValue]);

  const isValidData = data && data?.search.length > 0;
  const isValidInput = searchValue && searchValue !== "";

  return (
    <div className="relative flex-1 md:flex-2">
      <FiSearch className="absolute text-slate-300 top-4 left-4 z-50" />
      <input
        name="search"
        type="text"
        placeholder="Search Services..."
        className="bg-slate-50 input w-full h-12 font-light rounded-lg indent-6 z-30 relative"
        onChange={(e) => setSearchValue(e?.target?.value)}
      />
      {loading && (
        <div
          className="absolute bottom-4 right-4 animate-spin w-4 h-4 border-[2px] border-current border-t-transparent text-primary rounded-full z-50"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {isValidData && isValidInput && (
        <div className="absolute top-10 left-0 w-full bg-white rounded-br-lg rounded-bl-lg pt-4 z-20 shadow-2xl">
          {data?.search?.map((service, i) => (
            <div
              key={service.id}
              className={`p-4 cursor-pointer border-b-2 border-slate-100 hover:bg-slate-50 ${
                i === data?.search?.length - 1
                  ? "rounded-br-lg rounded-bl-lg"
                  : ""
              }`}
              onClick={() => {
                navigate(`/admin/services/${service.id}`, {
                  state: { service },
                });
                setSearchValue("");
              }}
            >
              <p className="text-slate-300 text-xs font-medium">
                {service.category.categoryName}
              </p>
              <h1 className="text-xs font-normal">{service.title}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
