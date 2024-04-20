import { createSlice } from "@reduxjs/toolkit";
import deepcopy from "deepcopy";
import { books } from "../../data";

export const useBookStore = createSlice({
  name: "books",

  initialState: {
    list: books,
    detailBook: {},
  },
  reducers: {
    addBook: (state, { payload }) => {
      const _list = deepcopy(state.list);
      _list.push(payload);
      state.list = _list;
    },
    deleteBook: (state, { payload }) => {
      console.log("deletebook");
      const _list = deepcopy(state.list);
      state.list = _list.filter((item) => item._id != payload._id);
    },
    updateBook: (state, { payload }) => {
      const _list = deepcopy(state.list);
      const book = _list.find((item) => item._id === payload._id);
      Object.assign(book, payload);
      state.list = _list;
    },
    setDetailBook: (state, { payload }) => {
      state.detailBook = payload;
    },
  },
});

export const { addBook, deleteBook, updateBook, setDetailBook } =
  useBookStore.actions;

export default useBookStore.reducer;
