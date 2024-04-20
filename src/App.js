import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BooksInfo from "./component/BooksInfo";
import BookDetail from "./component/BookDetail";
import BookForm from "./component/BookForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BooksInfo />} exact />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/bookForm" element={<BookForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
