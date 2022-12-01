import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import { Error, ServiceCard, SkeletonLoader, StrikethruText } from "../shared";

const SetsTwists = ({ categoryId }) => {
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
    <div id="sets-twists">
      <div className="text-center w-max my-0 mx-auto">
        <h1 className="relative text-5xl font-extra-bold mb-2 md:text-6xl">
          <StrikethruText
            text="Sets & Twists"
            color="#5FBDC6"
            height="h-4 md:h-6"
            position="bottom-1"
          />
        </h1>
        <p className="text-xs font-light text-slate-400 text-center md:text-sm">
          Professional, natural looking twists
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6">
        {servicesByCategory.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            strikeColor="#5FBDC6"
            colsSizing="md:last:col-span-2 xl:col-span-2 xl:last:col-span-4 xl:last:col-start-2"
          />
        ))}
      </div>
    </div>
  );
};

export default SetsTwists;
