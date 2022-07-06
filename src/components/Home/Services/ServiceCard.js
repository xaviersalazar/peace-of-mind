import { Card } from "react-daisyui";

const { Body, Title } = Card;

export const ServiceCard = ({ imgWidth, imgName, title, desc }) => (
  <Card className="border-none bg-slate-100">
    <div className="card-image flex-1">
      <img
        className={`ml-4 mr-0 mt-4 mb-0 w-[${imgWidth}px]`}
        src={`${process.env.PUBLIC_URL}/assets/services/${imgName}.png`}
      />
    </div>
    <Body className="p-4 text-left">
      <Title className="text-md">{title}</Title>
      <p className="text-xs font-light">{desc}</p>
    </Body>
  </Card>
);
