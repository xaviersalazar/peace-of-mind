import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import { Error, ServiceCard, SkeletonLoader, StrikethruText } from "../shared";

const Haircuts = ({ categoryId }) => {
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
    <div id="haircuts">
      <div className="text-center w-max my-0 mx-auto">
        <h1 className="text-5xl font-extra-bold mb-2 md:text-6xl">
          <StrikethruText
            text="Haircuts"
            color="#bdc3c7"
            height="h-5 md:h-6"
            position="bottom-1"
          />
        </h1>
        <p className="text-[0.65rem] font-extra-light text-slate-400 text-center md:text-sm">
          Haircuts of all shapes and sizes
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6">
        {servicesByCategory.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            strikeColor="#bdc3c7"
            colsSizing="xl:col-span-2 xl:last:col-span-6"
          />
        ))}
      </div>
    </div>
  );
};

export default Haircuts;
