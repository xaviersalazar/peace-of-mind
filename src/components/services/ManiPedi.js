import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import { Error, ServiceCard, SkeletonLoader, StrikethruText } from "../shared";

const ManiPedi = ({ categoryId }) => {
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
    <div id="mani-pedi">
      <div className="text-center w-max my-0 mx-auto">
        <h1 className="relative text-5xl font-extra-bold mb-2 md:text-6xl">
          <StrikethruText
            className="inline md:hidden"
            text="Manicures &"
            color="#FF9DA7"
            height="h-4"
            position="top-8"
          />
          <StrikethruText
            className="block md:hidden"
            text="Pedicures"
            color="#FF9DA7"
            height="h-4"
            position="bottom-0.5"
          />
          <StrikethruText
            className="hidden md:inline"
            text="Manicures & Pedicures"
            color="#FF9DA7"
            height="h-5"
            position="bottom-0.5"
          />
        </h1>
        <p className="text-xs font-light text-slate-400 text-center md:text-sm">
          Therapeutic nail and feet services
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6">
        {servicesByCategory.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            strikeColor="#FF9DA7"
            colsSizing="md:last:col-span-2 xl:col-span-2 xl:last:col-span-3 xl:[&:nth-last-child(2)]:col-span-3"
          />
        ))}
      </div>
    </div>
  );
};

export default ManiPedi;
