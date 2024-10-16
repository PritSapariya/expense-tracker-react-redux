import { ExpenseCategory, IncomeCategory, TransactionCategory } from "./enums";

// Define the category type with enums
export interface Category {
  type: IncomeCategory | ExpenseCategory;
  amount: number;
  color: string;
}

// form state
export interface IFormData {
  amount: string,
  type: TransactionCategory,
  category: string,
  date: string,
}
