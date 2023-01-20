import { lazy, Suspense } from "react";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import Login from "./auth/Login";
import Protected from "./auth/Protected";
import DashboardLayout from "./admin/layout/DashboardLayout";
import Services from "./admin/services/Services";
import { Loader, Container, SkeletonLoader } from "./shared";
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
            <Container
              imgPath="about.jpg"
              title="About Us"
              subTitle="Woman owned, rooted in downtown Corpus Christi"
            >
              <About />
            </Container>
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
                <Container
                  imgPath="besame/about-besame.jpg"
                  title="About Besame"
                  subTitle="Classic, high quality, luxury makeup"
                >
                  <BesameAbout />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "eyes",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="besame/eyes/eyes-main.jpg"
                  title="Eyes"
                  subTitle="Besame eye products"
                >
                  <BesameEyes categoryId={CATEGORY_MAPPING.BESAME_EYES} />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "face",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="besame/face/face-main.jpg"
                  title="Face"
                  subTitle="Besame face products"
                >
                  <BesameFace categoryId={CATEGORY_MAPPING.BESAME_FACE} />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "lips",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="besame/lipsticks/lips-main.jpg"
                  title="Lips"
                  subTitle="Besame lip products"
                >
                  <BesameLips categoryId={CATEGORY_MAPPING.BESAME_LIPS} />
                </Container>
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
                <Container
                  imgPath="services/about-services.jpg"
                  title="Our Services"
                  subTitle="We're here to help you feel better"
                >
                  <ServicesAbout />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "add-ons",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="services/addons-main.jpg"
                  title="Add On's"
                  subTitle={
                    <>
                      Give your session something{" "}
                      <span className="italic">extra</span>
                    </>
                  }
                >
                  <AddOns categoryId={CATEGORY_MAPPING.ADD_ONS} />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "bbl-fat-elim",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="services/breast-buttlift-main.jpg"
                  title="Breast/Butt Lift & Fat Eliminator"
                  subTitle="Treat yourself to our non-surgical lifts & fat eliminators"
                >
                  <BreastButtLiftFatElim
                    categoryId={CATEGORY_MAPPING.BREAST_BUTT_LIFT_FAT_ELIM}
                  />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "deluxe-couples",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="services/massage-couples-main.jpg"
                  title="Deluxe & Couples"
                  subTitle="Stimulating massages for the couples"
                >
                  <DeluxeCouplesMassages
                    categoryId={CATEGORY_MAPPING.DELUXE_COUPLES}
                  />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "facials",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="services/facials-main.jpg"
                  title="Facials"
                  subTitle="Treatments that'll make your face radiate"
                >
                  <Facials categoryId={CATEGORY_MAPPING.FACIALS} />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "facial-enhance",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="services/facial-enhancements-main.jpg"
                  title="Facial Enhancements"
                  subTitle="Cleanse and purify your face"
                >
                  <FacialEnhancements
                    categoryId={CATEGORY_MAPPING.FACIAL_ENHANCEMENTS}
                  />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "health-coaching",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="services/health-coach-main.jpg"
                  title="Health Coaching"
                  subTitle="Plans customized just for you"
                >
                  <HealthCoaching
                    categoryId={CATEGORY_MAPPING.HEALTH_COACHING}
                  />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "infrared-sauna",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="services/infrared-sauna-main.jpg"
                  title="Infrared Sauna"
                  subTitle={
                    <>
                      <span className="text-red-300">C</span>
                      <span className="text-blue-300">o</span>
                      <span className="text-yellow-300">l</span>
                      <span className="text-orange-300">o</span>
                      <span className="text-green-300">r</span> light therapy
                      proven to help you heal
                    </>
                  }
                >
                  <InfraredSauna categoryId={CATEGORY_MAPPING.INFRARED_SAUNA} />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "kids-yoga",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="services/kids-yoga-main.jpg"
                  title="Kids Yoga"
                  subTitle="Engaging yoga that the kids will love"
                >
                  <KidsYoga categoryId={CATEGORY_MAPPING.KIDS_YOGA} />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "massages",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="services/massage-main.jpg"
                  title="Massages"
                  subTitle="You'll leave completely rejuvenated"
                >
                  <Massages categoryId={CATEGORY_MAPPING.MASSAGES} />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "oxygen-bar",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="services/oxygen-main.jpg"
                  title="Oxygen Bar"
                  subTitle={
                    <>
                      Gain a new level relaxation in our{" "}
                      <span className="relative">
                        <span>O</span>
                        <span className="absolute top-1 md:top-1.5 text-[0.6rem] text-xs">
                          2
                        </span>
                      </span>{" "}
                      <span className="ml-1">bar</span>
                    </>
                  }
                >
                  <OxygenBar categoryId={CATEGORY_MAPPING.OXYGEN_BAR} />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "oxygen-soak",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="services/oxygen-foot-soak-main.jpg"
                  title="Oxygen Foot Soak"
                  subTitle="Purify your body"
                >
                  <OxygenFootSoak
                    categoryId={CATEGORY_MAPPING.OXYGEN_FOOT_SOAK}
                  />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "scrubs-weightloss",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="services/scrub-weightloss-main.jpg"
                  title="Scrubs & Weightloss"
                  subTitle="Our deep scrubs and weightloss treatments"
                >
                  <ScrubsWeightloss
                    categoryId={CATEGORY_MAPPING.SCRUBS_WEIGHTLOSS}
                  />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "waxes",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="services/waxing-main.jpg"
                  title="Waxes"
                  subTitle="Full service waxing"
                >
                  <Waxes categoryId={CATEGORY_MAPPING.WAXES} />
                </Container>
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
                <Container
                  imgPath="salon/about-salon.jpg"
                  title="Our Salon"
                  subTitle="We use trusted, organic products"
                >
                  <SalonAbout />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "eyes",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="salon/eyes-main.jpg"
                  title="Eyes"
                  subTitle="Makeup application and service for the eyes"
                >
                  <SalonEyes categoryId={CATEGORY_MAPPING.SALON_EYES} />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "finishing-touches",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="salon/finishing-touches-main.jpg"
                  title="Finishing Touches"
                  subTitle={
                    <>
                      Give your hair some <span className="italic">extra</span>{" "}
                      care
                    </>
                  }
                >
                  <FinishingTouches
                    categoryId={CATEGORY_MAPPING.FINISHING_TOUCHES}
                  />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "haircuts",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="salon/haircuts-main.jpg"
                  title="Haircuts"
                  subTitle="Haircuts for any style or need"
                >
                  <Haircuts categoryId={CATEGORY_MAPPING.HAIRCUTS} />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "hair-coloring",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="salon/haircolor-main.jpg"
                  title="Hair Coloring"
                  subTitle="Our Organic Colour System is sure to make your hair stand out"
                >
                  <HairColoring categoryId={CATEGORY_MAPPING.HAIR_COLORING} />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "hair-ext",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="salon/hair-ext-main.jpg"
                  title="Hair Extensions"
                  subTitle="High quality extensions installation"
                >
                  <HairExtensions
                    categoryId={CATEGORY_MAPPING.HAIR_EXTENSIONS}
                  />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "hair-highlights",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="salon/highlight-main.jpg"
                  title="Hair Highlights"
                  subTitle="Make your hair shine with our highlights"
                >
                  <HairHighlights
                    categoryId={CATEGORY_MAPPING.HAIR_HIGHLIGHTS}
                  />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "hair-treatments",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="salon/hair-treatments-main.jpg"
                  title="Hair Treatments"
                  subTitle="Treatments to improve your hairs health and growth"
                >
                  <HairTreatments
                    categoryId={CATEGORY_MAPPING.HAIR_TREATMENTS}
                  />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "locs",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="salon/locs-main.jpg"
                  title="Locs"
                  subTitle="All your loc needs"
                >
                  <Locs categoryId={CATEGORY_MAPPING.LOCS} />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "mani-pedi",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="salon/manicures-main.png"
                  title="Manicures & Pedicures"
                  subTitle="Therapeutic nail and feet services"
                >
                  <ManiPedi categoryId={CATEGORY_MAPPING.MANI_PEDI} />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "makeup",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="salon/makeup-main.jpg"
                  title="Makeup"
                  subTitle="Professional makeup application for any event"
                >
                  <Makeup categoryId={CATEGORY_MAPPING.MAKEUP} />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "mens",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="salon/mens-main.jpg"
                  title="Mens Services"
                  subTitle="Mens styling and cuts"
                >
                  <Mens categoryId={CATEGORY_MAPPING.SALON_MENS} />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "natural-styling",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="salon/natural-main.jpg"
                  title="Natural Styling"
                  subTitle="Styling that looks and feels natural"
                >
                  <NaturalStyling
                    categoryId={CATEGORY_MAPPING.NATURAL_STYLING}
                  />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "perms",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="salon/perms-main.jpg"
                  title="Perms"
                  subTitle="Permanent hairstyles with a natural look"
                >
                  <Perms categoryId={CATEGORY_MAPPING.PERMS} />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "sets-twists",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="salon/sets-main.jpg"
                  title="Sets & Twists"
                  subTitle="Professional, natural looking twists"
                >
                  <SetsTwists categoryId={CATEGORY_MAPPING.SETS_TWISTS} />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "spec-with-ext",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="salon/specialty-main.jpg"
                  title="Specialty with Extensions"
                  subTitle="High quality specialty hairstyles"
                >
                  <SpecialtyExtensions
                    categoryId={CATEGORY_MAPPING.SPECIALTY}
                  />
                </Container>
              </Suspense>
            ),
          },
          {
            path: "straightening-services",
            element: (
              <Suspense fallback={<SkeletonLoader />}>
                <Container
                  imgPath="salon/straightening-main.jpg"
                  title="Straightening Services"
                  subTitle="Straightening touch-ups and haircuts"
                >
                  <StraighteningServices
                    categoryId={CATEGORY_MAPPING.STRAIGHTENING}
                  />
                </Container>
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
          <Container>
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
          </Container>
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
