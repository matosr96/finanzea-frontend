import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationMenu.module.css";

const NavigationMenu = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const handleClick = (id: string) => {
    setActiveLink(id);
  };
  return (
    <div className={styles.container_menu}>
      <nav className={styles.nav_menu}>
        <Link
          to={"/welcome"}
          className={`${styles.link} ${
            activeLink === "General" ? styles.active : styles.Link_menu_nav
          }`}
          onClick={() => handleClick("General")}
        >
          General
        </Link>
        <Link to={"/welcome"}  className={`${styles.link} ${
            activeLink === "Ingresos" ? styles.active : styles.Link_menu_nav
          }`}
          onClick={() => handleClick("Ingresos")}>
          Ingresos
        </Link>
        <Link to={"/welcome"}  className={`${styles.link} ${
            activeLink === "Facturas" ? styles.active : styles.Link_menu_nav
          }`}
          onClick={() => handleClick("Facturas")} >
          Facturas
        </Link>
        <Link to={"/welcome"} className={`${styles.link} ${
            activeLink === "Estadisticas" ? styles.active : styles.Link_menu_nav
          }`}
          onClick={() => handleClick("Estadisticas")} >
          Estadisticas
        </Link>
      </nav>
    </div>
  );
};

export default NavigationMenu;
