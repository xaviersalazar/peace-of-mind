import { GET_SERVICE } from "../../graphql/queries/getService";
import { useQuery } from "@apollo/client";
import Service from "../shared/Service";
import GradientFont from "../shared/GradientFont";

const AddOns = ({ categoryKey }) => {
  const { loading, error, data } = useQuery(GET_SERVICE(categoryKey));

  if (loading) {
    return (
      <Service>
        <h1 className="text-5xl font-extra-bold text-center md:text-6xl">
          Loading!
        </h1>
      </Service>
    );
  }

  if (error) {
    return (
      <Service>
        <h1 className="text-5xl font-extra-bold text-center md:text-6xl">
          Something happened. Please try reloading
        </h1>
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
              colors={["#c9ffbf", "#ffafbd"]}
            >
              Add On's
            </GradientFont>{" "}
          </h1>
          <p className="text-[0.65rem] font-light text-slate-300 text-center md:text-sm">
            Give your session something <span className="italic">extra</span>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-3">
          {servicesCollection?.edges.map(({ node }) => (
            <div
              className="card relative border-none bg-slate-50"
              key={node.title}
            >
              <div className="px-4 py-6 text-center self-center w-full">
                <div className="mb-4">
                  <h1 className="text-lg font-bold text-slate-700 self-center">
                    {node.title}
                  </h1>
                  {node.pricesCollection.edges.map(({ node: priceNode }) => (
                    <p
                      key={`${node.title}_${priceNode.price}`}
                      className="text-sm font-extra-light text-slate-400 text-center px-4"
                    >
                      {priceNode.unit} ${priceNode.price}
                    </p>
                  ))}
                </div>
                <div className="bg-white p-4 mx-4 rounded-xl">
                  <p className="text-sm font-light text-slate-400">
                    {node.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[0.65rem] font-light text-slate-300 mb-2 text-center md:text-sm">
        NOTICE: Prices are subject to change without prior notice
      </p>
    </Service>
  );
};

export default AddOns;
