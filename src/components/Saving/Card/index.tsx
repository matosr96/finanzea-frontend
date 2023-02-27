import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savingsListThunks } from "../../../redux/states/saving/thunks";
import { AppStore } from "../../../redux/store";
import PutMoney from "../../../screens/savings/put-money";
import {  Saving } from "../../../types/saving";
import { DivisaFormater } from "../../../utils/DivisaFormater";
import TimeAgo from "../../Timeago";
import ProgressBar from "../ProgressBar";
import styles from "./CardSaving.module.css";

const CardSaving = () => {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const {
    savings = [],
    success,
    loading,
  } = useSelector((state: AppStore) => state.savings);
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "";
  const { items } = savings;
  const Savinglist = items?.filter((saving: Saving) => {
    return saving.user_email === user.email;
  });

  const [savingSelected, setSavingSelected] = useState<Saving>({
    uuid: "",
    user_email: "",
    title: "",
    amount_saved: 0,
    goal: 0,
    goal_date: "",
    percentage: 0,
    status: "",
  });

  const openPutMoney = (data: Saving) => {
    setOpenModal(!openModal);
    setSavingSelected(data);
  };

  useEffect(() => {
    dispatch(savingsListThunks() as any);
  }, [dispatch, success]);

  console.log(Savinglist);
  return (
    <>
      {Savinglist?.map((saving: Saving) => (
        <>
          <div className={styles.card_saving}>
            <div className={styles.headCard}>
              <h4>{saving.title}</h4>
            </div>
            <div className={styles.bodyCard}>
              <div className={styles.info_date}>
                <span>Meta total</span>
                <span>Finzaliza {<TimeAgo date={saving.goal_date} />}</span>
              </div>

              <h3>{DivisaFormater(saving.goal)}</h3>
              <ProgressBar
                currentAmount={saving.amount_saved}
                totalAmount={saving.goal}
              />
              <span>
                Abonado:{" "}
                <strong>
                  {saving.amount_saved === undefined
                    ? 0
                    : DivisaFormater(saving.amount_saved)}
                </strong>
              </span>
            </div>
            <div className={styles.buttonCard}>
              <button onClick={() => openPutMoney(saving)}>
                <i className="bx bx-plus"></i>
                <strong> Meter dinero</strong>
              </button>
            </div>
          </div>
          {console.log("ESTA ES EN LA CARD", saving)}
        </>
      ))}
      <PutMoney
        openModal={openModal}
        setOpenModal={setOpenModal}
        savingData={savingSelected}
      />
    </>
  );
};

export default CardSaving;
