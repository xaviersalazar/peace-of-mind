import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { useIsMd } from "../../hooks/useBreakpoints";
import { FiHome, FiServer, FiChevronRight, FiLogOut } from "react-icons/fi";
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

  const { user, signOut, loading } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex">
      <motion.div
        className="absolute z-50 bg-slate-50 px-4 pt-8 pb-4 h-[100vh] text-center"
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
              <FiHome className=" text-slate-300 mr-2" />{" "}
              <motion.p
                className="text-sm font-light text-slate-400 leading-4 text-left"
                animate={isMenuOpen ? "open" : "closed"}
                variants={menuTextVariants}
              >
                Dashboard
              </motion.p>
            </div>
            <div className="flex flex-1 gap-x-2">
              <FiServer className=" text-slate-300 mr-2" />{" "}
              <motion.p
                className="text-sm font-light text-slate-400 leading-4 text-left"
                animate={isMenuOpen ? "open" : "closed"}
                variants={menuTextVariants}
              >
                Services
              </motion.p>
            </div>
          </div>
          <div className="mt-auto">
            <motion.div
              className="form-control w-full"
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
            <div className="flex">
              <motion.button
                className="bg-primary w-full mt-4 p-2 rounded-lg text-slate-700 font-light"
                whileHover={{
                  backgroundColor: "#f8fafc",
                  boxShadow:
                    "0px 0px 0px 2.5px #f8fafc, 0px 0px 0px 5px #10FFCB, 0px 0px 0px 10px #f8fafc, 0px 0px 0px 10.5px #10FFCB",
                  color: "#10FFCB",
                  transition: { duration: 0.3 },
                }}
                whileFocus={{
                  backgroundColor: "#f8fafc",
                  boxShadow:
                    "0px 0px 0px 2.5px #f8fafc, 0px 0px 0px 5px #10FFCB, 0px 0px 0px 10px #f8fafc, 0px 0px 0px 10.5px #10FFCB",
                  color: "#10FFCB",
                  transition: { duration: 0.3 },
                }}
                whileTap={{
                  scale: 0.9,
                }}
                disabled={loading}
                onClick={signOut}
              >
                <FiLogOut className="text-slate-700 inline mr-2" />
                <motion.span
                  className="text-sm font-light text-slate-700 leading-4 text-left"
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={menuTextVariants}
                >
                  Logout
                </motion.span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
