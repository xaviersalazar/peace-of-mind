import { Card } from "react-daisyui";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { ServiceCard } from "./ServiceCard";

const { Title } = Card;

const services = [
  {
    imgWidth: 84,
    imgName: "massage-icon",
    title: "Massage",
    desc: "You will leave completely rejuvenated",
  },
  {
    imgWidth: 68,
    imgName: "salon-icon",
    title: "Salon",
    desc: "Salon services of the highest quality",
  },
  {
    imgWidth: 128,
    imgName: "couples-icon",
    title: "Couples",
    desc: "Stimulating massages for the couples",
  },
  {
    imgWidth: 92,
    imgName: "facials-icon",
    title: "Facials",
    desc: "Treatments surely to make your face radiate",
  },
  {
    imgWidth: 84,
    imgName: "waxes-icon",
    title: "Waxing",
    desc: "Full service waxing",
  },
  {
    imgWidth: 92,
    imgName: "scrubs-weightloss-icon",
    title: "Scrubs/ Weightloss",
    desc: "Our deep scrubs and weight-loss treatments",
  },
  {
    imgWidth: 92,
    imgName: "infrared-sauna-icon",
    title: "Infrared Sauna",
    desc: "Infrared light therapy to help you heal",
  },
  {
    imgWidth: 84,
    imgName: "oxy-bar-icon",
    title: "Oxygen Bar",
    desc: "Oxygen rejuvenation for the brain",
  },
  {
    imgWidth: 68,
    imgName: "oxy-foot-soak-icon",
    title: "Oxygen Foot Soak",
    desc: "Detox the impurities from your body",
  },
  {
    imgWidth: 64,
    imgName: "add-ons-icon",
    title: "Add-on Services",
    desc: "Services to add onto your massages, etc",
  },
];

export const Services = () => (
  <div className="relative mb-14 text-right" id="services">
    <div className="relative mb-2">
      <h1 className="text-3xl font-bold">
        Our <span className="gradient-font-7 text-3xl font-bold">services</span>{" "}
      </h1>
      <p className="text-xs font-really-light text-slate-500 mb-5">
        Select a service to see more
      </p>
      <div className="grid grid-rows-3 grid-cols-2 gap-4" id="services-cards">
        {services.map((service) => (
          <ServiceCard key={service.imgName} {...service} />
        ))}
      </div>
    </div>
  </div>
);
