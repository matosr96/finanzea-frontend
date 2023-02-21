import React from "react";
import Header from "../header";
import Navigation from "../navigation";
import styles from "./Layout.module.css"

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Navigation />
      <div className={styles.screens}>
      {children}
      </div>
    
    </>
  );
};

export default Layout;
