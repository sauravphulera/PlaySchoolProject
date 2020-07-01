import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";

const App = () => {
  /** variable to toggle drawer */
  const [toggleDrawer, setState] = React.useState(false);
  const handleMenuClick = () => {
    // const toggle = !toggleDrawer;
    setState(true);
    // console.log(toggleDrawer);
  };
  const closeDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(false);
  };

  return (
    <>
      <div>
      <Navbar onClickMenu={handleMenuClick} />
      </div>
      <Home toggleDrawer={toggleDrawer} closeDrawer={closeDrawer} />
    </>
  );
};

export default App;
