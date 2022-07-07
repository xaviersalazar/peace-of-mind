import { Section } from "./Section/Section";
import { Button } from "../Shared/Button";
import { Services } from "./Services/Services";
import "./Home.css";

export const Home = () => (
  <>
    <div
      className="bg-background background-image opacity-75 absolute top-0"
      id="landing"
    />
    <div className="p-10 w-full h-[90vh]">
      <div className="absolute landing-info">
        <img
          className="relative right-8 w-[172px]"
          src={`${process.env.PUBLIC_URL}/assets/logo-trans.png`}
          alt="background"
        />
        <h1 className="text-5xl font-extra-bold">Welcome to,</h1>
        <h1 className="text-4xl font-extra-bold gradient-font">
          Peace of Mind
        </h1>
        <p className="text-xs font-regular text-slate-500 mt-1">
          Massage Therapy & Natural Healing
        </p>
        <Button className="text-xs font-light h-8 min-h-[0] mt-6 mb-4 border-none text-slate-600 normal-case rounded-2xl bg-primary">
          Contact Us
        </Button>
      </div>
    </div>
    <div className="mt-14 p-10" id="home-info">
      <div className="relative mb-14 text-right" id="massage-therapy-info">
        <div className="mb-2">
          <h1 className="text-3xl font-bold">
            Massage{" "}
            <span className="gradient-font-6 text-3xl font-bold">Therapy</span>{" "}
            &{" "}
            <span className="gradient-font-5 text-3xl font-bold">Natural</span>{" "}
            Healing
          </h1>
        </div>
        <Section
          sectionText="Come in today for a Singles Massage Session or a Couples Discounted
            Massage Packet. We use all organic massage products using plants,
            fresh herbs and oils. We are unlike your everyday Day Spa. We are a
            private practice not corporate. We cater to just you when you arrive.
            We help ease all your aches and pains helping you find true Peace Of
            Mind."
        />
      </div>
      <div className="relative mb-14" id="salon-info">
        <div className="mb-2">
          <h1 className="text-3xl font-bold">
            Were also a{" "}
            <span className="gradient-font-4 text-3xl font-bold">Salon</span>{" "}
          </h1>
        </div>
        <Section
          sectionText="We are a Dyson inspired Salon and we are sticking to our organic
          concept in every aspect. We strongly believe in being green and an
          environmentally conscious business. In saying that, we are bringing an
          all organic hair coloring line called Organic Colour Systems from the
          United Kingdom. We will be the only Salon in Corpus Christi and
          throughout the State of Texas offering this Organic Colour System."
          buttonText="Book Your Appointment Today!"
        />
      </div>
      <div className="relative mb-14 text-right" id="support-local">
        <div className="bg-backgroundTwo background-image opacity-75 absolute top-0 background-image" />
        <div className="relative mb-2">
          <h1 className="text-3xl font-bold">
            <span className="gradient-font-2 text-3xl font-bold">Support</span>{" "}
            local
          </h1>
        </div>
        <Section
          sectionText="If you want, and are able to, to support them right now, buy a gift
          certificate from them, shop in their online stores, pre book your
          future appointments and check in on them from time to time. Not only
          us, but all small businesses. Together we can as a community overcome
          this in peace and unity. We love you all, you are not only friends but
          our family."
          buttonText="Purchase Gift Card"
        />
      </div>
      <div className="relative mb-14" id="spa-boxes">
        <div className="mb-2">
          <h1 className="text-3xl font-bold">
            Spa boxes{" "}
            <span className="gradient-font-3 text-3xl font-bold">now</span>{" "}
            available!
          </h1>
        </div>
        <div className="mb-4" id="large-spa-box">
          <h1 className="text-xl font-medium mb-2">
            Large Spa Box{" "}
            <span className="text-xs font-really-light text-slate-500">
              $162.00
            </span>
          </h1>
          <Section
            sectionText="Peace of Mind Spa Box! The contents include a medical grade hand
            sanitizer, all-in-one organic hand manufactured lotion to use as a
            shaving cream, deodorant, or lotion, CBD bar of soap from Leef
            Organics with an Organic Garden Handmade Spa Detoxifying Body Scrub,
            Leef CBD Bath Detox, and a Organic Body Detox Breathing Treatment
            Spray. Also includes a $10.00 gift card towards any service."
          />
        </div>
        <div id="small-spa-box">
          <h1 className="text-xl font-medium mb-2">
            Small Spa Box{" "}
            <span className="text-xs font-really-light text-slate-500">
              $102.00
            </span>
          </h1>
          <Section
            sectionText="We also have a smaller option that comes with the medical grade hand
            sanitizer spray, Organic Body Detox Breathing Treatment Spray,
            all-in-one organic hand manufactured lotion to use a shaving cream,
            deodorant, or lotion, and a Organic Colour Systems Aqua Boost travel
            size take home shampoo and conditioner. Also includes a $5.00 gift
            card towards any service."
          />
        </div>
        <Button>Contact Us About One!</Button>
      </div>
      <Services />
    </div>
  </>
);
