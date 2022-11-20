import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StrikethruText from "./StrikethruText";
import { isEmpty } from "lodash";
import classNames from "classnames";

const informationVariants = {
  opened: {
    width: "100%",
    borderRadius: "1rem",
    padding: "1rem",
    transition: {
      default: { ease: "linear" },
      duration: 1,
    },
  },
  closed: {
    width: "fit-content",
    borderRadius: "1rem",
    transition: {
      default: { ease: "linear" },
      duration: 1,
    },
  },
};

const viewBtnVariants = {
  opened: {
    background: "#f8fafc",
  },
  closed: {
    background: "#fff",
  },
};

const informationContainerVariants = {
  opened: {
    display: "flex",
    width: "fit-content",
    height: "auto",
    padding: "1rem",
    borderRadius: "1rem",
    transition: {
      duration: 0.25,
    },
  },
  closed: {
    display: "flex",
    width: 0,
    height: 0,
    borderRadius: "1rem",
    transition: {
      duration: 1,
    },
  },
};

const informationContentVariants = {
  opened: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const Services = ({ service: { title, description, prices }, strikeColor }) => {
  const [didClickViewInformation, setDidClickViewInformation] = useState(false);

  return (
    <div className="card border-none bg-slate-50 rounded-2xl xl:col-span-2 xl:last:col-span-3 xl:[&:nth-last-child(2)]:col-span-3">
      <div className="flex flex-col px-4 py-6 text-center self-center w-full h-full">
        <div className="mb-4">
          <div className="relative w-fit mx-auto">
            <div className="text-2xl font-bold text-slate-700 self-center">
              <StrikethruText text={title} color={strikeColor} />
            </div>
          </div>
          {!isEmpty(prices) ? (
            prices.map(({ price, unit }) => (
              <p
                key={`${title}_${price}`}
                className="text-sm font-light text-slate-400 text-center px-4"
              >
                {unit} ${price}
              </p>
            ))
          ) : (
            <p className="text-sm font-light text-slate-400 text-center px-4">
              TBD
            </p>
          )}
        </div>
        <AnimatePresence>
          <motion.div
            key="information"
            className="mx-auto mt-4 relative bg-white"
            initial="closed"
            animate={didClickViewInformation ? "opened" : "closed"}
            variants={informationVariants}
          >
            <motion.button
              key="view-information-btn"
              className={classNames(
                "px-4 py-2 text-xs text-slate-400 font-light rounded-full",
                didClickViewInformation ? "bg-slate-50" : "bg-white"
              )}
              initial="closed"
              animate={didClickViewInformation ? "opened" : "closed"}
              variants={viewBtnVariants}
              onClick={() =>
                setDidClickViewInformation(!didClickViewInformation)
              }
            >
              {didClickViewInformation
                ? "Close Information"
                : "View Information"}
            </motion.button>
            {didClickViewInformation && (
              <motion.div
                key="information-container"
                initial="closed"
                animate={didClickViewInformation ? "opened" : "closed"}
                variants={informationContainerVariants}
              >
                <motion.p
                  key="information-text"
                  initial="closed"
                  animate={didClickViewInformation ? "opened" : "closed"}
                  variants={informationContentVariants}
                  className="text-sm font-light text-slate-400"
                >
                  {description}
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services;
