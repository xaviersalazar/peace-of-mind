import "./Home.css";

export const Home = () => (
  <>
    <div
      className="bg-backgroundTrans background-image opacity-75 relative"
      id="landing"
    />
    <div className="absolute top-5 p-8 w-full">
      <div className="relative bottom-5">
        <h1 className="text-5xl font-extra-bold">Welcome to,</h1>
        <h1 className="text-4xl font-extra-bold gradient-font">
          Peace of Mind
        </h1>
        <p className="text-xs font-regular text-slate-500 mt-1">
          Massage Therapy & Natural Healing
        </p>
        <button className="text-xs font-extra-light mt-6 mb-4 px-6 py-2 rounded-2xl gradient">
          Contact Us
        </button>
      </div>
    </div>
  </>
);
