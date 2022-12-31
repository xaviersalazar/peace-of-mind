import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { StrikethruText } from "../shared";
import navItems from "./navItems";
import useOutsideClick from "../hooks/useOutsideClick";
import classNames from "classnames";
import styled from "styled-components";

const initialCurrPageState = {
  about: false,
  besame: false,
  salon: false,
  services: false,
  contact: false,
};

const initialSubMenuState = {
  Besame: false,
  Salon: false,
  Services: false,
  Contact: false,
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

const Logo = styled.img`
  opacity: 0;
  transition: ease 0.5s;

  &.active {
    opacity: 1;
  }
`;

const Nav = () => {
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  const [shouldApplyShadow, setShouldApplyShadow] = useState(false);
  const [currPage, setCurrPage] = useState(initialCurrPageState);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(initialSubMenuState);

  const subMenuRef = useOutsideClick(() =>
    setIsSubMenuOpen(initialSubMenuState)
  );

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest >= 100) setShouldApplyShadow(true);
      else setShouldApplyShadow(false);
    });
  }, []); // eslint-disable-line

  useEffect(() => {
    if (pathname !== "/") {
      const currPath = pathname.split("/")[1];

      setCurrPage({
        ...initialCurrPageState,
        [currPath]: true,
      });
    } else {
      setCurrPage(initialCurrPageState);
    }
  }, [pathname]);

  const onNavItemClicked = (title) => {
    if (title !== "About" || title !== "Contact") {
      setIsSubMenuOpen({
        ...initialSubMenuState,
        [title]: !isSubMenuOpen[title],
      });
    }
  };

  const getLogo = () => {
    const props = {
      className: classNames(
        "justify-start w-[32px] md:w-[48px] top-0.5 md:top-[-0.2rem] relative cursor-pointer active",
        shouldApplyShadow ? "active" : ""
      ),
      alt: "mini-logo-img",
    };

    return shouldApplyShadow ? (
      <Logo className={props.className} src="/logo-black.png" alt={props.alt} />
    ) : (
      <Logo className={props.className} src="/logo-white.png" alt={props.alt} />
    );
  };

  return (
    <div className="relative">
      <div className="fixed top-2 w-screen z-50">
        <Navbar
          className={classNames(
            "mt-4 mx-4 md:mx-8 px-6 py-6 md:pt-6 md:pb-4 rounded-2xl",
            shouldApplyShadow ? "active bg-white" : "bg-transparent"
          )}
        >
          <div className="flex justify-between">
            <Link to="/">{getLogo()}</Link>
            <div className="flex gap-2 justify-between relative top-1.5 md:top-0.5 md:justify-end md:gap-8">
              {navItems.map(({ title, link, page, subItems }) => (
                <div className="relative" key={title}>
                  {/* eslint-disable-next-line */}
                  <Link
                    key={title}
                    to={link}
                    className={classNames(
                      "text-[0.65rem] md:text-base tracking-wide cursor-pointer",
                      shouldApplyShadow ? "text-slate-700" : "text-white"
                    )}
                    onClick={() => onNavItemClicked(title)}
                  >
                    <div className="flex gap-y-1 uppercase">
                      <motion.div
                        className={`${
                          currPage[page] ? "font-bold" : "font-light"
                        }`}
                        animate={{ opacity: currPage[page] ? 1 : 0.5 }}
                      >
                        {title}
                      </motion.div>
                      {subItems.length > 0 && (
                        <motion.div
                          initial="closed"
                          animate={isSubMenuOpen[title] ? "opened" : "closed"}
                          variants={iconVariants}
                        >
                          <FiChevronDown
                            className={classNames(
                              "relative",
                              title === "Services"
                                ? "top-[0.1rem] md:top-1"
                                : "top-0.5 md:top-1",
                              currPage[page] ? "opacity-100" : "opacity-50"
                            )}
                          />
                        </motion.div>
                      )}
                    </div>
                  </Link>
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
                                <Link
                                  key={subItemTitle}
                                  to={subLink}
                                  className={classNames(
                                    "text-sm font-light pl-4 pr-8 py-1 cursor-pointer hover:bg-primary hover:font-regular",
                                    index === 0 && "pt-2 pb-1",
                                    index === subItems.length - 1 && "pb-2 pt-1"
                                  )}
                                  onClick={() =>
                                    setIsSubMenuOpen(initialSubMenuState)
                                  }
                                >
                                  {subItemTitle}
                                </Link>
                              )
                            )}
                        </div>
                      </motion.ul>
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default Nav;
