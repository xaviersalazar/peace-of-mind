import { lazy, Suspense } from "react";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import Login from "./auth/Login";
import Protected from "./auth/Protected";
import DashboardLayout from "./admin/layout/DashboardLayout";
import { Loader, ServiceContainer, SkeletonLoader } from "./shared";
import { CATEGORY_MAPPING } from "./utils/categoryMapping";

// Public => About
const About = lazy(() => import("./about/About"));

// Public => Services
const AddOns = lazy(() => import("./services/AddOns"));
const BreastButtLiftFatElim = lazy(() => import("./services/BreastButtLiftFatElim")); // prettier-ignore
const DeluxeCouplesMassages = lazy(() => import("./services/DeluxeCouplesMassages")); // prettier-ignore
const Facials = lazy(() => import("./services/Facials"));
const FacialEnhancements = lazy(() => import("./services/FacialEnhancements"));
const HealthCoaching = lazy(() => import("./services/HealthCoaching"));
const InfraredSauna = lazy(() => import("./services/InfraredSauna"));
const KidsYoga = lazy(() => import("./services/KidsYoga"));
const Massages = lazy(() => import("./services/Massages"));
const OxygenBar = lazy(() => import("./services/OxygenBar"));
const OxygenFootSoak = lazy(() => import("./services/OxygenFootSoak"));
const ServicesAbout = lazy(() => import("./services/ServicesAbout"));
const ScrubsWeightloss = lazy(() => import("./services/ScrubsWeightloss"));
const Waxes = lazy(() => import("./services/Waxes"));

// Public => Salon
const FinishingTouches = lazy(() => import("./salon/FinishingTouches"));
const HairColoring = lazy(() => import("./salon/HairColoring"));
const Haircuts = lazy(() => import("./salon/Haircuts"));
const HairExtensions = lazy(() => import("./salon/HairExtensions"));
const HairHighlights = lazy(() => import("./salon/HairHighlights"));
const HairTreatments = lazy(() => import("./salon/HairTreatments"));
const Locs = lazy(() => import("./salon/Locs"));
const Makeup = lazy(() => import("./salon/Makeup"));
const ManiPedi = lazy(() => import("./salon/ManiPedi"));
const Mens = lazy(() => import("./salon/Mens"));
const NaturalStyling = lazy(() => import("./salon/NaturalStyling"));
const Perms = lazy(() => import("./salon/Perms"));
const SalonAbout = lazy(() => import("./salon/SalonAbout"));
const SalonEyes = lazy(() => import("./salon/SalonEyes"));
const SetsTwists = lazy(() => import("./salon/SetsTwists"));
const SpecialtyExtensions = lazy(() => import("./salon/SpecialtyExtensions")); // prettier-ignore
const StraighteningServices = lazy(() => import("./salon/StraighteningServices")); // prettier-ignore

// Public => Besame
const BesameAbout = lazy(() => import("./besame/BesameAbout"));
const BesameEyes = lazy(() => import("./besame/BesameEyes"));
const BesameFace = lazy(() => import("./besame/BesameFace"));
const BesameLips = lazy(() => import("./besame/BesameLips"));

// Private => Admin
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
        path: "besame",
        children: [
          {
            path: "about",
            element: (
              <ServiceContainer>
                <Suspense fallback={<Loader />}>
                  <BesameAbout />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "eyes",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <BesameEyes categoryId={CATEGORY_MAPPING.BESAME_EYES} />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "face",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <BesameFace categoryId={CATEGORY_MAPPING.BESAME_EYES} />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "lips",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <BesameLips categoryId={CATEGORY_MAPPING.BESAME_LIPS} />
                </Suspense>
              </ServiceContainer>
            ),
          },
        ],
      },
      {
        path: "services",
        children: [
          {
            path: "about",
            element: (
              <ServiceContainer>
                <Suspense fallback={<Loader />}>
                  <ServicesAbout />
                </Suspense>
              </ServiceContainer>
            ),
          },
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
            path: "bbl-fat-elim",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <BreastButtLiftFatElim
                    categoryId={CATEGORY_MAPPING.BREAST_BUTT_LIFT_FAT_ELIM}
                  />
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
            path: "facial-enhance",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <FacialEnhancements
                    categoryId={CATEGORY_MAPPING.FACIAL_ENHANCEMENTS}
                  />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "health-coaching",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <HealthCoaching
                    categoryId={CATEGORY_MAPPING.HEALTH_COACHING}
                  />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "infrared-sauna",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <InfraredSauna categoryId={CATEGORY_MAPPING.INFRARED_SAUNA} />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "kids-yoga",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <KidsYoga categoryId={CATEGORY_MAPPING.KIDS_YOGA} />
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
            path: "oxygen-bar",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <OxygenBar categoryId={CATEGORY_MAPPING.OXYGEN_BAR} />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "oxygen-soak",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <OxygenFootSoak
                    categoryId={CATEGORY_MAPPING.OXYGEN_FOOT_SOAK}
                  />
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
            path: "about",
            element: (
              <ServiceContainer>
                <Suspense fallback={<Loader />}>
                  <SalonAbout />
                </Suspense>
              </ServiceContainer>
            ),
          },
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
          {
            path: "mani-pedi",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <ManiPedi categoryId={CATEGORY_MAPPING.MANI_PEDI} />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "makeup",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <Makeup categoryId={CATEGORY_MAPPING.MAKEUP} />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "mens",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <Mens categoryId={CATEGORY_MAPPING.SALON_MENS} />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "natural-styling",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <NaturalStyling
                    categoryId={CATEGORY_MAPPING.NATURAL_STYLING}
                  />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "perms",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <Perms categoryId={CATEGORY_MAPPING.PERMS} />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "sets-twists",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <SetsTwists categoryId={CATEGORY_MAPPING.SETS_TWISTS} />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "spec-with-ext",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <SpecialtyExtensions
                    categoryId={CATEGORY_MAPPING.SPECIALTY}
                  />
                </Suspense>
              </ServiceContainer>
            ),
          },
          {
            path: "straightening-services",
            element: (
              <ServiceContainer>
                <Suspense fallback={<SkeletonLoader />}>
                  <StraighteningServices
                    categoryId={CATEGORY_MAPPING.STRAIGHTENING}
                  />
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
