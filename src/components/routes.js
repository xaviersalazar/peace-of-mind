import { lazy, Suspense } from "react";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import Login from "./auth/Login";
import Protected from "./auth/Protected";
import DashboardLayout from "./admin/layout/DashboardLayout";
import { Loader, ServiceContainer, SkeletonLoader } from "./shared";
import { CATEGORY_MAPPING } from "./utils/categoryMapping";

// Public => Services
const About = lazy(() => import("./about/About"));
const AddOns = lazy(() => import("./services/AddOns"));
const DeluxeCouplesMassages = lazy(() => import("./services/DeluxeCouplesMassages")); // prettier-ignore
const Facials = lazy(() => import("./services/Facials"));
const Massages = lazy(() => import("./services/Massages"));
const ScrubsWeightloss = lazy(() => import("./services/ScrubsWeightloss"));
const Waxes = lazy(() => import("./services/Waxes"));

// Public => Salon
const SalonEyes = lazy(() => import("./services/SalonEyes"));
const FinishingTouches = lazy(() => import("./services/FinishingTouches"));
const Haircuts = lazy(() => import("./services/Haircuts"));
const HairColoring = lazy(() => import("./services/HairColoring"));
const HairExtensions = lazy(() => import("./services/HairExtensions"));
const HairHighlights = lazy(() => import("./services/HairHighlights"));
const HairTreatments = lazy(() => import("./services/HairTreatments"));
const Locs = lazy(() => import("./services/Locs"));

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
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <AddOns categoryId={CATEGORY_MAPPING.ADD_ONS} />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "deluxe-couples",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <DeluxeCouplesMassages
                    categoryId={CATEGORY_MAPPING.DELUXE_COUPLES}
                  />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "facials",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <Facials categoryId={CATEGORY_MAPPING.FACIALS} />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "massages",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <Massages categoryId={CATEGORY_MAPPING.MASSAGES} />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "scrubs-weightloss",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <ScrubsWeightloss
                    categoryId={CATEGORY_MAPPING.SCRUBS_WEIGHTLOSS}
                  />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "waxes",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <Waxes categoryId={CATEGORY_MAPPING.WAXES} />
                </Suspense>
              </ServiceContainer>
            ),
          },
        ],
      },
      {
        path: "salon",
        children: [
          {
            path: "eyes",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <SalonEyes categoryId={CATEGORY_MAPPING.SALON_EYES} />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "finishing-touches",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <FinishingTouches
                    categoryId={CATEGORY_MAPPING.FINISHING_TOUCHES}
                  />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "haircuts",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <Haircuts categoryId={CATEGORY_MAPPING.HAIRCUTS} />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "hair-coloring",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <HairColoring categoryId={CATEGORY_MAPPING.HAIR_COLORING} />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "hair-ext",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <HairExtensions
                    categoryId={CATEGORY_MAPPING.HAIR_EXTENSIONS}
                  />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "hair-highlights",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <HairHighlights
                    categoryId={CATEGORY_MAPPING.HAIR_HIGHLIGHTS}
                  />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "hair-treatments",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <HairTreatments
                    categoryId={CATEGORY_MAPPING.HAIR_TREATMENTS}
                  />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "locs",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <Locs categoryId={CATEGORY_MAPPING.LOCS} />
                </Suspense>
              </ServiceContainer>
            ),
          },
        ],
      },
      {
        path: "*",
        element: (
          <ServiceContainer>
            <h1 className="text-3xl font-bold text-center">
              Nothing found here 🤷‍♀️
            </h1>
            <h1 className="text-2xl font-light text-center">
              Return to{" "}
              <a className="underline text-blue-300" href="/">
                homepage
              </a>
            </h1>
          </ServiceContainer>
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
