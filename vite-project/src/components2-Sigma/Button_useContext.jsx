import React from "react";
import Component1_useContext from "./Component1_useContext";

const Button_useContext = () => {
  return (
    // <>
    //   <button>
    //     {" "}
    //     <span>
    //       {" "}
    //       {/*  See here this is a Example of "prop - drilling" */}
    //       <Component1_useContext count={count} />{" "}
    //     </span>{" "}
    //     <h1>
    //       {" "}
    //       This is a Example of Without using useContext hook from
    //       Button_useContext.jsx :- (Component){" "}
    //     </h1>
    //   </button>
    // </>

    <>
      <button>
        <span>
          <Component1_useContext  />
        </span>
        <h1>
          This is a Example of  using useContext hook from 
          Button_useContext.jsx :- (Component)
        </h1>
      </button>
    </>
  );
};

export default Button_useContext;
