import React from "react";
import NavigationMenu from "../../components/Dashboard/navigationMenu";
import Navigation from "../../components/navigation";
import styles from "./Welcome.module.css";

const Welcome = () => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "";
  const { email, name, imageUrl, givenName } = user;
  return (
    <div className={styles.container_dashboard}>
      <h2 className={styles.welcome_message}>Bienvenido, {name} <i className='bx bxs-hand' ></i></h2>
      <NavigationMenu />
    </div>
  );
};

export default Welcome;
