import classNames from "classnames";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const ServicesTableLoader = () => (
  <div className="table-row-group">
    {arr.map((num, i) => (
      <div key={num} className="table-row">
        <div
          className={classNames(
            "table-cell md:w-[15%] pl-4 pr-2 py-4",
            i === arr.length - 1 ? "border-none" : "border-b border-slate-50"
          )}
        >
          <div className="bg-slate-100 animate-pulse w-full h-10 rounded-lg" />
        </div>
        <div
          className={classNames(
            "hidden md:table-cell md:w-[15%] px-2 py-4",
            i === arr.length - 1 ? "border-none" : "border-b border-slate-50"
          )}
        >
          <div className="bg-slate-100 animate-pulse w-full h-10 rounded-lg" />
        </div>
        <div
          className={classNames(
            "table-cell w-[50%] md:w-[25%] px-2 py-4 border-b border-slate-50",
            i === arr.length - 1 ? "border-none" : "border-b border-slate-50"
          )}
        >
          <div className="bg-slate-100 animate-pulse w-full h-10 rounded-lg" />
        </div>
        <div
          className={classNames(
            "hidden md:table-cell md:w-[50%] px-2 py-4 border-b border-slate-50",
            i === arr.length - 1 ? "border-none" : "border-b border-slate-50"
          )}
        >
          <div className="bg-slate-100 animate-pulse w-full h-10 rounded-lg" />
        </div>
        <div
          className={classNames(
            "table-cell md:w-[10%] pl-2 pr-4 py-4 border-b border-slate-50",
            i === arr.length - 1 ? "border-none" : "border-b border-slate-50"
          )}
        >
          <div className="bg-slate-100 animate-pulse w-full h-10 rounded-lg" />
        </div>
      </div>
    ))}
  </div>
);

export default ServicesTableLoader;
