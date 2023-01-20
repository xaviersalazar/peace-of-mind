import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import { Error, ServiceCard, SkeletonLoader } from "../shared";
import { IMG_PATH_PREFIXES } from "../utils/imgPathPrefixes";

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
    <div className="flex flex-wrap gap-6" id="besame-eyes">
      {servicesByCategory.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          showPriceText={false}
          imgPathPrefix={IMG_PATH_PREFIXES.BESAME_EYES}
          imgWidth="w-1/2 xl:w-1/3"
        />
      ))}
    </div>
  );
};

export default BesameEyes;
