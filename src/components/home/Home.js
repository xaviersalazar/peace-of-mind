import Button from "../shared/Button";
import GradientFont from "../shared/GradientFont";
import Section from "../shared/Section";
import Services from "./Services";
import styled from "styled-components";

const SHomeInfo = styled.div`
  top: 40%;
  transform: translateY(-40%);
`;

const SBackgroundImage = styled.div`
  height: 100vh;
  width: 100vw;
  min-width: 100vw;
  background-attachment: scroll;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 0 48px 0;
  padding: 0;
  filter: blur(48px);
  -webkit-filter: blur(48px);
`;

const Home = () => {
  return (
    <>
      <div className="p-10 w-full h-[100vh] lg:p-20 xl:p-[7rem]">
        <SHomeInfo className="absolute home-info z-20">
          <img
            className="relative right-14 w-[512px] md:w-[384px] lg:w-[448px]"
            src={`${process.env.PUBLIC_URL}/logo-trans.png`}
            alt="background"
          />
          <div>
            <h1 className="text-5xl font-extra-bold md:text-7xl lg:text-8xl">
              Welcome to,
            </h1>
            <h1 className="text-4xl font-extra-light md:text-[3.5rem] lg:text-7xl">
              Peace of Mind
            </h1>
            <p className="text-xs font-extra-light text-slate-500 mt-1 md:text-sm lg:text-base">
              Massage Therapy & Natural Healing
            </p>
            <Button>Contact Us</Button>
          </div>
        </SHomeInfo>
        <img
          className="md:hidden w-[100vw] absolute left-0 bottom-0"
          src={`${process.env.PUBLIC_URL}/wave-bg.svg`}
          alt="background"
        />
        <img
          className="hidden md:block lg:hidden w-[100vw] absolute left-0 bottom-0"
          src={`${process.env.PUBLIC_URL}/wave-bg-md.svg`}
          alt="background"
        />
        <img
          className="hidden lg:block w-[100vw] absolute left-0 bottom-0"
          src={`${process.env.PUBLIC_URL}/wave-bg-lg.svg`}
          alt="background"
        />
      </div>
      <div className="mt-14" id="home-info">
        <div
          className="relative mb-14 p-10 text-right lg:p-20 xl:px-[7rem] xl:py-16 xl:mb-0"
          id="massage-therapy-info"
        >
          <div className="lg:w-[75%] lg:ml-auto lg:mr-0 xl:w-[50%] xl:ml-auto xl:mr-0">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Massage{" "}
              <GradientFont
                className="text-3xl font-bold md:text-4xl lg:text-5xl"
                deg={-45}
                colors={["#fdfc47", "#24fe41"]}
              >
                Therapy
              </GradientFont>{" "}
              &{" "}
              <GradientFont
                className="text-3xl font-bold md:text-4xl lg:text-5xl"
                deg={45}
                colors={["#fdfc47", "#24fe41"]}
              >
                Natural
              </GradientFont>{" "}
              Healing
            </h1>
            <Section
              sectionText="Come in today for a Singles Massage Session or a Couples Discounted
                Massage Packet. We use all organic massage products using plants,
                fresh herbs and oils. We are unlike your everyday Day Spa. We are a
                private practice not corporate. We cater to just you when you arrive.
                We help ease all your aches and pains helping you find true Peace Of
                Mind."
            />
          </div>
        </div>
        <div
          className="relative mb-14 p-10 lg:p-20 xl:px-[7rem] xl:py-16 xl:mb-0"
          id="salon-info"
        >
          <div className="lg:w-[75%] lg:mr-auto lg:ml-0 xl:w-[50%] xl:mr-auto xl:ml-0">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Were also a{" "}
              <GradientFont
                className="text-3xl font-bold md:text-4xl lg:text-5xl"
                deg={-45}
                colors={["#a770ef", "#cf8bf3", "#fcb045"]}
              >
                Salon
              </GradientFont>{" "}
            </h1>
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
        </div>
        <div className="relative mb-14 text-right xl:mb-0" id="support-local">
          <SBackgroundImage className="bg-backgroundTwo background-image opacity-75 absolute top-0" />
          <div className="p-10 lg:p-20 xl:px-[7rem] xl:py-16">
            <div className="relative lg:w-[75%] lg:ml-auto lg:mr-0 xl:w-[50%] xl:ml-auto xl:mr-0">
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                <GradientFont
                  className="text-3xl font-bold md:text-4xl lg:text-5xl"
                  deg={-45}
                  colors={["#7f7fd5", "#86a8e7", "#91eae4"]}
                >
                  Support
                </GradientFont>{" "}
                local
              </h1>
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
          </div>
        </div>
        <div
          className="relative mb-14 p-10 lg:p-20 xl:px-[7rem] xl:py-16 xl:mb-0"
          id="spa-boxes"
        >
          <div className="lg:w-[75%] lg:mr-auto lg:ml-0 xl:w-[50%] xl:mr-auto xl:ml-0">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Spa boxes{" "}
              <GradientFont
                className="text-3xl font-bold md:text-4xl lg:text-5xl"
                deg={-45}
                colors={["#833ab4", "#fd1d1d", "#fcb045"]}
              >
                now
              </GradientFont>{" "}
              available!
            </h1>
            <div className="mt-2 mb-4" id="large-spa-box">
              <h1 className="text-xl font-medium mb-2 lg:text-2xl">
                Large Spa Box{" "}
                <span className="text-xs font-light text-slate-400">
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
              <h1 className="text-xl font-medium mb-2 lg:text-2xl">
                Small Spa Box{" "}
                <span className="text-xs font-light text-slate-400">
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
        </div>
        <Services />
      </div>
    </>
  );
};

export default Home;
