import { useQuery } from "@apollo/client";
import { GET_SERVICE } from "../../graphql/queries/getService";
import Service from "../shared/Service";
import GradientFont from "../shared/GradientFont";
import SkeletonLoader from "../shared/SkeletonLoader";
import Error from "../shared/Error";
import Services from "../shared/Services";
import Notice from "../shared/Notice";

const AddOns = ({ categoryKey }) => {
  const { loading, error, data } = useQuery(GET_SERVICE(categoryKey));

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

  const { servicesCollection } = data;

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
        <Services services={servicesCollection} />
      </div>
      <Notice />
    </Service>
  );
};

export default AddOns;
