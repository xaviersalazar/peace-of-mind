import { Fragment } from "react";
import styled from "styled-components";

const Strike = styled.div`
  background-color: ${({ color }) => `${color}`};
`;

const StrikethruText = ({ text, color }) =>
  text?.split(" ").map((word) => (
    <Fragment key={word}>
      <span className="relative w-fit z-[1]">
        {word}{" "}
        <Strike
          className={`absolute left-0 h-2 w-full z-[-1] bottom-0.5 opacity-80`}
          color={color}
        />
      </span>
    </Fragment>
  ));

export default StrikethruText;
