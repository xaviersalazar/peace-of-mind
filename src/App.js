import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="flex flex-col grow min-h-screen">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
