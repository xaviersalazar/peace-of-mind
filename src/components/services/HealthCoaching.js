import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import { Error, ServiceCard, SkeletonLoader, StrikethruText } from "../shared";

const HealthCoaching = ({ categoryId }) => {
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
    <div id="health-coaching">
      <div className="text-center w-max my-0 mx-auto">
        <h1 className="relative text-5xl font-extra-bold mb-2 md:text-6xl">
          <StrikethruText
            className="relative inline md:hidden"
            text="Health"
            color="#577CFF"
            height="h-4"
            position="top-9"
          />
          <StrikethruText
            className="relative block md:hidden"
            text="Coaching"
            color="#577CFF"
            height="h-4"
            position="bottom-0"
          />
          <StrikethruText
            className="hidden md:inline"
            text="Health Coaching"
            color="#577CFF"
            height="h-5"
            position="bottom-0.5"
          />
        </h1>
        <p className="text-xs font-light text-slate-400 text-center md:text-sm">
          Plans customized just for you
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6">
        {servicesByCategory.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            strikeColor="#577CFF"
            colsSizing="xl:col-span-4 xl:col-start-2"
          />
        ))}
      </div>
    </div>
  );
};

export default HealthCoaching;
