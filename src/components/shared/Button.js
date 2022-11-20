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
  },
};

const Button = ({
  className,
  outline,
  icon,
  cancelBtn,
  disabled,
  children,
  ...rest
}) => {
  const baseClasses =
    "text-xs font-light h-8 min-h-[0] px-6 mt-6 normal-case rounded-2xl relative md:text-sm";

  if (disabled) {
    return (
      <button
        className={classNames(
          baseClasses,
          "bg-slate-50 text-slate-300 cursor-default",
          className
        )}
      >
        {children}
        {icon}
      </button>
    );
  }

  if (cancelBtn) {
    return (
      <button className={classNames(baseClasses, "bg-slate-50")} {...rest}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      className={classNames(
        baseClasses,
        outline
          ? "bg-transparent border-2 border-slate-800 pl-6 pr-5"
          : "border-none text-slate-500 bg-primary",
        className
      )}
      whileHover={
        outline ? variants.outline.whileHover : variants.normal.whileHover
      }
      whileFocus={
        outline ? variants.outline.whileFocus : variants.normal.whileFocus
      }
      whileTap={{ scale: 0.9 }}
      {...rest}
    >
      {children}
      {icon}
    </motion.button>
  );
};

export default Button;
