import { ExpenseCategory, IncomeCategory } from "./enums";
import { Category } from "./types";

// Keeping the colors as an array
const incomeColors: string[] = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors: string[] = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

// Income categories using enums
export const incomeCategories: Category[] = [
  { type: IncomeCategory.Business, amount: 0, color: incomeColors[0] },
  { type: IncomeCategory.Investments, amount: 0, color: incomeColors[1] },
  { type: IncomeCategory.ExtraIncome, amount: 0, color: incomeColors[2] },
  { type: IncomeCategory.Deposits, amount: 0, color: incomeColors[3] },
  { type: IncomeCategory.Lottery, amount: 0, color: incomeColors[4] },
  { type: IncomeCategory.Gifts, amount: 0, color: incomeColors[5] },
  { type: IncomeCategory.Salary, amount: 0, color: incomeColors[6] },
  { type: IncomeCategory.Savings, amount: 0, color: incomeColors[7] },
  { type: IncomeCategory.RentalIncome, amount: 0, color: incomeColors[8] },
];

// Expense categories using enums
export const expenseCategories: Category[] = [
  { type: ExpenseCategory.Bills, amount: 0, color: expenseColors[0] },
  { type: ExpenseCategory.Car, amount: 0, color: expenseColors[1] },
  { type: ExpenseCategory.Clothes, amount: 0, color: expenseColors[2] },
  { type: ExpenseCategory.Travel, amount: 0, color: expenseColors[3] },
  { type: ExpenseCategory.Food, amount: 0, color: expenseColors[4] },
  { type: ExpenseCategory.Shopping, amount: 0, color: expenseColors[5] },
  { type: ExpenseCategory.House, amount: 0, color: expenseColors[6] },
  { type: ExpenseCategory.Entertainment, amount: 0, color: expenseColors[7] },
  { type: ExpenseCategory.Phone, amount: 0, color: expenseColors[8] },
  { type: ExpenseCategory.Pets, amount: 0, color: expenseColors[9] },
  { type: ExpenseCategory.Other, amount: 0, color: expenseColors[10] },
];

// Reset function
export const resetCategories = () => {
  incomeCategories.forEach((c) => (c.amount = 0));
  expenseCategories.forEach((c) => (c.amount = 0));
};
