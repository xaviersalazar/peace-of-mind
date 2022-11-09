const Text = ({ children }) => (
  <p className="text-sm font-extra-light mb-2">{children}</p>
);

const About = () => (
  <div className="relative top-32 h-full mb-32 px-10 pt-0 lg:px-20 lg:pt-20 xl:px-[7rem] xl:pt-16">
    <div className="h-full mb-16 text-center">
      <img
        className="w-max rounded-2xl mb-4 mx-auto md:w-1/2 xl:w-1/4"
        src={`${process.env.PUBLIC_URL}/about.jpeg`}
      />
      <div className="w-full mx-auto">
        <h1 className="text-4xl font-bold mb-4">Our story</h1>
        <Text>
          Peace of Mind Massage Therapy & Natural Healing is a Woman Owned
          Business based on mother nature's common grounds, located at 602 N
          Lower Broadway were Peoples St meets the wall to Upper downtown,
          Opened July 10, 2010.
        </Text>
        <Text>
          Peace of mind will transform all of your aches and pains internal and
          external into comfort, by giving you ease and relief with massage
          therapy and natural healing. LMT: Jynelle Ornelas has made massage and
          natural healing her passion. Her education and techniques stemmed from
          Austin School of Massage Therapy and Homeopathic remedies passed down
          from past generations.
        </Text>
        <Text>
          Peace of Mind Promises to Corpus Christi is to help, encourage and
          beautify our sparkling city through community service volunteering
          while informing people about natural healing and massage therapy
          helping you get on a wellness plan. We are involved with the Art Walk,
          Corpus Christi Medical Center- Spirit of women, Boken camp, The
          American Heart Association, The American Cancer Society, SCORE,
          Del-Mar College Small Business Development Center, Spaulding for
          Children, The Corpus Christi Hispanic Chamber and CASA.
        </Text>
        <Text>
          We invite you to come in anytime or call to schedule your massage to
          get your kick start in your wellness plan. We offer chair massage,
          table massage, weight loss wraps and cellulite fighting wraps, wrinkle
          reducers and skin tighten wraps along with facials. And the power of
          the hot stone massage, hot-cupping, and hot wax treatments for relief
          of arthritis and skin soften. Deep tissue massage, reflexology,
          pressure point release, and couples massage. Massage parties and
          Office chair massage packets. Our services are available 7 days a week
          with appointment; walk-ins are also welcomed open from 8:30 am till
          9:00 pm every day, to fit your busy hectic schedule.
        </Text>
      </div>
    </div>
  </div>
);

export default About;