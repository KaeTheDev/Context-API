export interface Todo {
    id: string,
    text: string,
    completed: boolean;
}

export interface TodoContextType {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
    editTodo: (id: string, newText: string) => void;
    clearCompleted: () => void;
}
export type Filter = 'all' | 'active' | 'completed';

export interface FilterContextType {
    filter: Filter;
    setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}