import React from "react";
import CardDashboard from "../../components/Dashboard/Card";
import NavigationMenu from "../../components/Dashboard/navigationMenu";
import Navigation from "../../components/navigation";
import styles from "./Welcome.module.css";
import ProgressBar from "@ramonak/react-progress-bar";

const Welcome = () => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "";
  const { email, name, imageUrl, givenName } = user;
  return (
    <div className={styles.container_dashboard}>
      <h2 className={styles.welcome_message}>
        Bienvenido, {name} <i className="bx bxs-hand"></i>
      </h2>
      <NavigationMenu />
      <div className={styles.sections_dashboard}>
        <div className={styles.section_one}>
          <div className={styles.one_card}>
            <CardDashboard>
              <div className={styles.content_card}>
                <span>Balance total</span>
                <h2>$32,456.00</h2>
                <div className={styles.btn_content}>
                  <button>Transfer</button>
                  <button>Request</button>
                </div>
              </div>
            </CardDashboard>
          </div>
          <div className={styles.two_card}>
            <CardDashboard>
              <div className={styles.card_plans}>
                <h4>Plan de ahorros</h4>
                <div className={styles.savings_card}>
                  <div className={styles.header_saving}>
                    <div className={styles.image_saving}>
                      <img src={"./dashboard/saving.png"} />
                    </div>
                    <div className={styles.info_header}>
                      <h5>Comprar un nuevo carro</h5>
                      <span>ahorrado : $500,000</span>
                    </div>
                  </div>
                  <ProgressBar
                    completed={30}
                  
                    maxCompleted={100}
                  />
                </div>
              </div>
            </CardDashboard>
          </div>
        </div>
        <div className={styles.section_two}>
          <div className={styles.sec_card}>Hola</div>
          <div className={styles.sect_card}>Hola</div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
