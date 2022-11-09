import { isEmpty } from "lodash";

const Services = ({ services }) => (
  <div className="grid auto-rows-fr grid-cols-1 gap-6 pt-10 pb-10 md:grid-cols-2 xl:grid-cols-3">
    {services?.edges.map(({ node }) => (
      <div
        className="card border-none bg-slate-50 rounded-2xl"
        key={node.title}
      >
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
          <div className="flex-1 bg-white p-4 mx-4 rounded-2xl">
            <p className="text-sm font-light text-slate-400">
              {node.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Services;
