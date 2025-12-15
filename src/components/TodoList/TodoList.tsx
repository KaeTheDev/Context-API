import React, { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import FilterContext from "../../context/FilterContext";
import TodoItem from "../TodoItem/TodoItem";

const TodoList: React.FC = () => {
  const todoContext = useContext(TodoContext);
  const filterContext = useContext(FilterContext);

  if (!todoContext || !filterContext) {
    throw new Error("TodoList must be used within providers");
  }

  const { todos } = todoContext;
  const { filter } = filterContext;

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // all
  });

  return (
    <div className="flex flex-col mt-4 gap-2">
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} /> // ✅ pass each todo here
      ))}
    </div>
  );
};

export default TodoList;