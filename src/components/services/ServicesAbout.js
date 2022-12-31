import { Section } from "../shared";
import { ABOUT_DATA } from "./aboutData";

const ServicesAbout = () => (
  <>
    <div
      className="hero h-[40vh] xl:h-[50vh]"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/about-services.jpg)`,
      }}
      id="hero"
    >
      <div className="hero-overlay bg-slate-900 bg-opacity-75" />
      <div className="hero-content mt-8">
        <div className="max-w text-center">
          <h1 className="text-4xl font-extra-bold text-white md:text-5xl xl:text-6xl">
            Our Services
          </h1>
          <p className="text-xs font-light text-slate-400 text-center md:text-sm">
            We're here to help you feel better
          </p>
        </div>
      </div>
    </div>
    <div className="text-center pb-10 pt-10 px-10 md:p-16 lg:p-20 xl:p-[7rem]">
      <h1 className="text-4xl font-extra-bold md:text-5xl lg:text-6xl">
        Why a massage?
      </h1>
      <hr className="w-2/4 md:w-6/12 xl:w-3/12 mx-auto my-4 border-slate-100" />
      <Section>
        We all have stress, tension, aches and pains that we experience and need
        to give attention to, in order to take care of our bodies, we only get
        one body. Everyone experiences stress from everyday living, we feel
        tension laced throughout or muscles sometimes accompanied by aches and
        pain from old accidents, medical conditions, and repetitive hard work we
        put our bodies thought daily. No matter what your occupation is working
        too long without a break creates tension in your back, shoulders, and
        neck muscles, tired eyes , and slower,more easily irritated mental
        process.
      </Section>
      <Section>
        Human touch increases the production of endorphins, growth hormone,
        along with DHEA, all of which lengthen your life span and lower the
        negative impact of stress. Studies have found that patients who are
        regularly touched recover faster than those who are not touched. So get
        a massage and feel your mood improve.
      </Section>
      <Section>
        We have heard many people complain of being over medicated, tired and
        stressed. With every massage we give the option to mankind’s first
        medicine which consists of 100% natural oils combined in to your massage
        cream or oils, and other healing earth products.
      </Section>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-y-8 md:gap-x-8 mt-8 mb-4">
        {ABOUT_DATA.map(({ title, imgName, items }) => (
          <div
            key={title}
            className="card md:col-span-2 md:last:col-span-2 lg:col-span-4 lg:last:col-span-4 lg:[&:nth-last-child(2)]:col-start-3 md:last:col-start-2 border-none rounded-2xl bg-slate-50"
          >
            <figure>
              <img
                src={`${process.env.REACT_APP_BUCKETEER_URL}/public/services/${imgName}.jpg`}
                alt={imgName}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h1 className="card-title text-center justify-center">{title}</h1>
              <ul className="list-none space-y-3 w-full text-sm font-light text-slate-400">
                {items.map((item) => (
                  <li key={item} className="w-fit mx-auto">
                    {item}
                    <div className="h-0.5 w-full mx-auto mt-2 rounded-2xl bg-slate-200" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default ServicesAbout;
