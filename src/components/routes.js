import { lazy, Suspense } from "react";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import Login from "./auth/Login";
import Protected from "./auth/Protected";
import DashboardLayout from "./admin/layout/DashboardLayout";
import { Loader, SkeletonLoader } from "./shared";
import { CATEGORY_MAPPING } from "./utils/categoryMapping";

// Public
const About = lazy(() => import("./about/About"));
const AddOns = lazy(() => import("./services/AddOns"));
const DeluxeCouplesMassages = lazy(() => import("./services/DeluxeCouplesMassages")); // prettier-ignore

// Admin
const Dashboard = lazy(() => import("./admin/Dashboard"));
const Services = lazy(() => import("./admin/services/Services"));

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "services",
        children: [
          {
            path: "add-ons",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <AddOns categoryId={CATEGORY_MAPPING.ADD_ONS} />
              </Suspense>
            ),
          },
          {
            path: "deluxe-couples",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <DeluxeCouplesMassages
                  categoryId={CATEGORY_MAPPING.DELUXE_COUPLES}
                />
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
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Protected>
              <Dashboard />
            </Protected>
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<Loader />}>
            <Protected>
              <Services />
            </Protected>
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;
