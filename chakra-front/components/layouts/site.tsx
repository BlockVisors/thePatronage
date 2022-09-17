import React from "react";
import Navbar from "../navbar";

const Site = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};
export default Site;
