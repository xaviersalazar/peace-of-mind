import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = () => (
  <div className="flex flex-col grow min-h-screen">
    <Nav />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
