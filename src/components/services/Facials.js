import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import {
  Error,
  GradientFont,
  Notice,
  Service,
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
      <Service>
        <SkeletonLoader />
      </Service>
    );
  }

  if (error) {
    return (
      <Service>
        <Error />
      </Service>
    );
  }

  const { servicesByCategory } = data;
  const isEven = servicesByCategory?.length % 2 === 0;

  return (
    <Service>
      <div id="facials">
        <div className="text-center w-max my-0 mx-auto">
          <h1 className="text-5xl font-extra-bold md:text-6xl">
            <GradientFont deg={-45} colors={["#e1eec3", "#f05053"]}>
              Facials
            </GradientFont>
          </h1>
          <p className="text-[0.65rem] font-extra-light text-slate-400 text-center md:text-sm">
            Treatments surely to make your face radiate
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6 xl:col-span-2">
          {servicesByCategory.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              strikeColor="#e1eec3"
              isEven={isEven}
            />
          ))}
        </div>
      </div>
      <Notice />
    </Service>
  );
};

export default Facials;
