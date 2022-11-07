import classNames from "classnames";
import { motion } from "framer-motion";

const Button = ({ outline, children }) => {
  const classes = classNames(
    "text-xs font-light h-8 min-h-[0] px-6 mt-6 normal-case rounded-2xl relative md:text-sm",
    outline
      ? "bg-transparent border-2 border-slate-800"
      : "border-none text-slate-600 bg-primary"
  );

  return (
    <motion.button
      className={classes}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
        backgroundColor: "#10FFCB",
      }}
      whileFocus={{
        scale: 1.1,
        transition: { duration: 0.3 },
        backgroundColor: "#10FFCB",
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
