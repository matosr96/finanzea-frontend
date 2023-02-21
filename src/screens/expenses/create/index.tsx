import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputCloudinary from "../../../components/InputCloudinary/InputCloudinary";
import { categoryListThunks } from "../../../redux/states/category/thunks";
import { createExpense, reset } from "../../../redux/states/expense/slice";
import { AppStore } from "../../../redux/store";
import { Category } from "../../../types/category";
import { PartialExpense } from "../../../types/expense";
import styles from "./CreateExpense.module.css";

interface Props {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateExpense = (props: Props) => {
  const dispatch = useDispatch();
  const { openModal, setOpenModal } = props;
  const { success } = useSelector((state: AppStore) => state.expenses);
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "";
  const { categories = [], success: successCategories } = useSelector(
    (state: AppStore) => state.categories
  );
  const { items: itemsCategories } = categories;
  console.log(itemsCategories);

  const [imageUrl, setImageUrl] = useState("");

  const [expense, setExpense] = useState<PartialExpense>({
    user_email: user.email,
    category: "",
    title: "",
    description: "",
    amount: 0,
    support: "",
    status: "",
    createdAt: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setExpense((prev) => ({ ...prev, [name]: value }));
  };

  const submitCreateHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(createExpense(expense) as any);
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
    dispatch(categoryListThunks() as any);
  }, [success, successCategories, dispatch]);

  return (
    <div className={openModal ? styles.openModal : styles.closeModal}>
      <div className={`${styles.modal} ${styles.scale_up_center}`}>
        <div className={styles.modal_header}>
          <h2 className={styles.title_modal}>Registrar Gasto</h2>
          <button
            className={styles.modal_close}
            onClick={() => setOpenModal(false)}
          >
            <i className="bx bx-x"></i>
          </button>
        </div>
        <div className={styles.form_container}>
          <form className={styles.form} onSubmit={submitCreateHandler}>
            <div className={styles.duo_form}>
              <div className={styles.div_input}>
                <span>Titulo</span>
                <input
                  name="title"
                  value={expense.title}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.div_input}>
                <span>Categoria</span>
                <select name="type" onChange={handleChange}>
                  {itemsCategories?.map((category: Category) => (
                    <option value={category.uuid}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.duo_form}>
              <div className={styles.div_input}>
                <span>Descripcion</span>
                <textarea
                  name="description"
                  value={expense.description}
                  onChange={handleChange}
                />
              </div>
              <InputCloudinary idInput={"file"} setImageUrl={setImageUrl} />
            </div>
            <div className={styles.div_input}>
              <span>Monto</span>
              <input
                type={"number"}
                name="amount"
                value={expense.amount}
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

export default CreateExpense;
