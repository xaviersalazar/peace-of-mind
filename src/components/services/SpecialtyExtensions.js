import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import { Error, ServiceCard, SkeletonLoader, StrikethruText } from "../shared";

const SpecialtyExtensions = ({ categoryId }) => {
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
    <div id="deluxe-couples">
      <div className="text-center w-max my-0 mx-auto">
        <h1 className="relative text-5xl font-extra-bold mb-2 md:text-6xl">
          <StrikethruText
            className="inline lg:hidden"
            text="Specialty w/"
            color="#9B9DD3"
            height="h-4 md:h-5"
            position="top-8 md:top-10"
          />
          <StrikethruText
            className="block lg:hidden"
            text="Extensions"
            color="#9B9DD3"
            height="h-4 md:h-5"
            position="bottom-0.5"
          />
          <StrikethruText
            className="hidden lg:inline"
            text="Specialty w/ Extensions"
            color="#9B9DD3"
            height="h-5"
            position="bottom-0.5"
          />
        </h1>
        <p className="text-xs font-light text-slate-400 text-center md:text-sm">
          Stimulating massages for the couples
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6">
        {servicesByCategory.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            strikeColor="#9B9DD3"
            colsSizing="md:last:col-span-2 xl:col-span-2"
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialtyExtensions;
