import { FiMail } from "react-icons/fi";

// Most of the UI here is just placeholder for now
const Dashboard = () => {
  return (
    <div className="flex-1 relative top-0 px-10 pt-8 pb-10 ml-16 lg:px-12">
      <div className="w-full shadow-[0_8px_24px_rgba(223,228,234,0.6)] bg-white px-8 py-4 rounded-2xl mb-8">
        {/* <div className="flex mb-4">
          <FiInfo className="relative top-[0.35rem] mr-2" />
          <h1 className="text-lg font-bold ">Stats</h1>
        </div> */}
        <div className="flex gap-x-2">
          <div className="flex-1 border-r-2 border-slate-50">
            <p className="text-xs font-light text-slate-300">
              User Visits Today
            </p>
            <h1 className="text-regular font-bold text-slate-700">243</h1>
          </div>
          <div className="flex-1">
            <p className="text-xs font-light text-slate-300">
              Most Visited Page
            </p>
            <h1 className="text-regular font-bold text-slate-700">Massages</h1>
          </div>
        </div>
      </div>
      <div className="w-full shadow-[0_8px_24px_rgba(223,228,234,0.6)] bg-white px-8 py-4 rounded-2xl">
        <div className="flex mb-4">
          <FiMail className="relative top-[0.35rem] mr-2" />
          <h1 className="text-lg font-bold">Recent Emails</h1>
        </div>
        <div className="grid grid-cols-1 gap-y-4">
          <div>
            <p className="text-sm font-light text-slate-300">
              test@test-user.com
            </p>
            <p className="text-sm font-light text-slate-400">
              Can I get an appointment booked for Jan 1st?
            </p>
            <div className="reply mt-2">
              <input
                type="text"
                className="input h-8 w-full px-2 py-1 font-light rounded-lg bg-slate-50 text-xs"
                placeholder="Reply?"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-light text-slate-300">
              john.doe@greatestcompany.com
            </p>
            <p className="text-sm font-light text-slate-400">
              I was there last weekend for a deluxe massage. You all did great
              and just wanted to see if I could penciled in for the same
              massage, with the same person, next weekend as well? Thanks!
            </p>
            <div className="reply mt-2">
              <input
                type="text"
                className="input h-8 w-full px-2 py-1 font-light rounded-lg bg-slate-50 text-xs"
                placeholder="Reply?"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-light text-slate-300">
              jane.doe.12434@yahoo.com
            </p>
            <p className="text-sm font-light text-slate-400">
              Looking to get booked for a haircut tomorrow
            </p>
            <div className="reply mt-2">
              <input
                type="text"
                className="input h-8 w-full px-2 py-1 font-light rounded-lg bg-slate-50 text-xs"
                placeholder="Reply?"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 text-right">
          <a className="text-xs font-light text-slate-300" href="/dashboard">
            View All
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
