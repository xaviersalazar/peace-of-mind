import { useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { ServiceCard } from "./ServiceCard";
import useDrag from "../../../utils/useDrag";

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

export const Services = () => {
  const { dragStart, dragStop, dragMove, dragging } = useDrag();

  const [selected, setSelected] = useState("");

  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const handleItemClick = (itemId) => {
    if (dragging) {
      return false;
    }
    console.log("clicked: ", services[itemId]);
    setSelected(selected !== itemId ? itemId : "");
  };

  const onWheel = (apiObj, ev) => {
    const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isTouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  };

  return (
    <div className="relative mb-14 text-right" id="services">
      <div className="relative mb-2">
        <h1 className="text-3xl font-bold">
          Our{" "}
          <span className="gradient-font-7 text-3xl font-bold">services</span>{" "}
        </h1>
        <p className="text-xs font-really-light text-slate-500 mb-5">
          Select a service to see more
        </p>
        <div className="grid grid-rows-none auto-cols-fr" id="services-cards">
          <ScrollMenu
            onWheel={onWheel}
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
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
          </ScrollMenu>
        </div>
      </div>
    </div>
  );
};
