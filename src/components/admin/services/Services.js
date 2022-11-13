import ServicesTable from "./ServicesTable";

const Services = () => {
  return (
    <div className="flex-1 overflow-x-auto relative top-8 px-10 pb-10 ml-16 lg:px-20 xl:px-[7rem]">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extra-bold mb-0 md:text-4xl xl:text-5xl">
          Services
        </h1>
        <p className="text-sm font-light text-slate-300">Peace of Mind</p>
      </div>
      <ServicesTable />
    </div>
  );
};

export default Services;
