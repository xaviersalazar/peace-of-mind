import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import { Error, ServiceCard, SkeletonLoader, StrikethruText } from "../shared";

const HairColoring = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_SERVICES_BY_CATEGORY, {
    variables: {
      categoryId,
    },
  });

  if (loading) {
    return <SkeletonLoader />;
  }

  if (error) {
    return <Error />;
  }

  const { servicesByCategory } = data;

  return (
    <div id="hair-extensions">
      <div className="text-center w-max my-0 mx-auto">
        <h1 className="relative text-5xl font-extra-bold mb-2 md:text-6xl">
          <StrikethruText
            className="relative inline md:hidden"
            text="Hair"
            color="#C6FFDD"
            height="h-4"
            position="top-8"
          />
          <StrikethruText
            className="block md:hidden"
            text="Extensions"
            color="#C6FFDD"
            height="h-4"
            position="bottom-0.5"
          />
          <StrikethruText
            className="hidden md:inline"
            text="Hair Extensions"
            color="#C6FFDD"
            height="h-5"
            position="bottom-0.5"
          />
        </h1>
        <p className="text-xs font-light text-slate-400 text-center md:text-sm">
          High quality extensions installation
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-4">
        {servicesByCategory.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            strikeColor="#C6FFDD"
            colsSizing="md:col-span-2 xl:col-span-2 xl:col-start-2"
          />
        ))}
      </div>
    </div>
  );
};

export default HairColoring;
