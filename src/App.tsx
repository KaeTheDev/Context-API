import TodoInput from "./components/TodoInput/TodoInput";
import { TodoProvider } from "./context/TodoContext";
import { FilterProvider } from "./context/FilterContext";
import { ThemeProvider } from "./context/ThemeContext";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import ThemeToggleButton from "./components/ThemeToggleButton/ThemeToggleButton";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <TodoProvider>
      <FilterProvider>
        <ThemeProvider>
          <div className="flex flex-col px-4 py-4 mx-auto bg-black p-4 border rounded max-w-2xl mt-4">
            <div className="flex flex-row">
              <h1 className="text-2xl text-white mr-5">
                Todo App(Context API)
              </h1>
              <ThemeToggleButton />
            </div>
            <TodoInput />
            <FilterButtons />
            <TodoList />
          </div>
        </ThemeProvider>
      </FilterProvider>
    </TodoProvider>
  );
}

export default App;
