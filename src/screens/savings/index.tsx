import React, { useState } from "react";
import styles from "./Savings.module.css";
import CreateSaving from "./create";
import Layout from "../../components/Layout";
import CardSaving from "../../components/Saving/Card";

const Savings = () => {
  const [openModal, setOpenModal] = useState(false);
  const openModalCreate = () => {
    setOpenModal(!openModal);
  };

  return (
    <Layout>
      <div className={styles.container_savings}>
        <div className={styles.header_saving}>
          <div className={styles.banner}>
            <h3>
              No te conformes con gastar tu dinero sin rumbo. Con Finanzea,
              puedes ahorrar para lo que realmente importa
            </h3>
            <img src={"/saving/dinero.png"} />
          </div>
        </div>
        <div className={styles.body_saving}>
          <div className={styles.head}>
            <h4>Programa tus ahorros con Finanzea!</h4>
            <button onClick={openModalCreate}>Agregar nuevo</button>
          </div>
          <div className={styles.line}></div>
          <div className={styles.savings_cards}>
            <CardSaving />
          </div>
        </div>
      </div>
      <CreateSaving openModal={openModal} setOpenModal={setOpenModal} />
    </Layout>
  );
};

export default Savings;
