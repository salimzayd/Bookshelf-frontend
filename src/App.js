import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import stance from './interceptors/userInterceptor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await stance.get('/api/books');
        setBooks(response.data.data); 
      } catch (error) {
        console.error("Error fetching books:", error);
        toast.error("Error fetching books!"); 
      }
    };

    fetchBooks();
  }, []);

  const addBook = async (newBook) => {
    try {
      const response = await stance.post('/api/books', newBook);
      setBooks((prevBooks) => [...prevBooks, response.data.data]);
      toast.success("Book added successfully!");
    } catch (error) {
      console.error("Error adding book:", error);
      toast.error("Error adding book!"); 
    }
  };

  return (
    <div 
      className="min-h-screen bg-gray-100 p-4 bg-cover bg-center" 
      style={{ backgroundImage: "url('/Assets/back.jpg')" }}>
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Book Listing App</h1>
      <AddBook addBook={addBook} />
      <BookList books={books} setBooks={setBooks} />
      <ToastContainer />
    </div>
  );
}

export default App;
