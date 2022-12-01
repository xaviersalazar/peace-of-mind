import styled from "styled-components";

const Strike = styled.div`
  background-color: ${({ color }) => `${color}`};
`;

const StrikethruText = ({
  text,
  color,
  height = "h-2",
  position = "bottom-0.5",
  ...rest
}) =>
  text?.split(" ").map((word, i) => (
    <span key={`${word}_${i}`} className="relative w-fit z-[1]" {...rest}>
      {word}{" "}
      <Strike
        className={`absolute left-0 ${height} w-full z-[-1] ${position} opacity-80`}
        color={color}
      />
    </span>
  ));

export default StrikethruText;
