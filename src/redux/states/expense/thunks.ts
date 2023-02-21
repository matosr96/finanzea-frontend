import { VITE_API } from "../../../api";
import { PartialExpense } from "../../../types/expense";
import {
  loadingExpensesById,
  setExpensesById,
  setOneExpenseById,
} from "./slice";

export const createExpenseThunks = async (info: PartialExpense) => {
  const { data } = await VITE_API.post("/expenses", { ...info });
  return data;
};

export const deleteExpenseThunks = (uuid: string) => {
  VITE_API.delete(`/expenses/${uuid}`);
  return true;
};

export const updateExpenseThunks = async (info: PartialExpense) => {
  const { data } = await VITE_API.put(`/expenses/${info.uuid}`, {
    data: info,
  });
  return data;
};

export const expensesListThunks = () => async (dispatch: any) => {
  dispatch(loadingExpensesById());
  const { data } = await VITE_API.get(`/expenses`);
  dispatch(setExpensesById({ expenses: data }));
  return data;
};

export const getOneExpenseThunks = (uuid: string) => async (dispatch: any) => {
  dispatch(loadingExpensesById());
  const { data } = await VITE_API.get(`/expense/${uuid}`);
  dispatch(setOneExpenseById({ expenses: data }));
  return data;
};
