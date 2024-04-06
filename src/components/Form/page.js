const TodoTable = () => {
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
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">1</td>
            <td className="px-6 py-4 whitespace-nowrap">Buy groceries</td>
            <td className="px-6 py-4 whitespace-nowrap">Get eggs, milk, and bread</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button className="text-indigo-600 hover:text-indigo-900 focus:outline-none">
                Mark Completed
              </button>
              <button className="ml-2 text-red-600 hover:text-red-900 focus:outline-none">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">2</td>
            <td className="px-6 py-4 whitespace-nowrap">Call mom</td>
            <td className="px-6 py-4 whitespace-nowrap">Wish her a happy birthday</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button className="text-indigo-600 hover:text-indigo-900 focus:outline-none">
                Mark Pending
              </button>
              <button className="ml-2 text-red-600 hover:text-red-900 focus:outline-none">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">3</td>
            <td className="px-6 py-4 whitespace-nowrap">Workout</td>
            <td className="px-6 py-4 whitespace-nowrap">Go for a jog in the park</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button className="text-indigo-600 hover:text-indigo-900 focus:outline-none">
                Mark Completed
              </button>
              <button className="ml-2 text-red-600 hover:text-red-900 focus:outline-none">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
