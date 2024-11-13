import React from 'react';
import stance from '../interceptors/userInterceptor';
import { toast } from 'react-toastify';

const BookList = ({ books, setBooks }) => {
  const handleDelete = async (id) => {
    try {
    
      await stance.delete(`/api/books/${id}`);
      
      setBooks((prevBooks) => prevBooks.filter(book => book._id !== id));
      toast.success("Book deleted successfully!"); 
    } catch (error) {
      console.error("Error deleting book:", error);
      toast.error("Error deleting book!"); 
    }
  };

  return (
    <div className="mt-8">
      {books.length > 0 ? (
        <ul className="space-y-4">
          {books.map((book) => (
            <li
              key={book._id}
              className="p-4 bg-white rounded shadow-md transition-all duration-300 transform hover:scale-90 hover:bg-blue-100 hover:shadow-xl"
            >
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-gray-700">Author: {book.author}</p>
              <p className="text-gray-600 mt-2">{book.description}</p>
              <button
                onClick={() => handleDelete(book._id)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No books available. Add a book!</p>
      )}
    </div>
  );
};

export default BookList;
