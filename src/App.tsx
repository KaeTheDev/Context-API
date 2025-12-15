import React, { useContext } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import { TodoProvider } from "./context/TodoContext";
import { FilterProvider } from "./context/FilterContext";
import { ThemeProvider } from "./context/ThemeContext";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import ThemeToggleButton from "./components/ThemeToggleButton/ThemeToggleButton";
import TodoList from "./components/TodoList/TodoList";
import ThemeContext from "./context/ThemeContext";

const AppContent: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) throw new Error("AppContent must be used inside ThemeProvider");

  const { theme } = themeContext;

  return (
    <div
      className={`flex flex-col px-4 py-4 mx-auto p-4 border rounded max-w-2xl mt-4 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="flex flex-row items-center justify-between mb-4">
        <h1 className="text-2xl">Todo App (Context API)</h1>
        <ThemeToggleButton />
      </div>
      <TodoInput />
      <FilterButtons />
      <TodoList />
    </div>
  );
};

function App() {
  return (
    <TodoProvider>
      <FilterProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </FilterProvider>
    </TodoProvider>
  );
}

export default App;