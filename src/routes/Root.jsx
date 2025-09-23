import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/navbar/Navigation";

import Services from "../components/services/Services";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <div>
      <Navigation />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
