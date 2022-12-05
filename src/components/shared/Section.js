import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Section = ({ sectionText, buttonText = null }) => {
  const navigate = useNavigate();

  return (
    <>
      <p className="text-sm font-light text-slate-500 mt-2 relative">
        {sectionText}
      </p>
      {buttonText && (
        <Button onClick={() => navigate("/contact")}>{buttonText}</Button>
      )}
    </>
  );
};

export default Section;
