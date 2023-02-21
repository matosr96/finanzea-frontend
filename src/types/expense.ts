export type PartialExpense = Partial<Expense>;

export interface Expense {
  uuid: string;
  user_email: string;
  category: string;
  title: string;
  description: string;
  amount: number;
  support: string;
  status: string;
  createdAt: string;
}

export const EmptyExpensesState: PartialExpense[] = [
  {
    uuid: "",
    user_email: "",
    category: "",
    title: "",
    description: "",
    amount: 0,
    support: "",
    status: "",
    createdAt: "",
  },
];

export const EmptyExpenseState: PartialExpense = {
  uuid: "",
  user_email: "",
  category: "",
  title: "",
  description: "",
  amount: 0,
  support: "",
  status: "",
  createdAt: "",
};

export interface ResultExpense {
  count: number;
  page: number;
  pages: number;
  items: Expense[];
}

export interface ExpensesSlice {
  expenses: ResultExpense[];
  expense: PartialExpense;
  loading: boolean;
  success: boolean;
  error: string;
}

export interface ExpenseInput {
  user_email: string;
  category: string;
  title: string;
  description: string;
  amount: number;
  support?: string;
  status?: string;
  createdAt?: string;
}
