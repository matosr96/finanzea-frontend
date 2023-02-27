import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, updateSaving } from "../../../redux/states/saving/slice";
import { AppStore } from "../../../redux/store";
import styles from "./PutMoney.module.css";
import swal from "sweetalert";
import { convertToNumber, currencyMask } from "../../../utils/currencyMask";

interface DataProps {
  amount_saved: number;
  goal: number;
  uuid: string;
  percentage: number;
}

interface Props {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  savingData: DataProps;
}

const PutMoney = (props: Props) => {
  const dispatch = useDispatch();
  const { openModal, setOpenModal, savingData } = props;
  const { success } = useSelector((state: AppStore) => state.savings);
  const [amount_saved, setAmountSaved] = useState("");
  const handleAmountSavedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountSaved(e.target.value);
  };
  const submitPutMoneyHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let amountSavedNumber = convertToNumber(amount_saved);
    let diferencia = savingData.goal - savingData.amount_saved;
    let sumAmount = savingData.amount_saved + amountSavedNumber;

    if (savingData.amount_saved === undefined || amountSavedNumber <= diferencia) {
      try {
        dispatch(
          updateSaving({
            uuid: savingData.uuid,
            amount_saved: sumAmount,
          }) as any
        );
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
        }
      }
    } else {
      swal({
        text: "La cantidad a ingresar es mayor que el dinero restante para cumplir la meta",
        icon: "warning",
        buttons: ["Cancelar", "Continuar"],
        dangerMode: true,
      }).then((willDelete: any) => {
        if (willDelete) {
          dispatch(
            updateSaving({
              uuid: savingData.uuid,
              amount_saved: sumAmount,
            }) as any
          );
        }
      });
    }
  };

  useEffect(() => {
    if (success) {
      setOpenModal(false);
      dispatch(reset());
    }
  }, [success, dispatch]);

  return (
    <div className={openModal ? styles.openModal : styles.closeModal}>
      <div className={`${styles.modal} ${styles.scale_up_center}`}>
        <div className={styles.modal_header}>
          <h2 className={styles.title_modal}>Ingresar Dinero A Ahorro</h2>
          <button
            className={styles.modal_close}
            onClick={() => setOpenModal(false)}
          >
            <i className="bx bx-x"></i>
          </button>
        </div>
        <div className={styles.form_container}>
          <form className={styles.form} onSubmit={submitPutMoneyHandler}>
            <div className={styles.div_input}>
              <span>Monto a ingresar</span>
              <input
                type="text"
                value={"$" + amount_saved}
                onChange={(e) => handleAmountSavedChange(currencyMask(e))}
              />
            </div>
            <button type="submit" className={styles.submit}>
              <img src={"/saving/porc.png"} alt="icono ahorro" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PutMoney;
