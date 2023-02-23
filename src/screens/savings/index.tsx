import React from "react";
import styles from "./Savings.module.css";
import LinearProgress from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";

const Savings = () => {
  return (
    <div className={styles.container_savings}>
      <div className={styles.header_saving}>
        <div className={styles.banner}>
          <h3>
            No te conformes con gastar tu dinero sin rumbo. Con Finanzea, puedes
            ahorrar para lo que realmente importa
          </h3>
          <img src={"/saving/dinero.png"} />
        </div>
      </div>
      <div className={styles.body_saving}>
        <div className={styles.head}>
          <h4>Programa tus ahorros con Finanzea!</h4>
          <button>Agregar nuevo</button>
        </div>
        <div className={styles.line}></div>
        <div className={styles.savings_cards}>
          <div className={styles.card_saving}>
            <div className={styles.headCard}>
              <h4>Carro nuevo</h4>
            </div>
            <div className={styles.bodyCard}>
              <span>Meta total</span>
              <h3>$1.000.000</h3>
              <ProgressBar completed={50} maxCompleted={100} />
              <span>Abonado: <strong>$500.000</strong></span>
            </div>
            <div className={styles.buttonCard}>
              <button>
                <i className="bx bx-plus"></i>
                <strong> Meter dinero</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savings;
