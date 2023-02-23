import React, { ReactNode } from "react";
import styles from "./Card.module.css";

const CardDashboard = ({ children }: { children: ReactNode }) => {
  return <div className={`${styles.card} ${styles.card_5}`}>{children}</div>;
};

export default CardDashboard;
