import React, { ReactNode } from "react";
import Header from "../header";
import styles from "./Layout.module.css"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
