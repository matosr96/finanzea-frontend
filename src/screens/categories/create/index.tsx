import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategory, reset } from "../../../redux/states/category/slice";
import { createCategoryThunks } from "../../../redux/states/category/thunks";
import { AppStore } from "../../../redux/store";
import { PartialCategory } from "../../../types/category";
import styles from "./CreateCategory.module.css";

const CreateCategory = (props: any) => {
  const { openModal, setOpenModal } = props;
  const dispatch = useDispatch();

  const { success } = useSelector((state: AppStore) => state.categories);

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "";

  const [category, setCategory] = useState<PartialCategory>({
    user_email: user.email,
    name: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setCategory((prev) => ({ ...prev, [name]: value }));
  };

  const submitCreateHandler = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(createCategory(category) as any);
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
  }, [success]);

  return (
    <div className={openModal ? styles.openModal : styles.closeModal}>
      <div className={`${styles.modal} ${styles.scale_up_center}`}>
        <div className={styles.modal_header}>
          <h2 className={styles.title_modal}>Registrar Categoria</h2>
          <button
            className={styles.modal_close}
            onClick={() => setOpenModal(false)}
          >
            <i className="bx bx-x"></i>
          </button>
        </div>
        <div className={styles.form_container}>
          <form className={styles.form}>
            <div className={styles.div_input}>
              <span>Nombre de la categoria</span>
              <input
                type={"text"}
                name="name"
                value={category.name}
                onChange={handleChange}
              />
            </div>
            <button className={styles.submit} onClick={submitCreateHandler}>
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
