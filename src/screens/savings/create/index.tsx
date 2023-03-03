import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSaving, reset } from "../../../redux/states/saving/slice";
import { AppStore } from "../../../redux/store";
import { PartialSaving } from "../../../types/saving";
import styles from "./CreateSaving.module.css";

interface Props {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateSaving = (props: Props) => {
  const dispatch = useDispatch();
  const { openModal, setOpenModal } = props;
  const { success } = useSelector((state: AppStore) => state.savings);
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "";

  const [saving, setSaving] = useState<PartialSaving>({
    user_email: user.email,
    title: "",
    goal: 0,
    goal_date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setSaving((prev) => ({ ...prev, [name]: value }));
  };

  const submitCreateHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(createSaving(saving) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
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
          <h2 className={styles.title_modal}>Nuevo Ahorro</h2>
          <button
            aria-label="close"
            className={styles.modal_close}
            onClick={() => setOpenModal(false)}
          >
            <i className="bx bx-x"></i>
          </button>
        </div>
        <div className={styles.form_container}>
          <form className={styles.form} onSubmit={submitCreateHandler}>
            <div className={styles.div_input}>
              <span>Objetivo del ahorro</span>
              <input
                name="title"
                placeholder={"ej: comprar carro nuevo"}
                value={saving.title}
                onChange={handleChange}
              />
            </div>
            <div className={styles.div_input}>
              <span>Meta de ahorro</span>
              <input
                type={"number"}
                name="goal"
                value={saving.goal}
                onChange={handleChange}
              />
            </div>
            <div className={styles.div_input}>
              <span>Fecha de cumplimiento</span>
              <input
                type={"date"}
                name="goal_date"
                value={saving.goal_date}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className={styles.submit}>
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateSaving;
