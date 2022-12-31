import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { Button, Section } from "../shared";
import Services from "./Services";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
        }}
        id="hero"
      >
        <div className="hero-overlay bg-slate-900 bg-opacity-30" />
        <div className="hero-content">
          <div className="max-w text-center">
            <img src={`${process.env.PUBLIC_URL}/logo-main.png`} />
          </div>
        </div>
      </div>
      <div
        className="text-center pb-10 pt-10 px-10 md:p-16 lg:p-20 xl:p-[7rem]"
        id="massage-row"
      >
        <h1 className="text-4xl font-extra-bold md:text-5xl xl:text-6xl">
          Message Therapy <br className="lg:hidden" /> & Natural Healing
        </h1>
        <hr className="w-2/4 lg:w-2/3 xl:w-6/12 mx-auto my-4 border-slate-100" />
        <Section>
          Come in today for a Singles Massage Session or a Couples Discounted
          Massage Packet. We use all organic massage products using plants,
          fresh herbs and oils. We are unlike your everyday Day Spa. We are a
          private practice not corporate. We cater to just you when you arrive.
          We help ease all your aches and pains helping you find true Peace Of
          Mind.
        </Section>
      </div>
      <div
        className="text-center pb-10 pt-10 px-10 md:p-16 lg:p-20 xl:p-[7rem] bg-slate-50"
        id="salon-row"
      >
        <h1 className="text-4xl font-extra-bold md:text-5xl xl:text-6xl">
          We're also a Salon
        </h1>
        <hr className="w-2/4 lg:w-4/12 xl:w-2/12 mx-auto my-4 border-slate-200" />
        <Section>
          We are a Dyson inspired Salon and we are sticking to our organic
          concept in every aspect. We strongly believe in being green and an
          environmentally conscious business. In saying that, we are bringing an
          all organic hair coloring line called Organic Colour Systems from the
          United Kingdom. We will be the only Salon in Corpus Christi and
          throughout the State of Texas offering this Organic Colour System.
        </Section>
        <Button
          btnType="outline"
          icon={<FiArrowRight className="inline ml-2 mb-0.5" />}
          iconSide="right"
          onClick={() => navigate("/contact")}
        >
          Book An Appointment
        </Button>
      </div>
      <div
        className="text-center pb-10 pt-10 px-10 md:p-16 lg:p-20 xl:p-[7rem]"
        id="support-local-row"
      >
        <h1 className="text-4xl font-extra-bold md:text-5xl xl:text-6xl">
          Support Local
        </h1>
        <hr className="w-2/4 md:w-4/12 xl:w-2/12 mx-auto my-4 border-slate-100" />
        <Section>
          If you want, and are able to, to support them right now, buy a gift
          certificate from them, shop in their online stores, pre book your
          future appointments and check in on them from time to time. Not only
          us, but all small businesses. Together we can as a community overcome
          this in peace and unity. We love you all, you are not only friends but
          our family.
        </Section>
        <Button
          btnType="outline"
          icon={<FiArrowRight className="inline ml-2 mb-0.5" />}
          iconSide="right"
          onClick={() => navigate("/contact")}
        >
          Inquire About Gift Card
        </Button>
      </div>
      <div
        className="text-center pb-10 pt-10 px-10 md:p-16 lg:p-20 xl:p-[7rem] bg-slate-50"
        id="spa-boxes-row"
      >
        <h1 className="text-4xl font-extra-bold md:text-5xl xl:text-6xl">
          Spa boxes <br className="lg:hidden" /> now available!
        </h1>
        <hr className="w-2/4 md:w-4/12 lg:w-6/12 xl:w-4/12 mx-auto my-4 border-slate-200" />
        <div className="mt-2 mb-4" id="large-spa-box">
          <h1 className="text-xl font-medium mb-2 lg:text-2xl">
            Large Spa Box{" "}
            <span className="text-xs font-light text-slate-400">$162.00</span>
          </h1>
          <Section>
            Peace of Mind Spa Box! The contents include a medical grade hand
            sanitizer, all-in-one organic hand manufactured lotion to use as a
            shaving cream, deodorant, or lotion, CBD bar of soap from Leef
            Organics with an Organic Garden Handmade Spa Detoxifying Body Scrub,
            Leef CBD Bath Detox, and a Organic Body Detox Breathing Treatment
            Spray. Also includes a $10.00 gift card towards any service.
          </Section>
        </div>
        <div id="small-spa-box">
          <h1 className="text-xl font-medium mb-2 lg:text-2xl">
            Small Spa Box{" "}
            <span className="text-xs font-light text-slate-400">$102.00</span>
          </h1>
          <Section>
            We also have a smaller option that comes with the medical grade hand
            sanitizer spray, Organic Body Detox Breathing Treatment Spray,
            all-in-one organic hand manufactured lotion to use a shaving cream,
            deodorant, or lotion, and a Organic Colour Systems Aqua Boost travel
            size take home shampoo and conditioner. Also includes a $5.00 gift
            card towards any service.
          </Section>
        </div>
        <Button
          btnType="outline"
          icon={<FiArrowRight className="inline ml-2 mb-0.5" />}
          iconSide="right"
          onClick={() => navigate("/contact")}
        >
          Contact Us About One!
        </Button>
      </div>
      <Services />
    </>
  );
};

export default Home;
