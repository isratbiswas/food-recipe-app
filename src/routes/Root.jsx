import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/navbar/Navigation";
import Bannar from "../components/navbar/Bannar";
import Services from "../components/services/Services";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <div>
      <Navigation />
      <Bannar />

      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
