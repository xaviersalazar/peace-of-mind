import classNames from "classnames";
import { useLocation } from "react-router-dom";
import useProgressiveImage from "../hooks/useProgressiveImage";

const ServiceContainer = ({ imgPath, title, subTitle, children }) => {
  const { pathname } = useLocation();
  const pathsRegex = /(^\/salon$)|(^\/services$)|(^\/besame$)/gm;

  const placeholder = `${process.env.PUBLIC_URL}/placeholder.jpg`;
  const loaded = useProgressiveImage(
    `${process.env.REACT_APP_BUCKETEER_URL}/public/${imgPath}`
  );

  return (
    <div>
      <div
        id="hero"
        className="hero h-[40vh] xl:h-[50vh]"
        style={{
          backgroundImage: `url(${loaded || placeholder})`,
        }}
      >
        <div
          className={classNames(
            "hero-overlay",
            loaded ? "bg-slate-900 bg-opacity-75" : "bg-transparent"
          )}
        />
        <div className="hero-content mt-8">
          <div className="max-w text-center">
            <h1 className="text-4xl font-extra-bold text-white md:text-5xl xl:text-6xl">
              {title}
            </h1>
            <p className="text-xs font-light text-slate-400 text-center md:text-sm">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
      {children}
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
