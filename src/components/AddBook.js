import React, { useState } from 'react';

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !description) {
      alert("All fields are required");
      return;
    }

    const newBook = { title, author, description };
    addBook(newBook);

    setTitle('');
    setAuthor('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a New Book</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
