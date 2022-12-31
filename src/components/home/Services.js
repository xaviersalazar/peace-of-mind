import { useNavigate } from "react-router-dom";
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
    imgName: "haircuts",
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
    imgName: "waxes",
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
    <div
      className="text-center pb-10 pt-10 px-10 lg:p-20 xl:p-[7rem]"
      id="services-row"
    >
      <h1 className="text-4xl font-extra-bold md:text-5xl xl:text-6xl">
        Some of <br className="lg:hidden" /> our services
      </h1>
      <hr className="w-2/4 md:w-1/4 lg:w-4/12 xl:w-3/12 mx-auto my-4 border-slate-100" />
      <p className="text-xs font-extra-light italic text-slate-400">
        To view all our services, please use the menu
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-8 md:gap-x-8 mt-8 mb-4">
        {services.map((service, i) => (
          <ServiceCard
            key={i}
            onClick={() => navigate(service.link)}
            {...service}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
