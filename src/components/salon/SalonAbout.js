import { StrikethruText } from "../shared";

const Text = ({ children }) => (
  <p className="text-sm font-light text-slate-500 mb-2">{children}</p>
);

const SalonAbout = () => (
  <div className="h-full mb-16 text-center">
    <img
      className="w-max rounded-2xl mb-4 mx-auto md:w-1/2 xl:w-1/3"
      src={`${process.env.PUBLIC_URL}/about-salon.jpg`}
      alt="about-salon"
    />
    <div className="w-full mx-auto">
      <h1 className="relative text-5xl md:text-6xl font-extra-bold">
        <StrikethruText
          text="Our Salon"
          color="#A9E5BB"
          height="h-4 md:h-5"
          position="bottom-1.5"
        />
      </h1>
      <p className="text-xs font-light text-slate-400 text-center mb-4 md:text-sm">
        We use trusted, organic products
      </p>
      <Text>
        That trusted product is Organic Hair Colour Systems®. This color system
        gives hairdressers a less toxic and more naturally based salon
        professional color, care and styling range. Co-founded by hairdresser
        Stephen Landreth, who was forced to give up hairdressing when he
        developed a severe allergy to conventional hair color, soon realized
        there were not many alternatives available. The solution? He made it
        himself. After years of research and development Organic Colour Systems
        was born.
      </Text>
      <Text>
        Our dermatological tested and patented permanent hair color formula,
        contains the lowest possible levels of oxidative pigment (PPD/PTD) and
        is packed full of high grade, natural and certified organic ingredients.
        Uniquely, our permanent color works at a lower level pH than traditional
        chemical colors, meaning that there is no damage to the hair. The System
        is supported by our class-leading range of hair care products, which
        repair and restore the health of your clients’ hair before you even
        begin to color, then re-balance and close the cuticle of the hair after
        coloring.
      </Text>
      <Text>
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
      </Text>
      <Text>
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
      </Text>
      <Text>
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
      </Text>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6">
        <div className="md:col-span-2 xl:col-span-4 xl:col-start-2 card border-none">
          <div className="flex flex-col px-4 py-6 text-center self-center w-full h-full">
            <div className="mb-4">
              <div className="relative w-fit mx-auto">
                <div className="text-2xl font-bold text-slate-700 self-center">
                  <StrikethruText
                    text="Organic Hair Colour Systems Benefits"
                    color="#A9E5BB"
                  />
                </div>
                <ul className="list-inside marker:text-[#A9E5BB] list-disc space-y-1 text-xs md:text-sm text-slate-500 font-light">
                  <li>
                    An ethical product which you can use{" "}
                    <span className="italic">guilt free</span>
                  </li>
                  <li>No damage to your client's hair</li>
                  <li>A healthier salon environment</li>
                  <li>No nasty chemical smell</li>
                  <li>Complete grey coverage</li>
                  <li>Cruelty free</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SalonAbout;
