import React from "react";

import Button_useContext from "./Button_useContext";

const Navbar_useContext = () => {
  return (
    // <>
    //   <div>
    //     {" "}
    //     This is a Example of without Using  useContext hook from Navbar_useContext.jsx
    //     (Component){" "}
    //   </div>
    //   {/*  See here this is a Example of "prop - drilling" */}
    //   <Button_useContext count={count} />
    // </>

    <>
      <div>
        This is a Example of useContext hook from Navbar_useContext.jsx
        (Component)
      </div>
      <Button_useContext />
    </>
  );
};

export default Navbar_useContext;
