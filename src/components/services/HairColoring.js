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
    <div id="hair-coloring">
      <div className="text-center w-max my-0 mx-auto">
        <h1 className="text-5xl font-extra-bold mb-2 md:text-6xl">
          <StrikethruText
            text="Hair Coloring"
            color="#F1A7F1"
            height="h-5 md:h-6"
            position="bottom-1"
          />
        </h1>
        <p className="text-xs font-light text-slate-400 text-center md:text-sm">
          Professional coloring that'll make your hair stand out
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6">
        {servicesByCategory.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            strikeColor="#F1A7F1"
            colsSizing="md:last:col-span-2 xl:col-span-2"
          />
        ))}
      </div>
    </div>
  );
};

export default HairColoring;
