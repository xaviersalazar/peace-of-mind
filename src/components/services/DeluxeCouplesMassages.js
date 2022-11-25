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

const DeluxeCouplesMassages = ({ categoryId }) => {
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
      <div id="deluxe-couples">
        <div className="text-center w-max my-0 mx-auto">
          <h1 className="text-5xl font-extra-bold md:text-6xl">
            <GradientFont deg={-45} colors={["#00C9FF", "#92FE9D"]}>
              Deluxe & <span className="hidden md:inline">Couples</span>
            </GradientFont>
          </h1>
          <h1 className="md:hidden text-5xl font-extra-bold md:text-6xl mb-1">
            <GradientFont deg={-45} colors={["#00C9FF", "#92FE9D"]}>
              Couples
            </GradientFont>
          </h1>
          <p className="text-[0.65rem] font-extra-light text-slate-400 text-center md:text-sm">
            Massages for two and more
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6 xl:col-span-2">
          {servicesByCategory.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              strikeColor="#92FE9D"
              isEven={isEven}
            />
          ))}
        </div>
      </div>
      <Notice />
    </Service>
  );
};

export default DeluxeCouplesMassages;
