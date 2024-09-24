import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookListing from "./Pages/BookListing/BookListing";
import EditBook from "./Pages/BookDetail/EditBook";
import BookForm from "./Pages/BookForm/BookForm";
import Layout from "./Components/Layout/Layout";
import BookDetail from "./Pages/BookDetail/BookDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<BookListing />} />
            <Route path="/books/new" element={<BookForm />} />
            <Route path="/books/edit/:id" element={<EditBook />} />
            <Route path="/books/:id" element={<BookDetail />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
