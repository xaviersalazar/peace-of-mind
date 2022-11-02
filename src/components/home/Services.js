import { useState } from "react";
import GradientFont from "../shared/GradientFont";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Massages",
    desc: "You will leave completely rejuvenated",
    imgName: "massage",
  },
  {
    title: "Haircuts",
    desc: "Haircuts for women, men, and kids",
    imgName: "haircut",
  },
  {
    title: "Mani/Pedi",
    desc: "Therapeutic nail and feet services",
    imgName: "mani-pedi",
  },
  {
    title: "Facials",
    desc: "Treatments surely to make your face radiate",
    imgName: "facials",
  },
  {
    title: "Waxing",
    desc: "Full service waxing",
    imgName: "wax",
  },
  {
    title: "Hair Coloring",
    desc: "Hair coloring options surely to suite your needs",
    imgName: "hair-color",
  },
  {
    title: "Makeup",
    desc: "Professional makeup application for any event",
    imgName: "make-up",
  },
  {
    title: "Infrared Sauna",
    desc: "Detoxify your body in our sauna",
    imgName: "infrared-sauna",
  },
];

const Services = () => {
  const [selected, setSelected] = useState("");

  const handleItemClick = (itemId) => {
    setSelected(selected !== itemId ? itemId : "");
  };

  return (
    <div className="relative mb-14 text-right" id="services">
      <div className="relative mb-2">
        <div className="px-10 pt-10 pb-0 lg:px-20 xl:px-[7rem]">
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
          <p className="text-xs font-extra-light text-slate-500 mb-5 md:text-sm">
            Select a service to see more
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
              onClick={handleItemClick}
              selected={`${i}` === selected}
              {...service}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
