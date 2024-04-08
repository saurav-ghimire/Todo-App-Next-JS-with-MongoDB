"use client"
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { toast } from 'react-toastify';
import TodoContext from "@/lib/TodoContext";

const TodoTable = () => {
  
  const { todoState, setTodoState, fetchData } = useContext(TodoContext);
  
  console.log('i am before useEffect');
  
  useEffect(() => {
    console.log('i am in useEffect');
    fetchData();
  });

  console.log('i am after useEffect');
  const handleDelete = async (id) => {
    const response = await axios.delete(`https://todo-app-next-js-with-mongo-db.vercel.app/api`, {
      params: {
        id: id
      }
    });
    console.log('i am in Delete Fetch');
    useEffect(() => {
      fetchData();
    });
    if (response.status === 200) {
      toast.success('Item is Deleted', {
        autoClose: 3000,
      });
    }
  };

  const handleUpdate = async (id) => {
   const response = await axios.put('https://todo-app-next-js-with-mongo-db.vercel.app/api', {}, {
    params:{
      id:id
    }
   });
   console.log('i am in Update Fetch');
   useEffect(() => {
    console.log('i am in useEffect');
    fetchData();
  });
    if (response.status === 200) {
      toast.success('Item is Updated', {
        autoClose: 3000,
      });
    }
  }


  return (
    <div className="max-w-4xl mx-auto mt-8 m-8">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          { 
            todoState.map((todo, index) =>(
              <tr key={index + 1}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className={`px-6 py-4 whitespace-nowrap ${todo.status === 'Completed' && 'line-through'}`}>{todo.title}</td>
                <td className={`px-6 py-4 whitespace-nowrap ${todo.status === 'Completed' && 'line-through'}`}>{todo.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${todo.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>{todo.status}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  {todo.status === 'Pending' && (
                  <button className="bg-indigo-600 text-white p-1" onClick={() => handleUpdate(todo._id)}>
                    {todo.status === 'Pending' ? 'Mark Completed' : 'Mark Pending'}
                  </button>
                  )}
                  <button className="ml-2 p-1 bg-red-600 text-white" onClick={() => handleDelete(todo._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
