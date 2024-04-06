// components/TodoForm.js
"use client"

import TodoTable from '@/components/Form/page';
import axios from 'axios';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const TodoForm = () => {
  const title = useRef("")
  const description = useRef("")
  
  const handle = async (e) => {
    e.preventDefault();
    
    try{
      let newTodo = {
      title: title.current.value,
      description: description.current.value,
      }
      const response = await axios.post('/api', newTodo);
      if(response.status === 200){
        
        // Reseting Value
        title.current.value = "";
        description.current.value = "";

        toast.success('Todo Created!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light"
          });

      }
    }
    catch(error){
      toast.error('Server Error', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
    }
  }

  return (
    <>
    <div className="max-w-xl mx-auto bg-white p-8 mt-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Todo</h2>
      <form onSubmit={handle} >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            ref={title}
            placeholder="Enter title for todo"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            rows="4"
            placeholder="Enter description for todo"
            ref={description}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
    <TodoTable />
    </>
  );
};

export default TodoForm;
