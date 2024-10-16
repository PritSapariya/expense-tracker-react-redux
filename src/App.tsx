import Details from "./components/Details/Details";
import Main from "./components/Main/Main";

import { TransactionCategory } from "./utility/enums";

export default function App() {
  return (
    <div className="container max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 space-x-2 sm:grid-cols-3 items-center justify-center h-screen space-y-4 sm:space-y-0">
        <div className="sm:col-span-1">
          <Details type={TransactionCategory.Income} />
        </div>
        <div className="sm:col-span-1">
          <Main />
        </div>
        <div className="sm:col-span-1">
          <Details type={TransactionCategory.Expense} />
        </div>
      </div>
    </div>
  );
}
