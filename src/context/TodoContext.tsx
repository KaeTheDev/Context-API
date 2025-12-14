import React, { useState, useEffect } from "react";
import type { TodoContextType, Todo } from "../types";

// Create the context with a default value of null
const TodoContext = React.createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>(() => {

        // Load todos from localStorage if present
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        // Persist todos to localStorage whenever they change
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // Action functions
    const addTodo = (text: string) => {
        const newTodo: Todo = { id: Date.now().toString(), text, completed: false };
        setTodos(prev => [...prev, newTodo]);
    };

    const toggleTodo = (id: string) => {
        setTodos(prev => prev.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo ))
    );
    };

    const deleteTodo = (id: string) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    const editTodo = (id: string, newText: string) => {
        setTodos(prev => prev.map(todo => (todo.id === id ? { ...todo, text: newText } : todo))
    );
    };

    const clearCompleted = () => {
        setTodos(prev => prev.filter(todo => !todo.completed));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;