import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/states/user/slice";
import SearchBox from "../searchbox";
import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "";
  const { email, name, imageUrl, givenName } = user;

  const [activeLink, setActiveLink] = useState<string>("");
  const [openMenu, setOpenMenu] = useState(false);
  const HandlerMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleClick = (id: string) => {
    setActiveLink(id);
  };

  const signoutHandler = () => {
    try {
      dispatch(logoutUser() as any);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container_header}>
      <div className={styles.group_logo}>
        <img src="./header/logo.png" />
        <div className={styles.links_header}>
          <Link
            to={"/welcome"}
            className={`${styles.link} ${
              activeLink === "dashboard" ? styles.active : ""
            }`}
            onClick={() => handleClick("dashboard")}
          >
            Dashboard
          </Link>
          <Link
            to={"/welcome"}
            className={`${styles.link} ${
              activeLink === "transactions" ? styles.active : ""
            }`}
            onClick={() => handleClick("transactions")}
          >
            Transacciones
          </Link>
          <Link
            to={"/welcome"}
            className={`${styles.link} ${
              activeLink === "categories" ? styles.active : ""
            }`}
            onClick={() => handleClick("categories")}
          >
            Categorias
          </Link>
          <Link
            to={"/welcome"}
            className={`${styles.link} ${
              activeLink === "expenses" ? styles.active : ""
            }`}
            onClick={() => handleClick("expenses")}
          >
            Gastos
          </Link>
        </div>
      </div>
      <div className={styles.section_profile}>
        <SearchBox />
        <button className={styles.btn_notification}>
          <i className="bx bx-bell"></i>
        </button>
        <div className={styles.profile_picture}>
          <img src={imageUrl} alt="profile picture" />
          <button className={styles.btn_options} onClick={HandlerMenu}>
            {openMenu ? (
              <i className="bx bxs-up-arrow"></i>
            ) : (
              <i className="bx bxs-down-arrow"></i>
            )}
          </button>
        </div>
        {openMenu && (
          <div className={styles.options_menu}>
            <ul>
              <Link to={"/welcome"} className={styles.Link}>
                Mi perfil
              </Link>
              <Link to={"/welcome"} className={styles.Link}>
                Configuración
              </Link>
            </ul>
            <button className={styles.btn_menu} onClick={signoutHandler}>
              <i className="bx bxs-log-out"></i>
              <span className={styles.nav_text}>Salir</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
