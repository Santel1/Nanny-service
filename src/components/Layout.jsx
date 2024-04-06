import React, { Suspense } from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import { Loader } from "./Loader";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <Header
        className={isHomePage ? "transparentHeader" : "greenHeader"}
        isHomePage={isHomePage}
      />
      <main>
        <Suspense fullback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
