import { Button } from "../shared";

const ServiceCard = ({ imgName, title, desc, onClick }) => (
  <div className="card border-none rounded-2xl bg-slate-50">
    <figure>
      <img
        src={`${process.env.REACT_APP_BUCKETEER_URL}/public/services-home/${imgName}.jpg`}
        alt={imgName}
      />
    </figure>
    <div className="card-body items-center text-center">
      <h1 className="card-title text-center justify-center">{title}</h1>
      <p className="text-sm font-light text-slate-400">{desc}</p>
      <Button onClick={onClick}>View More</Button>
    </div>
  </div>
);

export default ServiceCard;
