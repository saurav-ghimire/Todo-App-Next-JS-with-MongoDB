"use client"
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import TodoContext from './TodoContext';

const TodoContextProvider = ({ children }) => {
  const [todoState, setTodoState] = useState([]);

  // Define fetchData function
  const fetchData = async () => {
    try {
      const response = await axios.get('https://todo-app-next-js-with-mongo-db.vercel.app/api');
      setTodoState(response.data.todos);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect to fetch data on mount and when todoState changes
  useEffect(() => {
    fetchData();
  }, []); // Run once on mount

  // Define fetchAndSetData function
  const fetchAndSetData = () => {
    fetchData(); // Call fetchData to update todoState
  };

  // Define value object with todoState, setTodoState, and fetchAndSetData
  const value = {
    todoState,
    setTodoState,
    fetchData
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

// Custom hook to access TodoContext
export const useTodoContext = () => {
  return useContext(TodoContext);
};

export default TodoContextProvider;
