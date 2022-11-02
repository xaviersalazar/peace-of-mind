import styled from "styled-components";

const SGradientFont = styled.span`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    ${({ deg, colors }) => `${deg}deg, ${colors.join(", ")}`}
  );
`;

const GradientFont = ({ deg, colors, ...rest }) => (
  <SGradientFont deg={deg} colors={colors} {...rest} />
);

export default GradientFont;
