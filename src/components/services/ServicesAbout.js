import { StrikethruText } from "../shared";
import { ABOUT_DATA } from "./aboutData";

const Text = ({ children }) => (
  <p className="text-sm font-light text-slate-500 mb-2">{children}</p>
);

const ServicesAbout = () => (
  <div className="h-full mb-16 text-center">
    <img
      className="w-max rounded-2xl mb-4 mx-auto md:w-1/2 xl:w-1/4"
      src={`${process.env.PUBLIC_URL}/about-services.jpg`}
      alt="about-services"
    />
    <div className="w-full mx-auto">
      <h1 className="relative text-5xl md:text-6xl font-extra-bold">
        <StrikethruText
          text="Our Services"
          color="#ACD2ED"
          height="h-4 md:h-5"
          position="bottom-1.5"
        />
      </h1>
      <p className="text-xs font-light text-slate-400 text-center mb-4 md:text-sm">
        Why should you get a massage?
      </p>
      <Text>
        We all have stress, tension, aches and pains that we experience and need
        to give attention to, in order to take care of our bodies, we only get
        one body. Everyone experiences stress from everyday living, we feel
        tension laced throughout or muscles sometimes accompanied by aches and
        pain from old accidents, medical conditions, and repetitive hard work we
        put our bodies thought daily. No matter what your occupation is working
        too long without a break creates tension in your back, shoulders, and
        neck muscles, tired eyes , and slower,more easily irritated mental
        process.
      </Text>
      <Text>
        Human touch increases the production of endorphins, growth hormone,
        along with DHEA, all of which lengthen your life span and lower the
        negative impact of stress. Studies have found that patients who are
        regularly touched recover faster than those who are not touched. So get
        a massage and feel your mood improve.
      </Text>
      <Text>
        We have heard many people complain of being over medicated, tired and
        stressed. With every massage we give the option to mankind’s first
        medicine which consists of 100% natural oils combined in to your massage
        cream or oils, and other healing earth products.
      </Text>
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2 xl:grid-cols-6 2xl:px-64">
        {ABOUT_DATA.map(({ title, items }) => (
          <div
            key={title}
            className="md:col-span-1 md:last:col-span-2 xl:col-span-2 xl:last:col-span-3 xl:last:mr-48 xl:[&:nth-last-child(2)]:col-span-3 xl:[&:nth-last-child(2)]:ml-48 card border-none"
          >
            <div className="flex flex-col px-4 py-6 text-center self-center w-full h-full">
              <div className="mb-4">
                <div className="relative w-fit mx-auto">
                  <div className="text-2xl font-bold text-slate-700 self-center">
                    <StrikethruText text={title} color="#ACD2ED" />
                  </div>
                  <ul className="list-inside marker:text-[#ACD2ED] list-disc space-y-1 text-xs md:text-sm text-slate-500 font-light">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ServicesAbout;
