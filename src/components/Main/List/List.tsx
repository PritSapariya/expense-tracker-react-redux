import React from "react";
import { FaTrashAlt } from "react-icons/fa"; // Importing the delete icon
import { MdMoneyOff } from "react-icons/md"; // Importing the money off icon
import { initialState } from "../../../utility/constants";
// import { ExpenseTrackerContext } from "../../../context/context";

const List: React.FC = () => {
  //   const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

  return (
    <ul className="space-y-4">
      {initialState.map((transaction) => (
        <li
          key={transaction.id}
          className="flex items-center bg-white shadow-lg rounded-lg p-4"
        >
          <div className="flex-shrink-0">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                transaction.type === "Income" ? "bg-green-500" : "bg-red-500"
              } text-white`}
            >
              <MdMoneyOff className="text-xl" />
            </div>
          </div>
          <div className="ml-4 flex-grow">
            <p className="font-semibold">{transaction.category}</p>
            <p className="text-sm text-gray-500">
              ${transaction.amount} - {transaction.date}
            </p>
          </div>
          <button
            // onClick={() => deleteTransaction(transaction.id)}
            className="text-red-500 hover:text-red-700 ml-auto"
            aria-label="delete"
          >
            <FaTrashAlt className="text-xl" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
