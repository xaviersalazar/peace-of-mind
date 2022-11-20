import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries/getServicesByCategory";
import {
  Error,
  GradientFont,
  Notice,
  Service,
  ServiceCard,
  SkeletonLoader,
} from "../shared";

const AddOns = ({ categoryId }) => {
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

  return (
    <Service>
      <div id="add-ons">
        <div className="text-center w-max my-0 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl">
            <GradientFont
              className="text-5xl font-bold md:text-6xl"
              deg={-45}
              colors={["#ddd6f3", "#faaca8"]}
            >
              Add On's
            </GradientFont>
          </h1>
          <p className="text-[0.65rem] font-extra-light text-slate-400 text-center md:text-sm">
            Give your session something <span className="italic">extra</span>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6 xl:col-span-2">
          {servicesByCategory.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              strikeColor="#ddd6f3"
            />
          ))}
        </div>
      </div>
      <Notice />
    </Service>
  );
};

export default AddOns;
