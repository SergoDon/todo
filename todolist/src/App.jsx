import React, { useState, useMemo } from "react";
import { Header, Footer, Main } from "./components";
import { v4 as uuid } from "uuid";
import "./styles/index.scss";

export const AppContext = React.createContext();

const App = () => {
  const [todos, handleChangeTodos] = useState([
    { id: uuid(), title: `Todo 1`, isCompleted: false },
    { id: uuid(), title: `Todo 2`, isCompleted: false },
    { id: uuid(), title: `Todo 3`, isCompleted: false },
  ]);

  const addNewTodo = (targetTitle) =>
    handleChangeTodos((state) => {
      let newState = [...state];
      newState.push({ id: uuid(), title: `${targetTitle}`, isCompleted: false });
      return newState;
    });

  const [filter, setFilter] = useState(null);

  const filteredTodos = useMemo(() => {
    if (!filter) {
      return todos;
    } else {
      const [[selector, selectorValue]] = Object.entries(filter);
      return [...todos].filter((todo) => todo[selector] === selectorValue);
    }
  }, [filter, todos]);

  const todoItems = () => {
    const todoItems = filteredTodos.filter((todo) => !todo.isCompleted);
    return todoItems.length > 1 ? `${todoItems.length} items left` : `${todoItems.length} item left`;
  };

  const removeTodo = (id) => {
    handleChangeTodos((state) => [...state].filter((todo) => todo.id !== id));
  };

  const removeTodos = (selector, value) => {
    handleChangeTodos((state) => [...state].filter((todo) => todo[selector] !== value));
  };

  const selectTodo = (id, isCompleted) => {
    handleChangeTodos((state) => [...state].map((todo) => (todo.id === id ? { ...todo, isCompleted } : todo)));
  };

  return (
    <AppContext.Provider
      value={{
        todos: filteredTodos,
        setFilter,
        todoItems,
        removeTodo,
        selectTodo,
        removeTodos,
        addNewTodo,
        filter,
      }}
    >
      <div className="app">
        <Header />
        <Main
          todos={filteredTodos}
          setFilter={setFilter}
          todoItems={todoItems}
          removeTodo={removeTodo}
          selectTodo={selectTodo}
          removeTodos={removeTodos}
          addNewTodo={addNewTodo}
          filter={filter}
        />
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default App;
