import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./BookDetail.css";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isBorrowed, setIsBorrowed] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [id]);

  const handleBorrow = () => {
    setIsBorrowed(true);
  };

  const handleReturn = () => {
    setIsBorrowed(false);
  };

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container book-detail-container">
      <div className="btn-notice read-options">
        <div className="row my-5">
          <div className="col-md-4">
            <div className="illustration">
              <div className="coverMagic cover-animation">
                <img
                  src={book.image}
                  alt={book.title}
                  className="img-fluid mb-4"
                  title={book.title}
                  draggable="false"
                />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <h1 className="book-title mb-4">{book.title}</h1>
            <h5 className="book-author mb-3">
              <strong>by</strong> {book.author}
            </h5>
            <p className="book-detail">
              <strong>Genre :</strong> {book.genre}
            </p>
            <p className="book-detail mt-2">
              <strong>Publication Date :</strong> {book.date}
            </p>
            <p className="book-description">{book.description}</p>

            {isBorrowed ? (
              <button
                className="btn btn-danger btn-lg mt-4"
                onClick={handleReturn}
              >
                Return Book
              </button>
            ) : (
              <button
                className="btn btn-primary btn-lg mt-4"
                onClick={handleBorrow}
              >
                Borrow Book
              </button>
            )}

            <Link to="/" className="btn btn-secondary btn-lg mt-3 d-block">
              Back to Library
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
