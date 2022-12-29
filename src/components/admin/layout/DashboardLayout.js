import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../context/Auth";
import { useIsMd } from "../../hooks/useBreakpoints";
import classNames from "classnames";
import { FiChevronRight, FiLogOut } from "react-icons/fi";
import { GradientFont } from "../../shared";
import { MENU } from "./menu";

const DashboardLayout = () => {
  const menuVariants = {
    open: {
      position: "fixed",
      width: useIsMd() ? "24rem" : "66.666667%",
      transition: {
        duration: 1,
        default: { ease: "linear" },
      },
    },
    closed: {
      position: "fixed",
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

  const navigate = useNavigate();
  const { user, signOut, loading } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex">
      <motion.div
        className="fixed z-50 bg-slate-50 px-4 pt-8 pb-4 h-[100vh] text-center"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        layout
      >
        <motion.button
          className="absolute top-6 right-[-1rem] px-6 py-4 w-6 rounded-full bg-slate-50 text-slate-400 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          initial={{ top: "1.5rem" }}
          animate={isMenuOpen ? { top: "2rem" } : { top: "1.5rem" }}
        >
          <motion.div
            initial={{ position: "relative", rotateY: 0 }}
            animate={
              isMenuOpen ? { rotateY: -180, left: "1rem" } : { rotateY: 0 }
            }
          >
            <FiChevronRight />
          </motion.div>
        </motion.button>
        <div className="flex flex-col text-left h-[100%]">
          <div className="flex gap-x-4">
            <div className="avatar">
              <motion.div
                className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                initial={{ width: "2rem" }}
                animate={isMenuOpen ? { width: "3rem" } : { width: "2rem" }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/stock-user.png`}
                  alt="user-img"
                />
              </motion.div>
            </div>
            <motion.h1
              className="text-lg mt-2 font-bold md:text-2xl"
              animate={isMenuOpen ? "open" : "closed"}
              variants={menuTextVariants}
            >
              Welcome,{" "}
              <GradientFont
                deg={-45}
                colors={["#0cebeb", "#20e3b2", "#20e3b2"]}
              >
                {user?.user_metadata.name}
              </GradientFont>
            </motion.h1>
          </div>
          <div className="flex flex-col gap-y-6 mt-16 pl-2" id="menu">
            {MENU.map(({ title, url, icon }) => (
              <motion.button
                key={title}
                className="flex flex-1 gap-x-2 rounded-lg"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate(url);
                }}
                initial={{ backgroundColor: "#f8fafc", color: "#94a3b8" }}
                whileHover={
                  isMenuOpen
                    ? {
                        backgroundColor: "#fff",
                        padding: "1rem",
                      }
                    : {
                        backgroundColor: "#f8fafc",
                        padding: 0,
                        color: "#fff",
                      }
                }
              >
                {icon}{" "}
                <motion.p
                  className="text-sm font-light text-slate-400 leading-4 text-left"
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={menuTextVariants}
                >
                  {title}
                </motion.p>
              </motion.button>
            ))}
          </div>
          <div className="mt-auto">
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
      <div
        className={classNames(
          isMenuOpen &&
            "absolute top-0 left-0 h-full w-full bg-white opacity-80 z-40"
        )}
      />
    </div>
  );
};

export default DashboardLayout;
