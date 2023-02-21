import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "../../components/searchbox";
import { categoryListThunks } from "../../redux/states/category/thunks";
import { AppStore } from "../../redux/store";
import { Category } from "../../types/category";
import styles from "./Categories.module.css";
import CreateCategory from "./create";
import EditCategory from "./edit";

const Categories = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const {
    categories = [],
    success,
    loading,
  } = useSelector((state: AppStore) => state.categories);
  const { items } = categories;

  const [categorySelected, setCS] = useState<Category>({
    uuid: "",
    user_email: "",
    name: "",
    status: "",
  });
  const [openModalUpdate, setOPU] = useState(false);
  const openEdit = (category: Category) => {
    setCS(category);
    setOPU(!openModalUpdate);
  };

  useEffect(() => {
    dispatch(categoryListThunks() as any);
  }, [dispatch, success]);
  return (
    <>
      <div className={styles.container_categories}>
        <div className={styles.header_category}>
          <h2>Lista de Categorias</h2>
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
        <div className={styles.body_categories}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th>Categoria</th>
                <th>Autor</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((category: Category) => (
                <tr key={category.uuid}>
                  <td>{category.name}</td>
                  <td>{category.user_email}</td>
                  <td>
                    <div className={styles.container_actions_icons}>
                      <button
                        className={styles.icons_edit}
                        onClick={() => openEdit(category)}
                      >
                        <i className="bx bxs-edit"></i>
                      </button>
                      <button className={styles.icons_trash}>
                        <i className="bx bxs-trash-alt"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <CreateCategory openModal={openModal} setOpenModal={setOpenModal} />
      <EditCategory
        openModal={openModalUpdate}
        setOpenModal={setOPU}
        categoryData={categorySelected}
      />
    </>
  );
};

export default Categories;
