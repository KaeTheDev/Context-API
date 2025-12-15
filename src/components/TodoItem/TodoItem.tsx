import React, { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";
import type { TodoProps } from "../../types";

const TodoItem: React.FC<TodoProps> = ({ todo }) => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoItem must be within a TodoProvider");
  }

  const { toggleTodo, deleteTodo, editTodo } = todoContext;

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() === "") return;
    editTodo(todo.id, editText.trim());
    setIsEditing(false);
  };

  return (
    <div className="flex flex-row items-center gap-2 bg-gray-800 px-4 py-3 rounded">
      {/* Left side: toggle + text/input */}
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
          ${todo.completed ? "bg-blue-600 border-blue-600" : "border-gray-400"}`}
      >
        {todo.completed && "✓"}
      </button>

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}      // save on blur
          onKeyDown={(e) => e.key === "Enter" && handleEdit()} // save on Enter
          className="flex-1 px-2 py-1 rounded text-white"
          autoFocus
        />
      ) : (
        <span
          className={`flex-1 cursor-pointer text-white ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.text}
        </span>
      )}

      {/* Right side: edit + delete */}
      <button onClick={() => setIsEditing(true)}>✏️</button>
      <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
    </div>
  );
};

export default TodoItem;