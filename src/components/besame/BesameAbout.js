import { Section } from "../shared";

const SalonAbout = () => (
  <>
    <div
      className="hero h-[40vh] xl:h-[50vh]"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/about-besame.jpg)`,
      }}
      id="hero"
    >
      <div className="hero-overlay bg-slate-900 bg-opacity-75" />
      <div className="hero-content mt-8">
        <div className="max-w text-center">
          <h1 className="text-4xl font-extra-bold text-white md:text-5xl xl:text-6xl">
            About Besame
          </h1>
          <p className="text-xs font-light text-slate-400 text-center md:text-sm">
            Classic, high quality, luxury makeup
          </p>
        </div>
      </div>
    </div>
    <div className="text-center pb-10 pt-10 px-10 md:p-16 lg:p-20 xl:p-[7rem]">
      <h1 className="text-4xl font-extra-bold md:text-5xl lg:text-6xl">
        Besame Cosmetics
      </h1>
      <hr className="w-2/4 md:w-2/4 xl:w-1/4 mx-auto my-4 border-slate-100" />
      <Section>
        Bésame Cosmetics was founded in 2004 out of a fascination with art,
        history, and beauty; a vintage makeup brand which honors the style,
        spirit, and sensibility of female beauty. Through a keen eye for color
        and historical expertise, Besame recreates modern reproductions of
        classic luxury makeup from the 1920s, ‘30s, ‘40s, and ‘50s, designed to
        make women feel elegant, inspired, and empowered by their beauty.
        Pairing innovative, cutting edge technology with a historical milieu,
        Besame's colors and formulations are painstakingly hand-crafted to a
        minutia of detail, from there custom-designed gold compacts to there
        signature chrysanthemum motifs. Based in Southern California, Bésame
        understands Hollywood’s ongoing fascination with the vintage aesthetic,
        and often helps production designers recreate accurate makeup displays
        for period film and television (catch a glimpse of our Crimson Rouge tin
        in the 2012’s Academy Award-winning film, “The Artist”).
      </Section>
      <Section>
        Besame Cosmetics was also featured on the popular television series
        American Horror Story: Freak Show.
      </Section>
    </div>
  </>
);

export default SalonAbout;
