import { useQuery } from "@apollo/client";
import classNames from "classnames";
import { GET_SERVICES_BY_CATEGORY } from "../../graphql/queries";
import { Error, Section, ServiceCard, SkeletonLoader } from "../shared";
import { IMG_PATH_PREFIXES } from "../utils/imgPathPrefixes";
import { KIDS_YOGA_DATA } from "./kidsYogaData";

const Text = ({ children }) => (
  <p className="text-sm font-light text-slate-700 text-center">{children}</p>
);

const KidsYoga = ({ categoryId }) => {
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
    <div id="kids-yoga">
      <div className="flex flex-wrap gap-6">
        {servicesByCategory.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            imgPathPrefix={IMG_PATH_PREFIXES.SERVICES}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-6 my-12" id="kids-yoga-benefits">
        {KIDS_YOGA_DATA.BENEFITS.map(({ title, text }) => (
          <div
            key={title}
            className="card border-none rounded-2xl flex-1 basis-full md:basis-1/3 lg:basis-1/4"
          >
            <h1 className="text-3xl font-extra-bold lg:text-4xl">{title}</h1>
            <hr className="w-2/4 md:w-6/12 xl:w-3/12 mx-auto my-4 border-slate-100" />
            <Section>{text}</Section>
          </div>
        ))}
      </div>
      <div
        className="card border-none rounded-2xl flex-1 basis-full md:basis-1/3 lg:basis-1/4"
        id="expectations"
      >
        <div className="card-body items-center text-center flex-none">
          <h1 className="card-title text-center justify-center text-3xl font-extra-bold lg:text-4xl">
            What To Expect In Our Yoga Class
          </h1>
          <hr className="w-2/4 md:w-6/12 xl:w-3/12 mx-auto my-4 border-slate-100" />
        </div>
      </div>
      <div className="flex flex-wrap gap-6" id="ir-benefits">
        {KIDS_YOGA_DATA.EXPECTATIONS.map(({ title, imgName, text }, i) => (
          <div
            key={i}
            className={classNames(
              "bg-slate-50 card border-none rounded-2xl flex-1 basis-full md:basis-1/3",
              i === KIDS_YOGA_DATA.EXPECTATIONS.length - 1
                ? "lg:flex-initial lg:max-w-1/2 lg:w-1/2 lg:mx-auto"
                : "lg:basis-1/4"
            )}
          >
            <figure>
              <img
                className="w-10/12 xl:w-8/12 rounded-xl mx-auto mt-12"
                src={`${process.env.REACT_APP_BUCKETEER_URL}/public/services/${imgName}`}
                alt="benefit"
              />
            </figure>
            <div className="card-body items-center text-center flex-none">
              <h1 className="card-title text-center justify-center">{title}</h1>
              <hr className="w-2/4 md:w-6/12 xl:w-3/12 mx-auto my-1 border-slate-100" />
              <Text>{text}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidsYoga;
