import axios from "axios";
import { useEffect, useState } from "react";

const TodoTable = () => {
  const [todoState, setTodoState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api');
        setTodoState(response.data.todos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  

  return (
    <div className="max-w-4xl mx-auto mt-8">
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
              <td className="px-6 py-4 whitespace-nowrap">{todo.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{todo.description}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${todo.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>{todo.status}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="bg-indigo-600 text-white p-1">
                  {todo.status === 'Pending' ? 'Mark Completed' : 'Mark Pending'}
                </button>
                <button className="ml-2 p-1 bg-red-600 text-white">
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
