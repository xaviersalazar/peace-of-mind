import { useLocation } from "react-router-dom";
import { Notice } from "../shared";

const Footer = () => {
  const { pathname } = useLocation();
  const isAbout = pathname === "/salon/about" || pathname === "/services/about";
  const servicesRegex = /(services)|(salon)/gm;
  const besameRegex = /(besame)/gm;

  return (
    <div className="relative mt-auto">
      {servicesRegex.test(pathname) && !isAbout && <Notice />}
      {besameRegex.test(pathname) && !isAbout && (
        <Notice>All products sold in store only</Notice>
      )}
      <footer className="footer p-10 bg-primary lg:px-20 lg:py-10 xl:px-28">
        <div className="gap-1 md:w-[75%] lg:w-[60%]">
          <img
            className="w-[98px] mb-4 lg:w-[128px]"
            src="/logo-black.png"
            alt="background"
          />
          <p className="text-xs font-light mb-0">
            Open every day so we can work around your schedule because life
            isn’t always easy!
          </p>
          <p className="text-xs font-light mb-0">
            Find us on Facebook at{" "}
            <a
              className="text-blue-500"
              href="https://www.facebook.com/PeaceofMindMassageCC"
              target="_blank"
              rel="noreferrer"
            >
              facebook.com/PeaceOfMindMassageCC
            </a>
          </p>
          <p className="text-xs font-light mb-0">
            Check us out on Instagram{" "}
            <a
              className="text-blue-500"
              href="https://www.instagram.com/Peaceofmindmassage"
              target="_blank"
              rel="noreferrer"
            >
              @peaceofmindmassage
            </a>
          </p>
          <p className="text-xs font-light">10% discount for all Military!</p>
        </div>
        <div className="gap-1 self-end">
          <span className="footer-title text-base mb-0">Location</span>
          <p className="text-xs font-light">
            602 N Lower Broadway St Corpus Christi, TX 78401
          </p>
          <p className="text-xs font-light m-0">
            Open everyday @ 8:30am - 9:00pm
          </p>
          <p className="text-xs font-light">361-737-7813</p>
          <p className="text-xs font-light m-0">We also travel if needed!</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
