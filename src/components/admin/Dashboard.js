import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import { StrikethruText } from "../shared";

// Most of the UI here is just placeholder for now
const Dashboard = () => {
  return (
    <div className="flex-1 relative top-8 px-10 pb-8 ml-16 lg:px-20 xl:px-[7rem]">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-extra-bold text-center mb-0 md:text-3xl lg:text-4xl xl:text-5xl">
          <StrikethruText
            text="Dashboard"
            color="#10FFCB"
            height="h-2 md:h-3 xl:h-4"
            position="bottom-0.5 lg:bottom-1"
          />
        </h1>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-0 lg:grid-cols-4 lg:grid-rows-1">
        <div className="w-full shadow-[0_8px_24px_rgba(223,228,234,0.6)] bg-white px-8 py-4 rounded-2xl mb-8">
          <p className="text-xs font-light text-slate-300">Unread Emails</p>
          <h1 className="text-regular font-bold text-slate-700">3</h1>
        </div>
        <div className="w-full shadow-[0_8px_24px_rgba(223,228,234,0.6)] bg-white px-8 py-4 rounded-2xl mb-8">
          <p className="text-xs font-light text-slate-300">User Visits Today</p>
          <h1 className="text-regular font-bold text-slate-700">24</h1>
        </div>
        <div className="w-full shadow-[0_8px_24px_rgba(223,228,234,0.6)] bg-white px-8 py-4 rounded-2xl mb-8">
          <p className="text-xs font-light text-slate-300">
            User Visits This Month
          </p>
          <h1 className="text-regular font-bold text-slate-700">323</h1>
        </div>
        <div className="w-full shadow-[0_8px_24px_rgba(223,228,234,0.6)] bg-white px-8 py-4 rounded-2xl mb-8">
          <p className="text-xs font-light text-slate-300">Avg Sessions</p>
          <h1 className="text-regular font-bold text-slate-700">20.32s</h1>
        </div>
      </div>
      <div className="w-full shadow-[0_8px_24px_rgba(223,228,234,0.6)] bg-white px-8 py-4 rounded-2xl">
        <div className="flex mb-4">
          <FiMail className="relative top-[0.35rem] mr-2" />
          <h1 className="text-lg font-bold">Recent Emails</h1>
        </div>
        <div className="grid grid-cols-1 gap-y-4">
          <div>
            <p className="text-sm font-light text-slate-700 mb-1">
              From: <span className="font-extra-light">test@test-user.com</span>
            </p>
            <div className="w-full p-4 rounded-lg bg-slate-50">
              <p className="text-sm font-light text-slate-400">
                Can I get an appointment booked for Jan 1st?
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-light text-slate-700 mb-1">
              From:{" "}
              <span className="font-extra-light">
                john.doe@greatestcompany.com
              </span>
            </p>
            <div className="w-full p-4 rounded-lg bg-slate-50">
              <p className="text-sm font-light text-slate-400">
                I was there last weekend for a deluxe massage. You all did great
                and just wanted to see if I could penciled in for the same
                massage, with the same person, next weekend as well? Thanks!
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-light text-slate-700 mb-1">
              From:{" "}
              <span className="font-extra-light">jane.doe.12434@yahoo.com</span>
            </p>
            <div className="w-full p-4 rounded-lg bg-slate-50">
              <p className="text-sm font-light text-slate-400">
                Looking to get booked for a haircut tomorrow
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-right">
          <motion.button
            className="text-xs font-light p-4 rounded-lg"
            initial={{
              backgroundColor: "#fff",
              color: "#cbd5e1",
            }}
            whileHover={{
              backgroundColor: "#f8fafc",
              color: "#334155",
            }}
            whileFocus={{
              backgroundColor: "#f8fafc",
              color: "#334155",
            }}
            whileTap={{
              backgroundColor: "#f8fafc",
              color: "#334155",
            }}
          >
            View All
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
