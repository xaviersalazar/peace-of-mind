import { lazy, Suspense } from "react";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import Login from "./auth/Login";
import Protected from "./auth/Protected";
import DashboardLayout from "./admin/layout/DashboardLayout";
import Services from "./admin/services/Services";
import { Loader, ServiceContainer, SkeletonLoader } from "./shared";
import { CATEGORY_MAPPING } from "./utils/categoryMapping";

// Public => About
const About = lazy(() => import("./about/About"));

// Public => Contact
const Contact = lazy(() => import("./contact/Contact"));

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
const ServicesTable = lazy(() => import("./admin/services/ServicesTable"));
const EditService = lazy(() => import("./admin/services/EditService"));

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
            <ServiceContainer
              imgPath="about.jpeg"
              title="About Us"
              subTitle="Woman owned, rooted in downtown Corpus Christi"
            >
              <About />
            </ServiceContainer>
          </Suspense>
        ),
      },
      {
        path: "besame",
        children: [
          {
            path: "about",
            element: (
              <Suspense fallback={<Loader />}>
                <ServiceContainer
                  imgPath="besame/about-besame.jpg"
                  title="About Besame"
                  subTitle="Classic, high quality, luxury makeup"
                >
                  <BesameAbout />
                </ServiceContainer>
              </Suspense>
            ),
          },
          {
            path: "eyes",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <BesameEyes categoryId={CATEGORY_MAPPING.BESAME_EYES} />
              </Suspense>
            ),
          },
          {
            path: "face",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <BesameFace categoryId={CATEGORY_MAPPING.BESAME_EYES} />
              </Suspense>
            ),
          },
          {
            path: "lips",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <BesameLips categoryId={CATEGORY_MAPPING.BESAME_LIPS} />
              </Suspense>
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
              <Suspense fallback={<Loader />}>
                <ServiceContainer
                  imgPath="services/about-services.jpg"
                  title="Our Services"
                  subTitle="We're here to help you feel better"
                >
                  <ServicesAbout />
                </ServiceContainer>
              </Suspense>
            ),
          },
          {
            path: "add-ons",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <AddOns categoryId={CATEGORY_MAPPING.ADD_ONS} />
              </Suspense>
            ),
          },
          {
            path: "bbl-fat-elim",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <BreastButtLiftFatElim
                  categoryId={CATEGORY_MAPPING.BREAST_BUTT_LIFT_FAT_ELIM}
                />
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
          {
            path: "facials",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Facials categoryId={CATEGORY_MAPPING.FACIALS} />
              </Suspense>
            ),
          },
          {
            path: "facial-enhance",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <FacialEnhancements
                  categoryId={CATEGORY_MAPPING.FACIAL_ENHANCEMENTS}
                />
              </Suspense>
            ),
          },
          {
            path: "health-coaching",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <HealthCoaching categoryId={CATEGORY_MAPPING.HEALTH_COACHING} />
              </Suspense>
            ),
          },
          {
            path: "infrared-sauna",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <InfraredSauna categoryId={CATEGORY_MAPPING.INFRARED_SAUNA} />
              </Suspense>
            ),
          },
          {
            path: "kids-yoga",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <KidsYoga categoryId={CATEGORY_MAPPING.KIDS_YOGA} />
              </Suspense>
            ),
          },
          {
            path: "massages",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Massages categoryId={CATEGORY_MAPPING.MASSAGES} />
              </Suspense>
            ),
          },
          {
            path: "oxygen-bar",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <OxygenBar categoryId={CATEGORY_MAPPING.OXYGEN_BAR} />
              </Suspense>
            ),
          },
          {
            path: "oxygen-soak",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <OxygenFootSoak
                  categoryId={CATEGORY_MAPPING.OXYGEN_FOOT_SOAK}
                />
              </Suspense>
            ),
          },
          {
            path: "scrubs-weightloss",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <ScrubsWeightloss
                  categoryId={CATEGORY_MAPPING.SCRUBS_WEIGHTLOSS}
                />
              </Suspense>
            ),
          },
          {
            path: "waxes",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Waxes categoryId={CATEGORY_MAPPING.WAXES} />
              </Suspense>
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
              <Suspense fallback={<Loader />}>
                <ServiceContainer
                  imgPath="salon/about-salon.jpg"
                  title="Our Salon"
                  subTitle="We use trusted, organic products"
                >
                  <SalonAbout />
                </ServiceContainer>
              </Suspense>
            ),
          },
          {
            path: "eyes",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <SalonEyes categoryId={CATEGORY_MAPPING.SALON_EYES} />
              </Suspense>
            ),
          },
          {
            path: "finishing-touches",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <FinishingTouches
                  categoryId={CATEGORY_MAPPING.FINISHING_TOUCHES}
                />
              </Suspense>
            ),
          },
          {
            path: "haircuts",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Haircuts categoryId={CATEGORY_MAPPING.HAIRCUTS} />
              </Suspense>
            ),
          },
          {
            path: "hair-coloring",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <HairColoring categoryId={CATEGORY_MAPPING.HAIR_COLORING} />
              </Suspense>
            ),
          },
          {
            path: "hair-ext",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <HairExtensions categoryId={CATEGORY_MAPPING.HAIR_EXTENSIONS} />
              </Suspense>
            ),
          },
          {
            path: "hair-highlights",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <HairHighlights categoryId={CATEGORY_MAPPING.HAIR_HIGHLIGHTS} />
              </Suspense>
            ),
          },
          {
            path: "hair-treatments",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <HairTreatments categoryId={CATEGORY_MAPPING.HAIR_TREATMENTS} />
              </Suspense>
            ),
          },
          {
            path: "locs",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Locs categoryId={CATEGORY_MAPPING.LOCS} />
              </Suspense>
            ),
          },
          {
            path: "mani-pedi",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <ManiPedi categoryId={CATEGORY_MAPPING.MANI_PEDI} />
              </Suspense>
            ),
          },
          {
            path: "makeup",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Makeup categoryId={CATEGORY_MAPPING.MAKEUP} />
              </Suspense>
            ),
          },
          {
            path: "mens",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Mens categoryId={CATEGORY_MAPPING.SALON_MENS} />
              </Suspense>
            ),
          },
          {
            path: "natural-styling",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <NaturalStyling categoryId={CATEGORY_MAPPING.NATURAL_STYLING} />
              </Suspense>
            ),
          },
          {
            path: "perms",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Perms categoryId={CATEGORY_MAPPING.PERMS} />
              </Suspense>
            ),
          },
          {
            path: "sets-twists",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <SetsTwists categoryId={CATEGORY_MAPPING.SETS_TWISTS} />
              </Suspense>
            ),
          },
          {
            path: "spec-with-ext",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <SpecialtyExtensions categoryId={CATEGORY_MAPPING.SPECIALTY} />
              </Suspense>
            ),
          },
          {
            path: "straightening-services",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <StraighteningServices
                  categoryId={CATEGORY_MAPPING.STRAIGHTENING}
                />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <ServiceContainer>
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
    ],
  },
  {
    path: "admin",
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
        element: <Services />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <Protected>
                  <ServicesTable />
                </Protected>
              </Suspense>
            ),
          },
          {
            path: ":id",
            element: (
              <Suspense fallback={<Loader />}>
                <Protected>
                  <EditService />
                </Protected>
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
];

export default routes;
