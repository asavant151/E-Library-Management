import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./BookListing.css";

const BookListing = () => {
  const [books, setBooks] = useState([]);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search");

  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  // Filter books based on search query
  const filteredBooks = useMemo(() => {
    if (!searchQuery) return books;

    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, books]);

  return (
    <div className="container my-5">
      <h2 className="text-center">Welcome to the E-Library</h2>
      <p className="text-center mb-5">
        Browse and borrow books easily from our collection.
      </p>

      {/* Trending Books Section */}
      <div className="book-section mb-4">
        <h3>Available Books</h3>
        <div className="row align-items-center mt-4">
          {filteredBooks?.map((book) => (
            <div className="col-md-4 col-sm-6 col-12 mt-4" key={book.id}>
              <div className="book-card">
                <img
                  src={book.image}
                  alt={book.title}
                  className="img-fluid"
                  title={book.title}
                  draggable="false"
                />
                <h5 className="mt-3">{book.title}</h5>
                <p className="mt-3">by {book.author}</p>
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <Link
                    to={`/books/edit/${book.id}`}
                    className="btn btn-primary btn-sm me-3"
                  >
                    Edit Books
                  </Link>
                  <Link
                    to={`/books/${book.id}`}
                    className="btn btn-warning btn-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookListing;
