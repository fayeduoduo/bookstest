import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../store/books";
import "../style/books.css";

const BooksInfo = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.list);

  const handleDelete = (book) => {
    dispatch(deleteBook(book));
  };
  return (
    <div>
      <h1>Books Lists</h1>
      <Link to="/bookForm" className="addBtn">
        Add Book
      </Link>
      <div className="bookContainer">
        {books.map((book, id) => {
          return (
            <div className="bookInfo" key={id}>
              <div className="left">
                <Link to={`/books/${book._id}`} book={book}>
                  <img
                    src={book.image}
                    alt={book.name}
                    width={300}
                    height={350}
                  />
                </Link>
              </div>
              <div className="right">
                <h4>Name: {book.name}</h4>
                <p>
                  <strong>Price:</strong> ${book.price}
                </p>
                <p>
                  <strong>Catrogry:</strong> {book.category}
                </p>
                <p className="des">Description: {book.description}</p>
                <button
                  className="deleteBtn"
                  onClick={() => handleDelete(book)}
                >
                  Delete Book
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BooksInfo;
