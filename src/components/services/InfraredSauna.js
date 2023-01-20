import { useQuery } from "@apollo/client";
import classNames from "classnames";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import { Error, Section, ServiceCard, SkeletonLoader } from "../shared";
import { IMG_PATH_PREFIXES } from "../utils/imgPathPrefixes";
import { INFRARED_SAUNA_DATA } from "./infraredSaunaData";

const Text = ({ children }) => (
  <p className="text-sm font-light text-slate-700 text-center">{children}</p>
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
      <div className="flex flex-wrap gap-6">
        {servicesByCategory.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            imgPathPrefix={IMG_PATH_PREFIXES.SERVICES}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-6 my-12" id="ir-benefits">
        {INFRARED_SAUNA_DATA.BENEFITS.map(({ title, text }) => (
          <div
            key={title}
            className="card border-none rounded-2xl flex-1 basis-full md:basis-1/3 lg:basis-1/4"
          >
            <h1 className="text-3xl font-extra-bold lg:text-4xl">{title}</h1>
            <hr className="w-2/4 md:w-6/12 xl:w-3/12 mx-auto my-4 border-slate-100" />
            {text.map((data, i) => (
              <Section key={i}>{data}</Section>
            ))}
          </div>
        ))}
      </div>
      <div id="color-healing">
        {INFRARED_SAUNA_DATA.COLOR_HEALING.map(({ title, text, colors }) => (
          <div key={title}>
            <div className="card border-none rounded-2xl flex-1 basis-full md:basis-1/3 lg:basis-1/4">
              <div className="card-body items-center text-center flex-none">
                <h1 className="card-title text-center justify-center text-3xl font-extra-bold lg:text-4xl">
                  {title}
                </h1>
                <hr className="w-2/4 md:w-6/12 xl:w-3/12 mx-auto my-4 border-slate-100" />
                {text.map((data, i) => (
                  <Section key={i}>{data}</Section>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-6 mt-8" id="ir-benefits">
              {colors.map(
                ({ title, text, backgroundClass, borderClass }, i) => (
                  <div
                    key={i}
                    className={classNames(
                      backgroundClass,
                      "card border-none rounded-2xl flex-1 basis-full md:basis-1/3 lg:basis-1/4"
                    )}
                  >
                    <div className="card-body items-center text-center flex-none">
                      <h1 className="card-title text-center justify-center">
                        {title}
                      </h1>
                      <hr
                        className={classNames(
                          borderClass,
                          "w-2/4 md:w-6/12 xl:w-3/12 mx-auto my-1 border-${title.toLowerCase()}-200"
                        )}
                      />
                      <Text>{text}</Text>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfraredSauna;
