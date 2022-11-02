import Button from "./Button";

const Section = ({ sectionText, buttonText = null }) => (
  <>
    <p className="text-sm font-light text-slate-500 mt-2 relative">
      {sectionText}
    </p>
    {buttonText && <Button>{buttonText}</Button>}
  </>
);

export default Section;
