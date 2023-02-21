import { VITE_API } from "../../../api";
import { PartialCategory } from "../../../types/category";
import {
  loadingCategoriesById,
  setCategoriesById,
  setOneCategoryById,
} from "./slice";

export const createCategoryThunks = async (info: PartialCategory) => {
  const { data } = await VITE_API.post("/categories", { ...info });
  return data;
};

export const deleteCategoryByIdThunks = (uuid: string) => {
  VITE_API.delete(`/categories/${uuid}`);
  return true;
};

export const updateCategoryThunks = async (
  info: PartialCategory
) => {
  const { data } = await VITE_API.put(`/categories/${info.uuid}`, {
    data: info,
  });
  return data;
};

export const categoryListThunks = () => async (dispatch: any) => {
  dispatch(loadingCategoriesById());
  const { data } = await VITE_API.get(`/categories`);
  dispatch(setCategoriesById({ categories: data }));
  return data;
};

export const getOneCategoryThunks = (uuid: string) => async (dispatch: any) => {
  dispatch(loadingCategoriesById());
  const { data } = await VITE_API.get(`/category/${uuid}`);
  dispatch(setOneCategoryById({ category: data }));
  return data;
};
