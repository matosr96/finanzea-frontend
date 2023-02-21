import React, { useState } from "react";
import Navigation from "../../components/navigation";
import SearchBox from "../../components/searchbox";
import TimeAgo from "../../components/Timeago";
import { DivisaFormater } from "../../utils/DivisaFormater";
import CreateExpense from "./create";
import { expenseList } from "./data/data";
import styles from "./Expense.module.css";

const Expenses = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Navigation>
      <div className={styles.container_categories}>
        <div className={styles.header_category}>
          <h2>Lista de Gastos</h2>
          <div className={styles.group_header_category}>
            <SearchBox />
            <button
              className={styles.btn_add_category}
              onClick={() => setOpenModal(!openModal)}
            >
              Agregar nueva
            </button>
          </div>
        </div>
        <div className={styles.body_expenses}>
          {expenseList.map((expense) => (
            <div className={styles.card_expenses}>
              <div className={styles.header_card}>
                <h4>{expense.title}</h4>
                <span>{<TimeAgo date={expense.createdAt} />}</span>
              </div>
              <div className={styles.body_card}>
                <span>{expense.category}</span>
                <p>{expense.description}</p>
              </div>
              <div className={styles.line}></div>
              <div className={styles.footer_card}>
                <span>{DivisaFormater(expense.amount)}</span>
                <div className={styles.actions_card}>
                  <button>
                    <i className="bx bxs-edit"></i>
                  </button>
                  <button>
                    <i className="bx bxs-trash-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CreateExpense openModal={openModal} setOpenModal={setOpenModal} />
    </Navigation>
  );
};

export default Expenses;
