import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navigation.module.css";

const Navigation = ({ children }: any) => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "";
  const { email, name, imageUrl, givenName } = user;

  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <>
      <nav
        className={
          isOpen ? styles.sidebar : `${styles.sidebar} ${styles.close}`
        }
      >
        <div className={styles.header_navigation}>
          <div className={styles.image_text}>
            <span className={styles.image}>
              <img src={imageUrl} alt="" />
            </span>

            <div className={`${styles.text} ${styles.logo_text}`}>
              <span className={styles.name}>{givenName}</span>
              <span className={styles.profession}>{email}</span>
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className={styles.toggle}>
            <i className="bx bx-menu "></i>
          </button>
        </div>
        <div className={styles.menu_bar}>
          <div className={styles.menu}>
            <ul className={styles.menu_links}>
              <li className={styles.nav_link}>
                <Link to={"/categories"} className={styles.link}>
                  <i className="bx bxs-category"></i>
                  <span className={styles.nav_text}>Categorias</span>
                </Link>
                <Link to={"/expenses"} className={styles.link}>
                  <i className="bx bx-money"></i>
                  <span className={styles.nav_text}>Gastos</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={isOpen ? styles.screens_open : styles.screens_close}>
        {children}
      </div>
    </>
  );
};

export default Navigation;
