import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      {/* to render other things */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
