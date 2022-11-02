import { useEffect, useState } from "react";
import classNames from "classnames";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import navItems from "./navItems";
import useOutsideClick from "../utils/useOutsideClick";
import styled from "styled-components";

const initialState = {
  Besame: false,
  Salon: false,
  Services: false,
};

const iconVariants = {
  opened: {
    rotate: -180,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    rotate: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const subMenuVariants = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const Navbar = styled.nav`
  position: relative;
  transition: box-shadow ease 0.5s, transform ease 0.5s;
  z-index: 10;

  ::after {
    content: "";
    position: absolute;
    border-radius: 1rem;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: opacity ease 0.5s;
    z-index: -1;
  }

  &.active {
    transform: translateY(-10px);
    border-radius: 1rem;
    z-index: 10;
  }

  &.active::after {
    opacity: 1;
  }
`;

const Nav = () => {
  const { scrollY } = useScroll();
  const [shouldApplyShadow, setShouldApplyShadow] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(initialState);

  const subMenuRef = useOutsideClick(() => setIsSubMenuOpen(false));

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest >= 100) setShouldApplyShadow(true);
      else setShouldApplyShadow(false);
    });
  }, []); // eslint-disable-line

  const onNavItemClicked = (title) => {
    if (title !== "About Us") {
      setIsSubMenuOpen({
        ...initialState,
        [title]: !isSubMenuOpen[title],
      });
    }
  };

  return (
    <div className="relative">
      <div className="fixed top-2 w-screen z-50">
        <Navbar
          className={classNames(
            "mt-4 mx-8 px-6 py-6 rounded-2xl bg-white",
            shouldApplyShadow ? "active" : ""
          )}
        >
          <div className="relative flex gap-2 justify-between md:justify-end md:gap-8">
            {navItems.map(({ title, link, subItems }) => (
              <div className="relative" key={title}>
                {/* eslint-disable-next-line */}
                <a
                  key={title}
                  className="text-sm md:text-base font-regular cursor-pointer"
                  onClick={() => onNavItemClicked(title)}
                >
                  <div className="flex gap-1">
                    {title}{" "}
                    {title !== "About Us" && (
                      <motion.div
                        initial="closed"
                        animate={isSubMenuOpen[title] ? "opened" : "closed"}
                        variants={iconVariants}
                      >
                        <FiChevronDown
                          className={classNames(
                            "relative",
                            title === "Services"
                              ? "top-[0.22rem] md:top-1"
                              : "top-1"
                          )}
                        />
                      </motion.div>
                    )}
                  </div>
                </a>
                {isSubMenuOpen[title] && (
                  <AnimatePresence>
                    <motion.ul
                      key={`subMenu_${title}`}
                      ref={subMenuRef}
                      initial="exit"
                      animate={isSubMenuOpen ? "enter" : "exit"}
                      variants={subMenuVariants}
                      className={classNames(
                        "absolute top-8 bg-white rounded-lg shadow-2xl",
                        title === "Besame" ? "left-[-2rem]" : "left-[-6rem]"
                      )}
                    >
                      <div
                        className={classNames(
                          "grid grid-rows-1 grid-cols-1 w-[184px]"
                        )}
                      >
                        {subItems?.length > 0 &&
                          subItems?.map(
                            ({ title: subItemTitle, subLink }, index) => (
                              <li
                                key={subItemTitle}
                                className={classNames(
                                  "text-sm font-light pl-4 pr-8 py-1 cursor-pointer hover:bg-primary hover:font-regular",
                                  index === 0 && "pt-2 pb-1",
                                  index === subItems.length - 1 && "pb-2 pt-1"
                                )}
                              >
                                {subItemTitle}
                              </li>
                            )
                          )}
                      </div>
                    </motion.ul>
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default Nav;
