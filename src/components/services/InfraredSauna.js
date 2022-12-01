import { useQuery } from "@apollo/client";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import { Error, ServiceCard, SkeletonLoader, StrikethruText } from "../shared";

const Text = ({ children }) => (
  <p className="text-sm font-light text-slate-500 mb-2">{children}</p>
);

const InfraredSauna = ({ categoryId }) => {
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
    <div id="infrared-sauna">
      <div className="text-center w-max my-0 mx-auto">
        <h1 className="relative text-5xl font-extra-bold mb-2 md:text-6xl">
          <StrikethruText
            className="relative block md:hidden"
            text="Infrared"
            color="#F45B69"
            height="h-4"
            position="top-8"
          />
          <StrikethruText
            className="relative inline md:hidden"
            text="Sauna"
            color="#F45B69"
            height="h-4"
            position="bottom-0.5"
          />
          <StrikethruText
            className="hidden md:inline"
            text="Infrared Sauna"
            color="#F45B69"
            height="h-5"
            position="bottom-0.5"
          />
        </h1>
        <p className="text-xs font-light text-slate-400 text-center md:text-sm">
          <span className="text-red-300">C</span>
          <span className="text-blue-300">o</span>
          <span className="text-yellow-300">l</span>
          <span className="text-orange-300">o</span>
          <span className="text-green-300">r</span> light therapy proven to help
          you heal
        </p>
      </div>
      <div className="pt-10 pb-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6 mb-4">
          {servicesByCategory.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              strikeColor="#F45B69"
              colsSizing="md:col-span-2 xl:col-span-4 xl:col-start-2"
              badges={
                <div className="grid grid-cols-4 md:grid-cols-6 gap-x-2 gap-y-2 my-2 mx-auto px-6 md:px-24 lg:px-32 xl:px-48">
                  <span className="badge col-span-1 bg-red-300 border-none w-auto text-xs text-white">
                    Red
                  </span>
                  <span className="badge col-span-1 bg-blue-300 border-none w-auto text-xs text-white">
                    Blue
                  </span>
                  <span className="badge col-span-1 bg-yellow-300 border-none w-auto text-xs text-white">
                    Yellow
                  </span>
                  <span className="badge col-span-1 bg-orange-300 border-none w-auto text-xs text-white">
                    Orange
                  </span>
                  <span className="badge col-span-2 md:col-span-1 bg-green-300 border-none w-auto text-xs text-white">
                    Green
                  </span>
                  <span className="badge col-span-2 md:col-span-1 bg-violet-300 border-none w-auto text-xs text-white">
                    Violet
                  </span>
                </div>
              }
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6">
          <div className="md:col-span-2 xl:col-span-3 card border-none">
            <div className="flex flex-col px-4 py-6 text-center self-center w-full h-full">
              <div className="mb-4">
                <div className="relative w-fit mx-auto">
                  <div className="text-2xl font-bold text-slate-700 self-center">
                    <StrikethruText text="Medical Benefits" color="#F45B69" />
                  </div>
                </div>
              </div>
              <Text>
                Light Therapy has been reported to reduce swelling, relieve
                pain, decrease inflammation, accelerate open wound healing and
                greatly reduce overall recovery after medical/surgical
                procedures. Patients have demonstrated increased range of
                motion, decreased muscle tension and spasm, and improved
                circulation.
              </Text>
              <Text>
                Rejuvenating LED light therapy can be used pain management such
                as joint and back pain, sore or torn muscles, sprains,
                arthritis, post-surgical scars, burns, wounds and more. When
                used with infrared technology, light therapy (phototherapy) is
                one of the most effective and non-invasive ways to repair the
                body.
              </Text>
            </div>
          </div>
          <div className="md:col-span-2 xl:col-span-3 card border-none">
            <div className="flex flex-col px-4 py-6 text-center self-center w-full h-full">
              <div className="mb-4">
                <div className="relative w-fit mx-auto">
                  <div className="text-2xl font-bold text-slate-700 self-center">
                    <StrikethruText text="Cosmetic Benefits" color="#F45B69" />
                  </div>
                </div>
              </div>
              <Text>
                Light therapy is also a growing treatment for anti-aging. Many
                individuals have seen a reduction in the appearance of fine
                lines, wrinkles, crow's feet, and age spots.
              </Text>
              <Text>
                Light therapy is "effective at improving the appearance of the
                face, neck, and chest by reducing the signs of aging, wrinkles,
                and age spots", says Web M.D. Combined with infrared therapy,
                LED phototherapy can be a great way to revitalize skin. Light
                therapy energizes skin cells, stimulating the production of
                collagen and elastin, giving skin back it's youthful look.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfraredSauna;
