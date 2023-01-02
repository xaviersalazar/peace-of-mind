import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import { Error, ServiceCard, SkeletonLoader } from "../shared";

const BesameEyes = ({ categoryId }) => {
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
    <div
      className="grid grid-cols-1 gap-6 pb-10 pt-10 px-10 md:p-16 lg:p-20 xl:p-[7rem] md:grid-cols-2 xl:grid-cols-6"
      id="besame-eyes"
    >
      {servicesByCategory.map((service) => (
        <ServiceCard key={service.id} service={service} showPriceText={false} />
      ))}
    </div>
  );
};

export default BesameEyes;
