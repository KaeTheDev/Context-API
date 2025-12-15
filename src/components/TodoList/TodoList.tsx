import React, { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import FilterContext from "../../context/FilterContext";
import ThemeContext from "../../context/ThemeContext";
import TodoItem from "../TodoItem/TodoItem";

const TodoList: React.FC = () => {
  const todoContext = useContext(TodoContext);
  const filterContext = useContext(FilterContext);
  const themeContext = useContext(ThemeContext);

  if (!todoContext || !filterContext || !themeContext) {
    throw new Error("TodoList must be used within TodoProvider, FilterProvider, and ThemeProvider");
  }

  const { todos, clearCompleted } = todoContext;
  const { filter } = filterContext;
  const { theme } = themeContext;

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // all
  });

  const remainingTodos = todos.filter((todo) => !todo.completed).length;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <div
      className={`mt-4 p-4 rounded ${
        theme === "light" ? "bg-gray-100" : "bg-gray-900"
      }`}
    >
      {todos.length === 0 && (
        <p className={theme === "light" ? "text-gray-700" : "text-gray-300"}>
          No todos yet! Add one above.
        </p>
      )}

      {todos.length > 0 && filteredTodos.length === 0 && filter === "completed" && (
        <p className={theme === "light" ? "text-gray-700" : "text-gray-300"}>
          No completed todos yet.
        </p>
      )}

      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}

      {todos.length > 0 && (
        <div className="flex justify-between mt-4 text-sm">
          {/* Items left */}
          <span className={theme === "light" ? "text-gray-700" : "text-gray-300"}>
            {remainingTodos} item{remainingTodos !== 1 ? "s" : ""} left
          </span>

          {/* Clear completed */}
          {completedTodos > 0 && (
            <button
              onClick={clearCompleted}
              className={`px-2 py-1 rounded ${
                theme === "light"
                  ? "bg-gray-300 text-black hover:bg-gray-400"
                  : "bg-gray-700 text-white hover:bg-gray-600"
              }`}
            >
              Clear Completed ({completedTodos})
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoList;