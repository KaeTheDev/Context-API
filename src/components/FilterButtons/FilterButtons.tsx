import React, { useContext } from "react";
import FilterContext from "../../context/FilterContext";

const FilterButtons: React.FC = () => {
  const filterContext = useContext(FilterContext);

  if (!filterContext) {
    throw new Error("FilterButtons must be used within a FilterProvider");
  }

  const { filter, setFilter } = filterContext;

  return (
    <div className="flex flex-row mt-4 justify-center">
      <button
        onClick={() => setFilter("all")}
        className={`text-white px-5 py-4 border mr-4 ${
          filter === "all" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-500"
        }`}
      >
        All
      </button>
      <button 
       onClick={() => setFilter("active")}
      className= {`text-white px-5 py-4 border mr-4 ${
        filter === "active" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-500"
      }`}>
        Active
      </button>
      <button 
        onClick={() => setFilter("completed")}
      className={`text-white px-5 py-4 border mr-4 ${
        filter === "completed" ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-500"
      }`}>
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;