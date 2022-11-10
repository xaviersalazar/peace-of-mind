import classNames from "classnames";
import { motion } from "framer-motion";

const variants = {
  normal: {
    whileHover: {
      backgroundColor: "#f8fafc",
      scale: 1.05,
      boxShadow:
        "0px 0px 0px 2.5px #f8fafc, 0px 0px 0px 5px #10FFCB, 0px 0px 0px 10px #f8fafc, 0px 0px 0px 10.5px #10FFCB",
      color: "#10FFCB",
      transition: { duration: 0.3 },
    },
    whileFocus: {
      backgroundColor: "#f8fafc",
      scale: 1.05,
      boxShadow:
        "0px 0px 0px 2.5px #f8fafc, 0px 0px 0px 5px #10FFCB, 0px 0px 0px 10px #f8fafc, 0px 0px 0px 10.5px #10FFCB",
      color: "#10FFCB",
      transition: { duration: 0.3 },
    },
  },
  outline: {
    whileHover: {
      backgroundColor: "#10FFCB",
      border: "none",
      scale: 1.1,
      color: "#fff",
      transition: { ease: "easeOut", duration: 0.3 },
    },
    whileFocus: {
      backgroundColor: "#10FFCB",
      border: "none",
      scale: 1.1,
      color: "#fff",
      transition: { ease: "easeOut", duration: 0.3 },
    },
    // #1e293b
  },
};

const Button = ({ outline, icon, children }) => {
  const classes = classNames(
    "text-xs font-light h-8 min-h-[0] px-6 mt-6 normal-case rounded-2xl relative md:text-sm",
    outline
      ? "bg-transparent border-2 border-slate-800 pl-6 pr-5"
      : "border-none text-slate-600 bg-primary"
  );

  return (
    <motion.button
      className={classes}
      whileHover={
        outline ? variants.outline.whileHover : variants.normal.whileHover
      }
      whileFocus={
        outline ? variants.outline.whileFocus : variants.normal.whileFocus
      }
      whileTap={{ scale: 0.9 }}
    >
      {children}
      {icon}
    </motion.button>
  );
};

export default Button;
