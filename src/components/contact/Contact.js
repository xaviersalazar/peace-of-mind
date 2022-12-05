import { StrikethruText } from "../shared";
import ContactForm from "./ContactForm";

const Contact = () => (
  <div className="relative top-32 h-full mb-32 px-10 pt-0 lg:px-20 lg:pt-4 xl:px-[7rem] xl:pt-8">
    <div className="h-full mb-16 text-center">
      <div className="w-full mx-auto">
        <h1 className="text-5xl md:text-6xl font-extra-bold">
          <StrikethruText
            text="Contact Us"
            color="#FFD289"
            height="h-4 md:h-5"
            position="bottom-[.55rem] md:bottom-[.65rem]"
          />
        </h1>
        <p className="text-xs font-light text-slate-400 text-center mb-8 md:w-1/2 lg:w-2/4 xl:w-1/3 mx-auto md:text-sm">
          Got a question? Need a quote? Use the form below to contact us and
          we'll be back with you as soon as we can!
        </p>
      </div>
      <ContactForm />
    </div>
  </div>
);

export default Contact;
