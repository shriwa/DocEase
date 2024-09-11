import { Outlet } from "react-router-dom";
import  Navbar from "../Components/Navbar/Navbar";


const DefaultLayout: React.FC = () => {
  // const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div>
      <div className="flex h-screen">
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-auto">
         <Navbar/>
            <main className="bg-bglight dark:bg-bgdark">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
