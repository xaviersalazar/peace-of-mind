import { Card } from "react-daisyui";
import classNames from "classnames";
import styled from "styled-components";

const { Body, Title } = Card;

const SImage = styled.img`
  width: ${({ width }) => `${width}px`};
`;

const SCard = styled(Card)`
  margin-left: 16px;
  margin-right: 16px;

  &.card-0 {
    margin-left: 0px;
  }

  &.card-9 {
    margin-right: 0;
  }
`;

export const ServiceCard = ({
  className,
  onClick,
  id,
  imgWidth,
  imgName,
  title,
  desc,
}) => (
  <SCard
    className={classNames(
      className,
      "border-none bg-slate-100 shadow-xl shadow-slate-200 h-full w-[174px]"
    )}
    onClick={() => onClick(id)}
  >
    <div className="flex-1 ">
      <SImage
        className={`ml-4 mr-0 mt-4 mb-0 w-[${imgWidth}px]`}
        src={`${process.env.PUBLIC_URL}/assets/services/${imgName}.png`}
        width={imgWidth}
        alt={imgName}
      />
    </div>
    <Body className="p-4 text-left">
      <Title className="text-md">{title}</Title>
      <p className="text-xs font-light">{desc}</p>
    </Body>
  </SCard>
);
