export interface Category {
  uuid: string;
  user_email: string;
  name: string;
  status: string;
}

export type PartialCategory = Partial<Category>;

export const EmptyCategoriesState: PartialCategory[] = [
  {
    uuid: "",
    user_email: "",
    name: "",
    status: "",
  },
];

export const EmptyCategoryState: PartialCategory = {
  uuid: "",
  user_email: "",
  name: "",
  status: "",
};

export interface CategoriesSlice {
  categories: ResultCategory[];
  category: PartialCategory;
  loading: boolean;
  success: boolean;
  error: string;
}

export interface ResultCategory {
  count: number;
  page: number;
  pages: number;
  items: Category[];
}
