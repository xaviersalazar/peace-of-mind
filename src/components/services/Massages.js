import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import {
  Error,
  Notice,
  ServiceCard,
  SkeletonLoader,
  StrikethruText,
} from "../shared";

const Massages = ({ categoryId }) => {
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
    <div id="massages">
      <div className="text-center w-max my-0 mx-auto">
        <h1 className="text-5xl font-extra-bold mb-2 md:text-6xl">
          <StrikethruText
            text="Massages"
            color="#fcfc9f"
            height="h-4 md:h-5"
            position="bottom-1.5"
          />
        </h1>
        <p className="text-[0.65rem] font-extra-light text-slate-400 text-center md:text-sm">
          You'll leave completely rejuvenated
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6">
        {servicesByCategory.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            strikeColor="#fcfc9f"
          />
        ))}
      </div>
      <Notice />
    </div>
  );
};

export default Massages;
