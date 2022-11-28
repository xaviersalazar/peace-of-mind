import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import {
  Error,
  Notice,
  ServiceContainer,
  ServiceCard,
  SkeletonLoader,
  StrikethruText,
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
      <div id="finishing-touches">
        <div className="text-center w-max my-0 mx-auto">
          <h1 className="relative z-[1] text-5xl font-extra-bold mb-2 md:text-6xl">
            <StrikethruText
              className="block md:hidden"
              text="Finishing"
              color="#FFAFBD"
              height="h-4"
              position="top-8"
            />
            <StrikethruText
              className="block md:hidden"
              text="Touches"
              color="#FFAFBD"
              height="h-4"
              position="bottom-0.5"
            />
            <StrikethruText
              className="hidden md:inline"
              text="Finishing Touches"
              color="#FFAFBD"
              height="h-5"
              position="bottom-0.5"
            />
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
