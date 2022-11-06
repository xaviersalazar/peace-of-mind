import { lazy, Suspense } from "react";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";

const AddOns = lazy(() => import("./components/services/AddOns"));

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
              <Suspense fallback={<h1>Loading...</h1>}>
                <AddOns />
              </Suspense>
            ),
          },
        ],
      },
      { path: "*", element: <a href="/">Return to homepage</a> },
    ],
  },
];

export default routes;
