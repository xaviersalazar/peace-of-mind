import { motion } from "framer-motion";

const Button = ({ children }) => (
  <motion.button
    className="text-xs font-light h-8 min-h-[0] px-6 mt-6 border-none text-slate-600 normal-case rounded-2xl bg-primary relative md:text-sm"
    whileHover={{
      scale: 1.1,
      transition: { duration: 0.3 },
    }}
    whileFocus={{ scale: 1.1, transition: { duration: 0.3 } }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </motion.button>
);

export default Button;
