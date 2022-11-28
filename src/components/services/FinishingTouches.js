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

const FinishingTouches = ({ categoryId }) => {
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
            <GradientFont deg={-45} colors={["#C9FFBF", "#FFAFBD"]}>
              Finishing Touches
            </GradientFont>
          </h1>
          <p className="text-[0.65rem] font-extra-light text-slate-400 text-center md:text-sm">
            Give your hair some <span className="italic">extra</span> care
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6">
          {servicesByCategory.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              strikeColor="#FFAFBD"
              colsSizing="md:last:col-span-2 xl:col-span-2 xl:last:col-span-3 xl:[&:nth-last-child(2)]:col-span-3"
            />
          ))}
        </div>
      </div>
      <Notice />
    </ServiceContainer>
  );
};

export default FinishingTouches;
