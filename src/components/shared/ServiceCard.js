import { isEmpty } from "lodash";

const Services = ({ service: { title, description, prices } }) => (
  <div className="card border-none bg-slate-50 rounded-2xl xl:col-span-2 xl:last:col-span-3 xl:[&:nth-last-child(2)]:col-span-3">
    <div className="flex flex-col px-4 py-6 text-center self-center w-full h-full">
      <div className="mb-4">
        <h1 className="text-lg font-bold text-slate-700 self-center">
          {title}
        </h1>
        {!isEmpty(prices) ? (
          prices.map(({ price, unit }) => (
            <p
              key={`${title}_${price}`}
              className="text-xs font-extra-light text-slate-400 text-center px-4"
            >
              {unit} ${price}
            </p>
          ))
        ) : (
          <p className="text-xs font-extra-light text-slate-400 text-center px-4">
            TBD
          </p>
        )}
      </div>
      <div className="flex-1 bg-white p-4 mx-4 rounded-2xl">
        <p className="text-sm font-light text-slate-400">{description}</p>
      </div>
    </div>
  </div>
);

export default Services;
