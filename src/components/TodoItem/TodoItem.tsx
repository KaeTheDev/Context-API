import React, { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";
import ThemeContext from "../../context/ThemeContext";
import type { TodoProps } from "../../types";

const TodoItem: React.FC<TodoProps> = ({ todo }) => {
  const todoContext = useContext(TodoContext);
  const themeContext = useContext(ThemeContext);

  if (!todoContext) {
    throw new Error("TodoItem must be within a TodoProvider");
  }

  if (!themeContext) {
    throw new Error("TodoItem must be within a ThemeProvider");
  }

  const { toggleTodo, deleteTodo, editTodo } = todoContext;
  const { theme } = themeContext;

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() === "") return;
    editTodo(todo.id, editText.trim());
    setIsEditing(false);
  };

  return (
    <div
      className={`flex flex-row items-center gap-2 px-4 py-3 rounded ${
        theme === "light" ? "bg-gray-200" : "bg-gray-800"
      }`}
    >
      {/* Left side: toggle + text/input */}
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
          ${
            todo.completed
              ? theme === "light"
                ? "bg-blue-600 border-blue-600"
                : "bg-blue-600 border-blue-600"
              : theme === "light"
              ? "border-gray-500"
              : "border-gray-400"
          }`}
      >
        {todo.completed && "✓"}
      </button>

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit} // save on blur
          onKeyDown={(e) => e.key === "Enter" && handleEdit()} // save on Enter
          className={`flex-1 px-2 py-1 rounded ${
            theme === "light" ? "text-black bg-gray-100" : "text-white bg-gray-700"
          }`}
          autoFocus
        />
      ) : (
        <span
          className={`flex-1 cursor-pointer ${
            todo.completed
              ? theme === "light"
                ? "line-through text-gray-500"
                : "line-through text-gray-400"
              : theme === "light"
              ? "text-black"
              : "text-white"
          }`}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </span>
      )}

      {/* Right side: edit + delete */}
      <button
        onClick={() => setIsEditing(true)}
        className={theme === "light" ? "text-black" : "text-white"}
      >
        ✏️
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className={theme === "light" ? "text-red-600" : "text-red-400"}
      >
        🗑️
      </button>
    </div>
  );
};

export default TodoItem;