import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Section = ({ buttonText = null, children }) => {
  const navigate = useNavigate();

  return (
    <>
      <p className="text-sm font-light text-slate-400 mt-2 relative xl:px-[12rem]">
        {children}
      </p>
      {buttonText && (
        <Button onClick={() => navigate("/contact")}>{buttonText}</Button>
      )}
    </>
  );
};

export default Section;
