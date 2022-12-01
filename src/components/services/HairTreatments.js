import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import { Error, ServiceCard, SkeletonLoader, StrikethruText } from "../shared";

const HairTreatments = ({ categoryId }) => {
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
    <div id="hair-treatments">
      <div className="text-center w-max my-0 mx-auto">
        <h1 className="relative text-5xl font-extra-bold mb-2 md:text-6xl">
          <StrikethruText
            className="relative inline md:hidden"
            text="Hair"
            color="#9EB7E5"
            height="h-4"
            position="top-8"
          />
          <StrikethruText
            className="block md:hidden"
            text="Treatments"
            color="#9EB7E5"
            height="h-4"
            position="bottom-0.5"
          />
          <StrikethruText
            className="hidden md:inline"
            text="Hair Treatments"
            color="#9EB7E5"
            height="h-5"
            position="bottom-0.5"
          />
        </h1>
        <p className="text-[0.65rem] font-extra-light text-slate-400 text-center md:text-sm">
          Make your hair shine with our highlights
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6">
        {servicesByCategory.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            strikeColor="#9EB7E5"
            colsSizing="md:last:col-span-2 xl:col-span-2 xl:last:col-span-4 xl:last:col-start-2"
          />
        ))}
      </div>
    </div>
  );
};

export default HairTreatments;
