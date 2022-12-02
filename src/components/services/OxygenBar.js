import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import { Error, ServiceCard, SkeletonLoader, StrikethruText } from "../shared";

const Text = ({ children }) => (
  <p className="text-sm font-light text-slate-500 mb-2">{children}</p>
);

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
      <div className="text-center w-max my-0 mx-auto">
        <h1 className="text-5xl font-extra-bold mb-2 md:text-6xl">
          <StrikethruText
            text="Oxygen Bar"
            color="#92D1C3"
            height="h-4 md:h-5"
            position="bottom-1.5"
          />
        </h1>
        <p className="relative text-xs font-light text-slate-400 text-center md:text-sm">
          Gain a new level relaxation in our{" "}
          <span className="relative">
            <span>O</span>
            <span className="absolute top-1 md:top-1.5 text-[0.6rem] text-xs">
              2
            </span>
          </span>{" "}
          <span className="ml-1">bar</span>
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-6">
        {servicesByCategory.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            strikeColor="#92D1C3"
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
                  <StrikethruText text="Benefits of Oxygen" color="#92D1C3" />
                </div>
              </div>
            </div>
            <Text>
              Light Therapy has been reported to reduce swelling, relieve pain,
              decrease inflammation, accelerate open wound healing and greatly
              reduce overall recovery after medical/surgical procedures.
              Patients have demonstrated increased range of motion, decreased
              muscle tension and spasm, and improved circulation.
            </Text>
            <Text>
              Rejuvenating LED light therapy can be used pain management such as
              joint and back pain, sore or torn muscles, sprains, arthritis,
              post-surgical scars, burns, wounds and more. When used with
              infrared technology, light therapy (phototherapy) is one of the
              most effective and non-invasive ways to repair the body.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OxygenBar;
