import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import { Error, Section, ServiceCard, SkeletonLoader } from "../shared";
import { IMG_PATH_PREFIXES } from "../utils/imgPathPrefixes";

const OxygenBar = ({ categoryId }) => {
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
    <div id="oxygen-bar">
      <div className="flex flex-wrap gap-6">
        {servicesByCategory.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            imgPathPrefix={IMG_PATH_PREFIXES.SERVICES}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-6 mt-12" id="oxygen-bar-benefits">
        <div className="card border-none rounded-2xl flex-1 basis-full md:basis-1/3 lg:basis-1/4">
          <h1 className="text-3xl font-extra-bold lg:text-4xl">
            Benefits of Oxygen
          </h1>
          <hr className="w-2/4 md:w-6/12 xl:w-3/12 mx-auto my-4 border-slate-100" />
          <Section>
            Oxygen is an element of vitality for the body, asthenia, chronic
            headache and lethargy, increases concentration, thinking power,
            memory, intellectual development, reduces fatigue, alcohol
            detoxification and skin care, and strengthens immune system against
            virus and influenza. Oxygen supports breathing of air in cases of
            asthma and allergies. Oxygen helps in cases of depression.Oxygen
            improves physical performance by up to 25%.
          </Section>
        </div>
      </div>
    </div>
  );
};

export default OxygenBar;
