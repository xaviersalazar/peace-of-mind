import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import { Error, ServiceCard, SkeletonLoader, StrikethruText } from "../shared";

const BreastButtLiftFatElim = ({ categoryId }) => {
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
    <div id="breast-butt-lift-fat-elim">
      <div className="text-center w-max my-0 mx-auto">
        <h1 className="relative text-5xl font-extra-bold mb-2 md:text-6xl">
          <div className="block md:hidden">
            <StrikethruText
              className="block"
              text="Breast/Butt"
              color="#FAC9B8"
              height="h-4"
              position="top-8"
            />
            <StrikethruText
              className="relative inline"
              text="Lift & Fat"
              color="#FAC9B8"
              height="h-4"
              position="bottom-0.5"
            />
            <StrikethruText
              className="block"
              text="Eliminator"
              color="#FAC9B8"
              height="h-4"
              position="bottom-0.5"
            />
          </div>
          <div className="hidden md:block">
            <StrikethruText
              className="md:inline"
              text="Breast/Butt Lift &"
              color="#FAC9B8"
              height="h-5"
              position="top-10"
            />
            <br />
            <StrikethruText
              className="md:inline"
              text="Fat Eliminator"
              color="#FAC9B8"
              height="h-5"
              position="bottom-0.5"
            />
          </div>
        </h1>
        <p className="text-xs font-light text-slate-400 text-center md:text-sm">
          Treat yourself to our non-surgical lifts & fat eliminators
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6">
        {servicesByCategory.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            strikeColor="#FAC9B8"
            colsSizing="md:last:col-span-2 xl:col-span-2 xl:last:col-span-4 xl:last:col-start-2"
          />
        ))}
      </div>
    </div>
  );
};

export default BreastButtLiftFatElim;
