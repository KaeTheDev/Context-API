import React, { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import type { TodoProps } from "../../types";

const TodoItem: React.FC<TodoProps> = ({ todo }) => {
    const todoContext = useContext(TodoContext);

    if(!todoContext) {
        throw new Error("TodoItem must be within a TodoProvider")
    }

    const { toggleTodo, deleteTodo } = todoContext;

    return (
        <div className="flex flex-row">
            <p
            onClick={() => toggleTodo(todo.id)}
            className={`flex-1 cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""}`}
            >{todo.text}
            </p>
            
            <button className="mx-2">✏️</button>
            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
        </div>
    );
};

export default TodoItem;