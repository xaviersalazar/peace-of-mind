import { useEffect, useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { StrikethruText } from "../shared";
import ContactForm from "./ContactForm";

const Contact = () => {
  const { width, height } = useWindowSize();

  const [didFormSucceed, setDidFormSucceed] = useState(false);
  const [numberOfPieces, setNumberOfPieces] = useState(200);

  useEffect(() => {
    if (didFormSucceed) {
      setTimeout(() => {
        setNumberOfPieces(0);
      }, 5000);

      setTimeout(() => {
        setDidFormSucceed(false);
      }, 10000);
    }
  }, [didFormSucceed]);

  return (
    <>
      {didFormSucceed && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={numberOfPieces}
        />
      )}
      <div className="relative top-32 h-full mb-32 px-10 pt-0 lg:px-20 lg:pt-4 xl:px-[7rem] xl:pt-8 overflow-hidden">
        <div className="h-full mb-16 text-center">
          <div className="w-full mx-auto">
            <h1 className="text-4xl font-extra-bold md:text-5xl xl:text-6xl">
              Contact Us
            </h1>
            <hr className="w-2/4 md:w-1/4 xl:w-2/12 mx-auto my-4 border-slate-100" />
            <p className="text-xs font-light text-slate-400 text-center mb-8 md:w-1/2 lg:w-2/4 xl:w-1/3 mx-auto md:text-sm">
              Got a question? Need a quote? Use the form below to contact us and
              we'll be back with you as soon as we can!{" "}
              <span className="italic">
                (Please fill out all fields to submit)
              </span>
            </p>
          </div>
          <ContactForm setDidFormSucceed={setDidFormSucceed} />
        </div>
      </div>
    </>
  );
};

export default Contact;
