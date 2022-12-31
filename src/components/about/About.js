import { Section } from "../shared";

const About = () => (
  <>
    <div
      className="hero h-[40vh] xl:h-[50vh]"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/about.jpeg)`,
      }}
      id="hero"
    >
      <div className="hero-overlay bg-slate-900 bg-opacity-75" />
      <div className="hero-content mt-8">
        <div className="max-w text-center">
          <h1 className="text-4xl font-extra-bold text-white md:text-5xl xl:text-6xl">
            About us
          </h1>
          <p className="text-xs font-light text-slate-400 text-center md:text-sm">
            We're here to help you feel better
          </p>
        </div>
      </div>
    </div>
    <div className="text-center pb-10 pt-10 px-10 lg:p-20 xl:p-[7rem]">
      <h1 className="text-4xl font-extra-bold md:text-5xl lg:text-6xl">
        Our Story
      </h1>
      <hr className="w-1/4 md:w-2/12 xl:w-1/12 mx-auto my-4 border-slate-100" />
      <Section>
        Peace of Mind Massage Therapy & Natural Healing is a Woman Owned
        Business based on mother nature's common grounds, located at 602 N Lower
        Broadway were Peoples St meets the wall to Upper downtown, Opened July
        10, 2010.
      </Section>
      <Section>
        Peace of mind will transform all of your aches and pains internal and
        external into comfort, by giving you ease and relief with massage
        therapy and natural healing. LMT: Jynelle Ornelas has made massage and
        natural healing her passion. Her education and techniques stemmed from
        Austin School of Massage Therapy and Homeopathic remedies passed down
        from past generations.
      </Section>
      <Section>
        Peace of Mind Promises to Corpus Christi is to help, encourage and
        beautify our sparkling city through community service volunteering while
        informing people about natural healing and massage therapy helping you
        get on a wellness plan. We are involved with the Art Walk, Corpus
        Christi Medical Center- Spirit of women, Boken camp, The American Heart
        Association, The American Cancer Society, SCORE, Del-Mar College Small
        Business Development Center, Spaulding for Children, The Corpus Christi
        Hispanic Chamber and CASA.
      </Section>
      <Section>
        We invite you to come in anytime or call to schedule your massage to get
        your kick start in your wellness plan. We offer chair massage, table
        massage, weight loss wraps and cellulite fighting wraps, wrinkle
        reducers and skin tighten wraps along with facials. And the power of the
        hot stone massage, hot-cupping, and hot wax treatments for relief of
        arthritis and skin soften. Deep tissue massage, reflexology, pressure
        point release, and couples massage. Massage parties and Office chair
        massage packets. Our services are available 7 days a week with
        appointment; walk-ins are also welcomed open from 8:30 am till 9:00 pm
        every day, to fit your busy hectic schedule.
      </Section>
    </div>
  </>
);

export default About;
