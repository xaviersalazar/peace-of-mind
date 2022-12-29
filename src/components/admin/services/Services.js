import { Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div className="flex-1 overflow-x-hidden relative top-8 px-10 pb-6 ml-16 lg:px-20 xl:px-[7rem]">
      <Outlet />
    </div>
  );
};

export default Services;
