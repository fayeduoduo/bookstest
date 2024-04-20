import React, { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateBook } from "../store/books";
import "../style/bookdetail.css";

const BookDetail = () => {
  //get rooter id；
  const params = useParams();
  const dispatch = useDispatch();
  const router = useNavigate();
  const { id } = params;
  const books = useSelector((state) => state.books.list);
  const book = useMemo(
    () => books.find((book) => book._id === id),
    [books, id]
  );

  const [form, setForm] = useState({});

  useEffect(() => {
    setForm(book);
  }, [book]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook(form));
    router("/");
  };

  return (
    <div className="container">
      <Link to="/" className="backBtn">
        Back
      </Link>
      <h2>Book Introduction</h2>
      <div className="book_detail">
        <div className="left">
          <img src={form.image} alt={form.name} width={300} height={350} />
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <div className="formBox">
              <label>
                <strong>Name: </strong>
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
              />
            </div>
            <div className="formBox">
              <label>
                <strong>Price: </strong>
              </label>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                value={form.price}
              />
            </div>
            <div className="formBox">
              <label>
                <strong>Category: </strong>
              </label>
              <input
                type="text"
                name="category"
                onChange={handleChange}
                value={form.category}
              />
            </div>
            <div className="formBox">
              <label>
                <strong>Description: </strong>
              </label>
              <textarea
                type="text"
                name="description"
                onChange={handleChange}
                value={form.description}
              />
            </div>
            <input type="submit" value="Submit" rows={20} cols={20} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
