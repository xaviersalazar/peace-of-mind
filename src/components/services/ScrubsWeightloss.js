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

const Facials = ({ categoryId }) => {
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
      <div id="scrubs-weightloss">
        <div className="text-center w-max my-0 mx-auto">
          <h1 className="text-5xl font-extra-bold md:text-6xl">
            <GradientFont deg={-45} colors={["#fd75ae", "#ccc74e"]}>
              Scrubs & <span className="hidden md:inline">Weightloss</span>
            </GradientFont>
          </h1>
          <h1 className="md:hidden text-5xl font-extra-bold md:text-6xl mb-1">
            <GradientFont deg={-45} colors={["#fd75ae", "#ccc74e"]}>
              Weightloss
            </GradientFont>
          </h1>
          <p className="text-[0.65rem] font-extra-light text-slate-400 text-center md:text-sm">
            Our deep scrubs and weight loss treatments
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6 xl:col-span-2">
          {servicesByCategory.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              strikeColor="#ccc74e"
              colsSizing="md:last:col-span-2 xl:col-span-2"
            />
          ))}
        </div>
      </div>
      <Notice />
    </ServiceContainer>
  );
};

export default Facials;
