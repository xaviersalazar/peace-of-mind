import { useQuery } from "@apollo/client";
import { GET_SERVICE } from "../../graphql/queries/getService";
import Service from "../shared/Service";
import GradientFont from "../shared/GradientFont";
import SkeletonLoader from "../shared/SkeletonLoader";
import { isEmpty } from "lodash";

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
        <h1 className="text-5xl font-extra-bold text-center md:text-6xl">
          Something happened 🤷‍♀️ Please try reloading
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
              colors={["#ddd6f3", "#faaca8"]}
            >
              Add On's
            </GradientFont>{" "}
          </h1>
          <p className="text-[0.65rem] font-extra-light text-slate-400 text-center md:text-sm">
            Give your session something <span className="italic">extra</span>
          </p>
        </div>
        <div className="grid auto-rows-fr grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-3">
          {servicesCollection?.edges.map(({ node }) => (
            <div className="card border-none bg-slate-50" key={node.title}>
              <div className="flex flex-col px-4 py-6 text-center self-center w-full h-full">
                <div className="mb-4">
                  <h1 className="text-lg font-bold text-slate-700 self-center">
                    {node.title}
                  </h1>
                  {!isEmpty(node.pricesCollection.edges) ? (
                    node.pricesCollection.edges.map(({ node: priceNode }) => (
                      <p
                        key={`${node.title}_${priceNode.price}`}
                        className="text-xs font-extra-light text-slate-400 text-center px-4"
                      >
                        {priceNode.unit} ${priceNode.price}
                      </p>
                    ))
                  ) : (
                    <p className="text-xs font-extra-light text-slate-400 text-center px-4">
                      TBD
                    </p>
                  )}
                </div>
                <div className="flex-1 bg-white p-4 mx-4 rounded-xl">
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
