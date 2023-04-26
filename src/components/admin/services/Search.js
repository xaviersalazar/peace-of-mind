import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { SEARCH } from "../../../graphql/queries";
import { FiSearch } from "react-icons/fi";

const Search = () => {
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

    console.log(data);
  }, [searchValue]);

  const isValidData = data && data?.search.length > 0;
  const isValidInput = searchValue && searchValue !== "";

  return (
    <div className="relative flex-1 md:flex-2">
      <FiSearch className="absolute text-slate-300 top-4 left-4 z-50" />
      <input
        name="search"
        type="text"
        placeholder="Search"
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
        <div className="absolute top-10 left-0 w-full bg-white rounded-br-lg rounded-bl-lg px-4 pt-8 pb-4 z-20 shadow-2xl">
          {data?.search?.map((result) => (
            <div key={result.id} className="py-2">
              <p className="text-slate-300 text-xs font-medium">
                {result.category.categoryName}
              </p>
              <h1 className="text-xs font-normal">{result.title}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
