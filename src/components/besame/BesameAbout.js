import { StrikethruText } from "../shared";

const Text = ({ children }) => (
  <p className="text-sm font-light text-slate-500 mb-2">{children}</p>
);

const SalonAbout = () => (
  <div className="h-full mb-16 text-center">
    <img
      className="w-max rounded-2xl mb-4 mx-auto md:w-1/2 xl:w-1/3"
      src={`${process.env.PUBLIC_URL}/about-besame.jpg`}
      alt="about-besame"
    />
    <div className="w-full mx-auto">
      <h1 className="relative text-5xl md:text-6xl font-extra-bold">
        <StrikethruText
          text="About Besame"
          color="#F3DFA2"
          height="h-4 md:h-5"
          position="bottom-1.5"
        />
      </h1>
      <p className="text-xs font-light text-slate-400 text-center mb-4 md:text-sm">
        Classic, high quality, luxury makeup
      </p>
      <Text>
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
      </Text>
      <Text>
        Besame Cosmetics was also featured on the popular television series
        American Horror Story: Freak Show.
      </Text>
    </div>
  </div>
);

export default SalonAbout;
