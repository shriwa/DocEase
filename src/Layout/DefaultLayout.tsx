import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const DefaultLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-28">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
