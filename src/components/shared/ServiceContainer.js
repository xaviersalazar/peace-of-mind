import { Outlet, useLocation } from "react-router-dom";

const ServiceContainer = () => {
  const { pathname } = useLocation();
  const pathsRegex = /(^\/salon$)|(^\/services$)|(^\/besame$)/gm;

  return (
    <div>
      <Outlet />
      {pathsRegex.test(pathname) && (
        <div className="relative top-20 md:top-32">
          <h1 className="text-3xl font-bold text-center">
            Nothing found here 🤷‍♀️
          </h1>
          <h1 className="text-2xl font-light text-center">
            Return to{" "}
            <a className="underline text-blue-300" href="/">
              homepage
            </a>
          </h1>
        </div>
      )}
    </div>
  );
};

export default ServiceContainer;
