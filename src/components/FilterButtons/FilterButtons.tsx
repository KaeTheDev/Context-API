import React, { useContext } from "react";
import FilterContext from "../../context/FilterContext";
import ThemeContext from "../../context/ThemeContext";

const FilterButtons: React.FC = () => {
  const { filter, setFilter } = useContext(FilterContext)!;
  const { theme } = useContext(ThemeContext)!;

  const getButtonClass = (name: string) => {
    const isActive = filter === name;
    if (theme === "light") {
      return `px-4 py-2 rounded mr-2 ${
        isActive ? "bg-blue-600 text-white" : "bg-gray-400 text-black hover:bg-gray-500"
      }`;
    } else {
      return `px-4 py-2 rounded mr-2 ${
        isActive ? "bg-blue-600 text-white" : "bg-gray-700 text-white hover:bg-gray-600"
      }`;
    }
  };

  return (
    <div className="flex mt-4 justify-center">
      <button onClick={() => setFilter("all")} className={getButtonClass("all")}>All</button>
      <button onClick={() => setFilter("active")} className={getButtonClass("active")}>Active</button>
      <button onClick={() => setFilter("completed")} className={getButtonClass("completed")}>Completed</button>
    </div>
  );
};

export default FilterButtons;