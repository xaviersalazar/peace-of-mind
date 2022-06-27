import "./App.css";

function App() {
  return (
    <div className="bg-background background-image relative" id="landing">
      <div className="absolute top-1/2 w-full text-center landing-text">
        <h1 className="text-5xl font-extra-bold text-white">Welcome to,</h1>
        <h1 className="text-4xl font-bold gradient-font">Peace of Mind</h1>
        <p className="text-xs font-light text-white">
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
