import "./App.css";

function App() {
  return (
    <div>
      <div className="text-center mb-10" id="landing">
        <img
          className="mx-auto mt-8 w-[256px] md:w-[512px]"
          src={`${process.env.PUBLIC_URL}/assets/pom-bg.jpg`}
          alt="background"
        />
        <h1 className="text-5xl font-extra-bold">Welcome to,</h1>
        <h1 className="text-4xl font-bold gradient-font">Peace of Mind</h1>
        <p className="text-xs font-really-light">
          Massage Therapy & Natural Healing
        </p>
        <button className="text-xs font-extra-light mt-6 mb-4 px-6 py-2 rounded-2xl gradient">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default App;
