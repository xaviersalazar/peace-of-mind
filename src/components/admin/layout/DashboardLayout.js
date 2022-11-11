import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { useIsMd } from "../../hooks/useBreakpoints";
import { FiHome, FiServer, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

const DashboardLayout = () => {
  const menuVariants = {
    open: {
      position: "absolute",
      width: useIsMd() ? "24rem" : "66.666667%",
      transition: {
        duration: 1,
        default: { ease: "linear" },
      },
    },
    closed: {
      position: "absolute",
      width: "4rem",
      transition: {
        duration: 1,
        default: { ease: "linear" },
      },
    },
  };

  const menuTextVariants = {
    open: {
      flex: 1,
      opacity: 1,
      transition: {
        duration: 0.25,
        default: { ease: "linear" },
      },
      transitionEnd: {
        display: "initial",
      },
    },
    closed: {
      opacity: 0,
      display: "none",
      transition: {
        default: { ease: "linear" },
      },
    },
  };

  const menuSearchVariants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.25,
        default: { ease: "linear" },
      },
      transitionEnd: {
        display: "initial",
      },
    },
    closed: {
      opacity: 0,
      display: "none",
      transition: {
        default: { ease: "linear" },
      },
    },
  };

  const { user } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex">
      <motion.div
        className="absolute z-50 bg-slate-50 px-4 py-8 h-[100vh] text-center"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        layout
      >
        <button
          className="absolute top-6 right-[-0.95rem] px-6 py-4 w-6 rounded-full bg-slate-50 text-slate-400 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FiChevronRight />
        </button>
        <div className="flex flex-col text-left h-[100%]">
          <div className="flex gap-x-4">
            <div className="avatar ">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/tech" alt="people-img" />
              </div>
            </div>
            <motion.h1
              className="text-md font-bold mt-1"
              animate={isMenuOpen ? "open" : "closed"}
              variants={menuTextVariants}
            >
              Welcome, {user?.user_metadata.name}
            </motion.h1>
          </div>
          <div
            className="flex flex-col gap-y-4 mt-12 pl-2"
            id="menu-icons-mobile"
          >
            <div className="flex flex-1 gap-x-2">
              <FiHome className=" text-slate-300" />{" "}
              <motion.p
                className="text-sm font-extra-light leading-4 text-left"
                animate={isMenuOpen ? "open" : "closed"}
                variants={menuTextVariants}
              >
                Dashboard
              </motion.p>
            </div>
            <div className="flex flex-1 gap-x-2">
              <FiServer className=" text-slate-300" />{" "}
              <motion.p
                className="text-sm font-extra-light leading-4 text-left"
                animate={isMenuOpen ? "open" : "closed"}
                variants={menuTextVariants}
              >
                Services
              </motion.p>
            </div>
          </div>
          <motion.div
            className="form-control w-full mt-auto"
            animate={isMenuOpen ? "open" : "closed"}
            variants={menuSearchVariants}
          >
            <input
              name="search"
              type="text"
              placeholder="Search"
              className="input w-full h-12 font-light rounded-lg"
            />
          </motion.div>
        </div>
      </motion.div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
