import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import { Error, ServiceCard, SkeletonLoader, StrikethruText } from "../shared";

const Text = ({ children }) => (
  <p className="text-sm font-light text-slate-500 mb-2">{children}</p>
);

const OxygenFootSoak = ({ categoryId }) => {
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
    <div id="oxygen-foot-soak">
      <div className="text-center w-max my-0 mx-auto">
        <h1 className="relative text-5xl font-extra-bold mb-2 md:text-6xl">
          <StrikethruText
            className="inline md:hidden"
            text="Oxygen Foot"
            color="#86BBD8"
            height="h-4"
            position="top-8"
          />
          <StrikethruText
            className="relative block md:hidden"
            text="Soak"
            color="#86BBD8"
            height="h-4"
            position="bottom-0.5"
          />
          <StrikethruText
            className="hidden md:inline"
            text="Oxygen Foot Soak"
            color="#86BBD8"
            height="h-5"
            position="bottom-0.5"
          />
        </h1>
        <p className="relative text-xs font-light text-slate-400 text-center md:text-sm">
          Purify your body
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6">
        {servicesByCategory.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            strikeColor="#86BBD8"
            colsSizing="md:col-span-2 xl:col-span-4 xl:col-start-2"
          />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6">
        <div className="md:col-span-2 xl:col-span-4 xl:col-start-2 card border-none">
          <div className="flex flex-col px-4 py-6 text-center self-center w-full h-full">
            <div className="mb-4">
              <div className="relative w-fit mx-auto">
                <div className="text-2xl font-bold text-slate-700 self-center">
                  <StrikethruText
                    text="Benefits of Foot Soak"
                    color="#86BBD8"
                  />
                </div>
              </div>
            </div>
            <Text>
              To relieve the strains on the kidneys and liver it is more
              important than ever to maintain a detoxification regimen. The ion
              foot bath is designed to relieve these strains and help the body
              re-balance its energy fields allowing organs to function better.
              After using ionic foot bath machine healthy individuals and users
              can feel lighter and experience a greater feeling of well being
              from each session.
            </Text>
            <Text>
              More energy and youth is felt as well. Some people with pain,
              edema, swollen, and deteriorating joints have also reported
              symptomatic relief from the sessions. Many doctors, nurses,
              professionals and the likes have also recommended this machine for
              their patients. We also found many excerpts stating that the
              machine has helped individuals break free from addiction problems.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OxygenFootSoak;
