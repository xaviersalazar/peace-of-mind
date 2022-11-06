import { lazy, Suspense } from "react";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import SuspenseSkeleton from "./shared/SuspenseSkeleton";

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
                <AddOns />
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
