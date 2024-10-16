import React, { useMemo, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import { formatDate } from "../../../helper/dateHelper";
import { TransactionCategory } from "../../../utility/enums";
import {
  expenseCategories,
  incomeCategories,
} from "../../../utility/categories";
import { IFormData } from "../../../utility/types";

const initialState: IFormData = {
  amount: "",
  type: TransactionCategory.Income,
  category: "",
  date: formatDate(new Date()),
};

const Form: React.FC = () => {
  const [formData, setFormData] = useState<IFormData>(initialState);
  //   const { addTransaction } = useContext(ExpenseTrackerContext);

  const createTransaction = () => {
    // const transaction = {
    //   ...formData,
    //   amount: Number(formData.amount),
    //   id: uuidv4(),
    // };
    // addTransaction(transaction);
    setFormData(initialState);
  };

  const selectedCategories = useMemo(
    () =>
      formData.type === TransactionCategory.Income
        ? incomeCategories
        : expenseCategories,
    [formData.type]
  );

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Type Selector */}
      <div className="col-span-2 sm:col-span-1">
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <select
          value={formData.type}
          onChange={(e) =>
            setFormData({
              ...formData,
              type: e.target.value as TransactionCategory,
            })
          }
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value={TransactionCategory.Income}>Income</option>
          <option value={TransactionCategory.Expense}>Expense</option>
        </select>
      </div>

      {/* Category Selector */}
      <div className="col-span-2 sm:col-span-1">
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          {selectedCategories.map((c) => (
            <option key={c.type} value={c.type}>
              {c.type}
            </option>
          ))}
        </select>
      </div>

      {/* Amount Input */}
      <div className="col-span-2 sm:col-span-1">
        <label className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
          type="number"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Amount"
        />
      </div>

      {/* Date Input */}
      <div className="col-span-2 sm:col-span-1">
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: formatDate(e.target.value) })
          }
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Submit Button */}
      <div className="col-span-2">
        <button
          onClick={createTransaction}
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition duration-200"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Form;
