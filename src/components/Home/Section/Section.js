import { Button } from "../../Shared/Button";

export const Section = ({ sectionText, buttonText = null }) => (
  <>
    <p className="text-sm font-light text-slate-500 relative">{sectionText}</p>
    {buttonText && <Button>{buttonText}</Button>}
  </>
);
