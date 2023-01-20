import { FiCheckCircle } from "react-icons/fi";
import { Section } from "../shared";
import { ABOUT_DATA } from "./aboutData";

const ServicesAbout = () => (
  <>
    <h1 className="text-4xl font-extra-bold md:text-5xl lg:text-6xl">
      Why a massage?
    </h1>
    <hr className="w-2/4 md:w-6/12 xl:w-3/12 mx-auto my-4 border-slate-100" />
    <Section>
      We all have stress, tension, aches and pains that we experience and need
      to give attention to, in order to take care of our bodies, we only get one
      body. Everyone experiences stress from everyday living, we feel tension
      laced throughout or muscles sometimes accompanied by aches and pain from
      old accidents, medical conditions, and repetitive hard work we put our
      bodies thought daily. No matter what your occupation is working too long
      without a break creates tension in your back, shoulders, and neck muscles,
      tired eyes , and slower,more easily irritated mental process.
    </Section>
    <Section>
      Human touch increases the production of endorphins, growth hormone, along
      with DHEA, all of which lengthen your life span and lower the negative
      impact of stress. Studies have found that patients who are regularly
      touched recover faster than those who are not touched. So get a massage
      and feel your mood improve.
    </Section>
    <Section>
      We have heard many people complain of being over medicated, tired and
      stressed. With every massage we give the option to mankind’s first
      medicine which consists of 100% natural oils combined in to your massage
      cream or oils, and other healing earth products.
    </Section>
    <div className="flex flex-wrap gap-6 mt-12" id="ir-benefits">
      {ABOUT_DATA.map(({ title, imgName, items }, i) => (
        <div
          key={i}
          className="bg-slate-50 card border-none rounded-2xl flex-1 basis-full md:basis-1/3 lg:basis-1/4"
        >
          <figure>
            <img
              className="w-10/12 xl:w-8/12 rounded-xl mx-auto mt-12"
              src={`${process.env.REACT_APP_BUCKETEER_URL}/public/services/${imgName}.jpg`}
              alt="benefit"
            />
          </figure>
          <div className="card-body items-center text-center flex-none">
            <h1 className="card-title text-center justify-center">{title}</h1>
            <hr className="w-2/4 md:w-6/12 xl:w-3/12 mx-auto my-1 border-slate-100" />
            <ul className="list-none space-y-3 w-full text-sm font-light text-slate-400">
              {items.map((item) => (
                <li key={item} className="w-fit mx-auto relative">
                  <FiCheckCircle className="inline text-[0.75em] text-primary mr-1" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default ServicesAbout;
