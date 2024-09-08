import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavigationbarWithDropdownMultilevelMenu from "../Components/Navbar";

const DefaultLayout = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <div className="flex h-screen">
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-auto">
            <NavigationbarWithDropdownMultilevelMenu />
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
