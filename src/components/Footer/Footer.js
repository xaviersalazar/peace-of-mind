import { Footer as DaisyFooter } from "react-daisyui";

const { Title } = DaisyFooter;

export const Footer = () => (
  <DaisyFooter className="p-10 bg-primary relative">
    <div>
      <img
        className="w-[84px]"
        src={`${process.env.PUBLIC_URL}/assets/logo_black.png`}
        alt="background"
      />
      <p className="mb-3 text-xs font-light">
        Open every day so we can work around your schedule because life isn’t
        always easy!
      </p>
      <p className="text-xs font-light">10% discount for all military!</p>
    </div>
    <div className="gap-1">
      <Title className="mb-0">Location</Title>
      <p className="text-xs font-light">
        602 N Lower Broadway St Corpus Christi, TX 78401
      </p>
      <p className="text-xs font-light m-0">Open everyday @ 8:30am - 9:00pm</p>
      <p className="text-xs font-light">361-737-7813</p>
      <p className="text-xs font-light m-0">We also travel if needed!</p>
    </div>
  </DaisyFooter>
);
