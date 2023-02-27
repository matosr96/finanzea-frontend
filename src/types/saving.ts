export type PartialSaving = Partial<Saving>;

export interface Saving {
  uuid: string;
  user_email: string;
  title: string;
  amount_saved: number;
  goal: number;
  goal_date: string;
  percentage: number;
  status: string;
}

export const EmptySavingsState: PartialSaving[] = [
  {
    uuid: "",
    user_email: "",
    title: "",
    amount_saved: 0,
    goal: 0,
    goal_date: "",
    percentage: 0,
    status: "",
  },
];

export const EmptySavingState: PartialSaving = {
  uuid: "",
  user_email: "",
  title: "",
  amount_saved: 0,
  goal: 0,
  goal_date: "",
  percentage: 0,
  status: "",
};

export interface ResultSaving {
  count: number;
  page: number;
  pages: number;
  items: Saving[];
}

export interface SavingsSlice {
  expenses: ResultSaving[];
  expense: ResultSaving;
  loading: boolean;
  success: boolean;
  error: string;
}

