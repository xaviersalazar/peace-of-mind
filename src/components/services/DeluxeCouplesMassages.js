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

const DeluxeCouplesMassages = ({ categoryId }) => {
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
      <div id="deluxe-couples">
        <div className="text-center w-max my-0 mx-auto">
          <h1 className="text-5xl font-extra-bold md:text-6xl">
            <GradientFont deg={-45} colors={["#92FE9D", "#00C9FF"]}>
              Deluxe & <span className="hidden md:inline">Couples</span>
            </GradientFont>
          </h1>
          <h1 className="md:hidden text-5xl font-extra-bold md:text-6xl mb-1">
            <GradientFont deg={-45} colors={["#92FE9D", "#00C9FF"]}>
              Couples
            </GradientFont>
          </h1>
          <p className="text-[0.65rem] font-extra-light text-slate-400 text-center md:text-sm">
            Stimulating massages for the couples
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6 xl:col-span-2">
          {servicesByCategory.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              strikeColor="#00C9FF"
              colsSizing="md:last:col-span-2 xl:col-span-2 xl:last:col-span-3 xl:[&:nth-last-child(2)]:col-span-3"
            />
          ))}
        </div>
      </div>
      <Notice />
    </ServiceContainer>
  );
};

export default DeluxeCouplesMassages;