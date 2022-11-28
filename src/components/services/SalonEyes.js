import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import {
  Error,
  GradientFont,
  Notice,
  ServiceContainer,
  ServiceCard,
  SkeletonLoader,
} from "../shared";

const SalonEyes = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_SERVICES_BY_CATEGORY, {
    variables: {
      categoryId,
    },
  });

  if (loading) {
    return (
      <ServiceContainer>
        <SkeletonLoader />
      </ServiceContainer>
    );
  }

  if (error) {
    return (
      <ServiceContainer>
        <Error />
      </ServiceContainer>
    );
  }

  const { servicesByCategory } = data;

  return (
    <ServiceContainer>
      <div id="add-ons">
        <div className="text-center w-max my-0 mx-auto">
          <h1 className="text-5xl font-extra-bold mb-2 md:text-6xl">
            <GradientFont deg={-45} colors={["#6A82FB", "#ee9ca7"]}>
              Eyes
            </GradientFont>
          </h1>
          <p className="text-[0.65rem] font-extra-light text-slate-400 text-center md:text-sm">
            Makeup application and services for the eyes
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6">
          {servicesByCategory.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              strikeColor="#eaafc8"
            />
          ))}
        </div>
      </div>
      <Notice />
    </ServiceContainer>
  );
};

export default SalonEyes;
