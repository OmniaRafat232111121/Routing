import  { useState } from "react";
import useDataFetch from "./UseDataFetch";

const Users = () => {
  const { data, loading, error } = useDataFetch('https://jsonplaceholder.typicode.com/posts');
  const itemsPerPage = 10; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Calculate the start and end indexes for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items for the current page
  const currentPageItems = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mt-[80px]">
      <ul className="p-10">
        {currentPageItems.map((item) => (
          <>
             <li
            key={item.id}
            className="bg-gray-300 mt-3 p-4 rounded-md transform hover:translate-x-5 duration-300 ease-out cursor-pointer"
          >
            <h1 className="text-blue-700 font-bold">{item.title}</h1>
            <p className="font-semibold">{item.body}</p>
          </li>
          </>
        )
        )}
      </ul>

      <div className="flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
 
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'
            } hover:bg-blue-500 hover:text-white font-semibold px-4 py-2 rounded-full cursor-pointer`}
          >
            {index + 1}
          </button>
          
         )
        )}
      </div>
    </div>
  );
};

export default Users;
