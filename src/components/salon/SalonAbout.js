import { Section } from "../shared";

const SalonAbout = () => (
  <>
    <div
      className="hero h-[40vh] xl:h-[50vh]"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/about-salon.jpg)`,
      }}
      id="hero"
    >
      <div className="hero-overlay bg-slate-900 bg-opacity-75" />
      <div className="hero-content mt-8">
        <div className="max-w text-center">
          <h1 className="text-4xl font-extra-bold text-white md:text-5xl xl:text-6xl">
            About our Salon
          </h1>
          <p className="text-xs font-light text-slate-400 text-center md:text-sm">
            We use trusted, organic products
          </p>
        </div>
      </div>
    </div>
    <div className="text-center pb-10 pt-10 px-10 md:p-16 lg:p-20 xl:p-[7rem]">
      <h1 className="text-4xl font-extra-bold md:text-5xl lg:text-6xl">
        Organic Hair Colour Systems
      </h1>
      <hr className="w-2/4 md:w-8/12 xl:w-4/12 mx-auto my-4 border-slate-100" />
      <Section>
        This color system gives hairdressers a less toxic and more naturally
        based salon professional color, care and styling range. Co-founded by
        hairdresser Stephen Landreth, who was forced to give up hairdressing
        when he developed a severe allergy to conventional hair color, soon
        realized there were not many alternatives available. The solution? He
        made it himself. After years of research and development Organic Colour
        Systems was born.
      </Section>
      <Section>
        Our dermatological tested and patented permanent hair color formula,
        contains the lowest possible levels of oxidative pigment (PPD/PTD) and
        is packed full of high grade, natural and certified organic ingredients.
        Uniquely, our permanent color works at a lower level pH than traditional
        chemical colors, meaning that there is no damage to the hair. The System
        is supported by our class-leading range of hair care products, which
        repair and restore the health of your clients’ hair before you even
        begin to color, then re-balance and close the cuticle of the hair after
        coloring.
      </Section>
      <Section>
        This system also offers a follicle strengthening system called
        Rep-Hair®. Our dermatological tested and patented permanent hair color
        formula, contains the lowest possible levels of oxidative pigment
        (PPD/PTD) and is packed full of high grade, natural and certified
        organic ingredients. Uniquely, our permanent color works at a lower
        level pH than traditional chemical colors, meaning that there is no
        damage to the hair. The System is supported by our class-leading range
        of hair care products, which repair and restore the health of your
        clients’ hair before you even begin to color, then re-balance and close
        the cuticle of the hair after coloring.
      </Section>
      <Section>
        Rep-Hair® Follicle Strengthening System is a natural and scientifically
        formulated daily scalp and hair care regime, designed to improve the
        strength and condition of the scalp and hair, providing an optimum
        follicular environment for hair growth. Rep-Hair® combines natural and
        organic extracts which have been carefully selected for their
        nourishing, strengthening, conditioning and cleansing properties, as
        well as their ability to protect the scalp and reduce inflammation of
        the hair follicle. This highly effective and natural system harnesses
        the unique benefits of Capixyl™, an elite hair care complex which has
        been proven to reduce hair loss and stimulate natural hair growth. If
        used continuously as directed, noticeable results should be seen within
        4 – 16 weeks.
      </Section>
      <Section>
        Our unique system & green science is revolutionary, high performance and
        unlike any other professional line. Organic Colour Systems® is exactly
        that, a ‘System’. Our range of high performance, professional salon
        products, have been designed to work harmoniously with one another to
        give you and your clients outstanding results in the most natural way
        possible. Our dermatological tested and patented permanent hair colour
        formula, contains the lowest possible levels of oxidative pigment
        (PPD/PTD) and is packed full of high grade, natural and certified
        organic ingredients. Uniquely, our permanent colour works at a lower
        level pH than traditional chemical colours, meaning that there is no
        damage to the hair. The System is supported by our class-leading range
        of hair care products, which repair and restore the health of your
        clients’ hair before you even begin to colour, then re-balance and close
        the cuticle of the hair after colouring.
      </Section>
    </div>
  </>
);

export default SalonAbout;
