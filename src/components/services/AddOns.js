import { GET_SERVICE } from "../../graphql/queries/getService";
import { useQuery } from "@apollo/client";
import Service from "../shared/Service";
import GradientFont from "../shared/GradientFont";

const AddOns = ({ categoryKey }) => {
  const { loading, error, data } = useQuery(GET_SERVICE(categoryKey));

  if (loading) {
    return (
      <Service>
        <h1 className="text-3xl font-extra-bold text-center">Loading!</h1>
      </Service>
    );
  }

  if (error) {
    return (
      <Service>
        <h1 className="text-3xl font-extra-bold text-center">
          Something happened. Please try reloading
        </h1>
      </Service>
    );
  }

  console.log(data);

  return (
    <Service>
      <div id="add-ons">
        <div className="text-center w-max my-0 mx-auto">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            <GradientFont
              className="text-3xl font-bold md:text-4xl lg:text-5xl"
              deg={-45}
              colors={["#a8ff78", "#78ffd6"]}
            >
              Add On's
            </GradientFont>{" "}
          </h1>
        </div>
      </div>
    </Service>
  );
};

export default AddOns;
