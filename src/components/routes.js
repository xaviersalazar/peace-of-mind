import { lazy, Suspense } from "react";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import SkeletonLoader from "./shared/SkeletonLoader";
import { CATEGORY_MAPPING } from "./utils/categoryMapping";

const AddOns = lazy(() => import("./services/AddOns"));

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "services",
        children: [
          {
            path: "add-ons",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <AddOns categoryKey={CATEGORY_MAPPING.ADD_ONS} />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "*",
        element: (
          <div className="relative top-32 px-10 pt-0 pb-10 lg:p-20 xl:px-[7rem] xl:py-16">
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
        ),
      },
    ],
  },
];

export default routes;
