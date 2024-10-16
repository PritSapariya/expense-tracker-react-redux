import React from "react";
import List from "./List/List";
import Form from "./Form/Form";

interface IMainProps {}

const Main: React.FC<IMainProps> = () => {
  return (
    <div className="max-w-[600px] mx-auto bg-white shadow-lg rounded-lg p-6 max-h-[600px] h-auto overflow-scroll">
      <div className="border-b pb-4 mb-4">
        <h2 className="text-xl font-bold">Expense Tracker</h2>
      </div>

      <div className="mb-6">
        <p className="text-center text-2xl font-semibold">
          Total Balance: $100
        </p>
      </div>

      <hr className="my-6" />

      <div className="mb-6">
        <Form />
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
