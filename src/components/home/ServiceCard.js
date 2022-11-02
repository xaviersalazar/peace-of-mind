import classNames from "classnames";
import { motion } from "framer-motion";

const ServiceCard = ({ className, onClick, id, imgName, title, desc }) => (
  <motion.div
    className={classNames(
      className,
      "card border-none bg-slate-50 w-full h-full justify-self-end cursor-pointer"
    )}
    onClick={() => onClick(id)}
    whileHover={{
      scale: 1.1,
      transition: { duration: 0.3 },
    }}
    whileFocus={{ scale: 1.1, transition: { duration: 0.3 } }}
    whileTap={{ scale: 0.9 }}
  >
    <div className="flex-1 self-center pt-6 px-4">
      <img
        className="w-[38px]"
        src={`/services/${imgName}.png`}
        alt={imgName}
      />
    </div>
    <div className="card-body p-4 text-center self-center">
      <h2 className="card-title text-sm self-center">{title}</h2>
      <p className="text-xs font-extra-light">{desc}</p>
    </div>
  </motion.div>
);

export default ServiceCard;
