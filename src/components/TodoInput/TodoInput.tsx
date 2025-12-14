import React, { useState, useContext } from "react";
import TodoContext from "../../context/TodoContext";

const TodoInput: React.FC = () => {
  const [text, setText] = useState("");
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoInput must be used within a TodoProvider");
  }

  const { addTodo } = todoContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text.trim());
    setText(""); // clear input
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-4">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border px-4 py-2 flex-1 text-white mr-2"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-500">
        Add Todo
      </button>
    </form>
  );
};

export default TodoInput;