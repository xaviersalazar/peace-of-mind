import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import { Error, ServiceCard, SkeletonLoader, StrikethruText } from "../shared";

const Waxes = ({ categoryId }) => {
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
    <div id="waxes">
      <div className="text-center w-max my-0 mx-auto">
        <h1 className="text-5xl font-extra-bold mb-2 md:text-6xl">
          <StrikethruText
            text="Waxes"
            color="#FFC371"
            height="h-4 md:h-5"
            position="bottom-1.5"
          />
        </h1>
        <p className="text-[0.65rem] font-light text-slate-400 text-center md:text-sm">
          Full service waxing
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6 xl:col-span-2">
        {servicesByCategory.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            strikeColor="#FFC371"
            colsSizing="xl:col-span-2 xl:last:col-span-3 xl:[&:nth-last-child(2)]:col-span-3"
          />
        ))}
      </div>
    </div>
  );
};

export default Waxes;
