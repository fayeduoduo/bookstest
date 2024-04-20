import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addBook } from "../store/books/index";
import "../style/bookform.css";

const BookForm = () => {
  const [inputVal, setInputVal] = useState({});
  const dispatch = useDispatch();
  const router = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInputVal((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      ...inputVal,
      id: new Date().toISOString(),
    };
    dispatch(addBook(book));
    router("/");
    console.log(inputVal);
  };
  return (
    <>
      <Link to="/">
        <button>Back</button>
      </Link>
      <h1>Input New Book Info</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form_box">
          <label htmlFor="name">Book Name</label>
          <input
            type="text"
            name="name"
            value={inputVal.name}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="form_box">
          <label htmlFor="price">Book Price</label>
          <input
            type="number"
            name="price"
            value={inputVal.price}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="form_box">
          <label htmlFor="category">Book Category</label>
          <input
            type="text"
            name="category"
            value={inputVal.category}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="form_box">
          <label htmlFor="desciption">Book Description</label>
          <textarea
            rows={10}
            cols={20}
            value={inputVal.des}
            name="des"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form_box">
          <input type="submit" id="submit" />
        </div>
      </form>
    </>
  );
};
export default BookForm;
