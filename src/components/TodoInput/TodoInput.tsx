import React, { useState, useContext } from "react";
import TodoContext from "../../context/TodoContext";
import ThemeContext from "../../context/ThemeContext";

const TodoInput: React.FC = () => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext)!;
  const { theme } = useContext(ThemeContext)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-4">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={`flex-1 px-4 py-2 mr-2 rounded border ${
          theme === "light"
            ? "bg-gray-200 text-black border-gray-400"
            : "bg-gray-800 text-white border-gray-600"
        }`}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-500"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoInput;
