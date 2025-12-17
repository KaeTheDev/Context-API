# React Lab – Context API Todo Application

##  Overview
This lab focuses on building a fully functional Todo application using React’s Context API for global state management. Instead of relying on prop drilling or external state management libraries, multiple contexts are designed and implemented to manage todos, visibility filters, and theming.

##  Workplace Context
In many real-world React applications, developers must manage shared state across deeply nested components without overcomplicating the architecture. This lab simulates a common workplace scenario where Context API is the right-sized solution for application-wide state such as user preferences, filters, and shared data models like todos.


##  Learning Objectives
Upon successful completion of this lab, you will be able to:

* Design and implement multiple independent contexts for global state.
* Create and use Context Providers to share state and actions across the component tree.
* Consume context values using the `useContext` hook.
* Manage complex state using `useState` or `useReducer` within context providers.
* Coordinate interactions between multiple contexts (e.g., filtering todos).
* Implement basic persistence using `localStorage`.
* Understand basic performance considerations when using Context API.

##  Description

This lab focuses on:

* Implementing a Todo application using React Context API.
* Creating separate contexts for todos, filters, and theming.
* Managing state updates through context-exposed actions.
* Persisting application state to `localStorage`.
* Applying basic optimization techniques to reduce unnecessary re-renders.

### Core Todo Management (TodoContext)
**State:**
An array of todo items, where each item includes:
* `id` — unique identifier
* `text` — todo content
* `completed` — completion status

**Actions:**
* `addTodo(text)`
* `toggleTodo(id)`
* `deleteTodo(id)`
* `editTodo(id, newText)`
* `clearCompleted()`

**Components:**
* `TodoInput`
* `TodoList`
* `TodoItem`

---

### Visibility Filters (FilterContext)
**State:**
* `all`
* `active`
* `completed`

**Actions:**
* `setFilter(filter)`

**Components:**
* `FilterButtons`

Todos displayed in `TodoList` update dynamically based on the selected filter.

---

### Theme Switching (ThemeContext)
**State:**
* `light`
* `dark`

**Actions:**
* `toggleTheme()`

**Components:**
* `ThemeToggleButton`

Theme changes affect the main application container and key UI components.

---

### Persistence Layer
* Todo state and theme preference are saved to `localStorage`.
* Application state rehydrates from `localStorage` on load.
* Updates to todos or theme automatically sync to storage.

---

##  Resources

*  React Docs — https://react.dev
*  TypeScript Handbook — https://www.typescriptlang.org/docs
*  React Hooks Guide — Official Documentation
*  TypeScript + React Cheatsheets (recommended)


##  Getting Started

##  Requirements

*  Node.js v24+
*  npm
*  Git
*  A code editor (VS Code recommended)
*  TypeScript
*  React

##  OS Compatibility

This lab works on:

*  Windows
*  macOS
*  Linux

##  Installation

1. Clone the repository:

git clone [<repository-url>](https://github.com/KaeTheDev/Context-API.git)

2. Navigate into the project folder:

cd context-api

##  Setup

1. Install dependencies:

npm install

2. Run the project:

npm run dev

##  Project Structure

* components/ — Contains all React components used in the app.
* contexts/ — Context definitions and providers for Todos, Filters, and Theme.
* types/ — Shared TypeScript types and interfaces.
* utils/ — Helper functions (e.g., localStorage utilities).


*  components/ — Contains all React components used in the app.
*  types/ — Shared TypeScript types/interfaces used across components.
*  utils / - Helper functions (e.g., localStorage utilities).

## Reflection
