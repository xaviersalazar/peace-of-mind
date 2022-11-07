import { lazy, Suspense } from "react";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import SuspenseSkeleton from "./shared/SuspenseSkeleton";
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
              <Suspense fallback={<SuspenseSkeleton />}>
                <AddOns categoryKey={CATEGORY_MAPPING.ADD_ONS} />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "*",
        element: <a ref="/">Return to homepage</a>,
      },
    ],
  },
];

export default routes;
