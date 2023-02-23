import { VITE_API } from "../../../api";
import { PartialSaving } from "../../../types/saving";
import { loadingSavingById, setSavingById } from "./slice";

export const createSavingThunks = async (info: PartialSaving) => {
  const { data } = await VITE_API.post("/savings", { ...info });
  return data;
};

export const deleteSavingThunks = (uuid: string) => {
  VITE_API.delete(`/savings/${uuid}`);
  return true;
};

export const updateSavingThunks = async (info: PartialSaving) => {
  const { data } = await VITE_API.put(`/savings/${info.uuid}`, {
    data: info,
  });
  return data;
};

export const savingsListThunks = () => async (dispatch: any) => {
  dispatch(loadingSavingById());
  const { data } = await VITE_API.get(`/savings`);
  dispatch(setSavingById({ savings: data }));
  return data;
};

export const getOneSavingThunks = (uuid: string) => async (dispatch: any) => {
  dispatch(loadingSavingById());
  const { data } = await VITE_API.get(`/saving/${uuid}`);
  dispatch(setSavingById({ saving: data }));
  return data;
};
