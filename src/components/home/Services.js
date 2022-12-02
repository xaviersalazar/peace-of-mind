import { useNavigate } from "react-router-dom";
import GradientFont from "../shared/GradientFont";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Massages",
    desc: "You will leave completely rejuvenated",
    imgName: "massage",
    link: "/services/massages",
  },
  {
    title: "Haircuts",
    desc: "Haircuts for women, men, and kids",
    imgName: "haircut",
    link: "/salon/haircuts",
  },
  {
    title: "Mani/Pedi",
    desc: "Therapeutic nail and feet services",
    imgName: "mani-pedi",
    link: "/salon/mani-pedi",
  },
  {
    title: "Facials",
    desc: "Treatments that'll make your face radiate",
    imgName: "facials",
    link: "/services/facials",
  },
  {
    title: "Waxing",
    desc: "Full service waxing",
    imgName: "wax",
    link: "/services/waxes",
  },
  {
    title: "Hair Coloring",
    desc: "Our Organic Colour system is sure to make your hair stand out",
    imgName: "hair-color",
    link: "/salon/hair-coloring",
  },
  {
    title: "Makeup",
    desc: "Professional makeup application for any event",
    imgName: "make-up",
    link: "/salon/makeup",
  },
  {
    title: "Infrared Sauna",
    desc: "Color light therapy proven to help you heal",
    imgName: "sauna",
    link: "/services/infrared-sauna",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="relative mb-14 text-right" id="services">
      <div className="relative mb-2">
        <div className="mb-5 px-10 pt-10 pb-0 lg:px-20 xl:px-[7rem]">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Some of{" "}
            <GradientFont
              className="text-3xl font-bold md:text-4xl lg:text-5xl"
              deg={45}
              colors={["#c6ffdd", "#fbd786", "#f7797d"]}
            >
              our services
            </GradientFont>{" "}
          </h1>
          <p className="text-xs font-light text-slate-400 text-right">
            Click a service to view more
          </p>
        </div>
        <div
          className="grid grid-cols-2 grid-rows-4 gap-y-8 gap-x-8 px-10 md:grid-cols-4 md:grid-rows-2 lg:gap-x-12 lg:pr-20 lg:ml-24 xl:pr-[7rem] xl:ml-72 2xl:ml-[48rem]"
          id="services-cards"
        >
          {services.map((service, i) => (
            <ServiceCard
              className={`card-${i}`}
              key={i}
              id={`${i}`}
              onClick={() => navigate(service.link)}
              {...service}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
