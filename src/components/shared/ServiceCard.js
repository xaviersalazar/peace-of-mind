import { isEmpty } from "lodash";
import classNames from "classnames";

const Prices = ({ title, prices, showPriceText }) => {
  if (!showPriceText) return "";

  const getUnitAndPrice = (price, unit) => {
    if (unit?.name === "Range") {
      return `${price
        .split(",")
        .map((price) => `$${price}`)
        .join(" - ")}`;
    }

    if (unit?.name) {
      return `${unit.name}: $${price}`;
    }

    return `$${price}`;
  };

  return !isEmpty(prices) ? (
    prices.map(({ price, unit }) => (
      <p
        key={`${title}_${price}`}
        className="text-sm font-light text-slate-400 text-center px-4"
      >
        {getUnitAndPrice(price, unit)}
      </p>
    ))
  ) : (
    <p className="text-sm font-light text-slate-400 text-center px-4">TBD</p>
  );
};

const Services = ({
  service: { title, description, prices },
  background = "bg-slate-50",
  colsSizing = "xl:col-span-2",
  showPriceText = true,
  badges = null,
}) => (
  <div
    key={title}
    className={classNames(
      "card border-none rounded-2xl",
      background,
      colsSizing
    )}
  >
    <figure>
      <img
        src={`${process.env.REACT_APP_BUCKETEER_URL}/public/services/addons-cocoa.jpg`} // TODO: change to pull in imgName from API
        alt="image"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h1 className="card-title text-center justify-center">{title}</h1>
      {badges}
      <Prices title={title} prices={prices} showPriceText={showPriceText} />
      <p className="text-sm font-light text-slate-400">{description}</p>
    </div>
  </div>
);

export default Services;
