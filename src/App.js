import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
// import BookShow from "./components/BookShow";

export default function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    console.log("Need to add the book with :", title);
    // setBooks(title);
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title }
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate onCreate={createBook} />
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
    </div>
  );
}
