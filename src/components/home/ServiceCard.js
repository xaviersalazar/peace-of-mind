import classNames from "classnames";

const ServiceCard = ({ className, onClick, id, imgName, title, desc }) => (
  <div
    className={classNames(
      className,
      "card border-none bg-slate-100 shadow-xl shadow-slate-200 h-full"
    )}
    onClick={() => onClick(id)}
  >
    <div className="flex-1 self-center pt-6 px-4">
      <img
        className="w-[38px]"
        src={`/services/${imgName}.png`}
        alt={imgName}
      />
    </div>
    <div className="card-body p-4 text-center self-center">
      <h2 className="card-title text-sm self-center">{title}</h2>
      <p className="text-xs font-extra-light">{desc}</p>
    </div>
  </div>
);

export default ServiceCard;
