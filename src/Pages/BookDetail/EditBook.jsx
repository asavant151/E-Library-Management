import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BookForm from '../BookForm/BookForm';

const EditBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error('Error fetching book:', error);
      });
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }
  return (
    <div>
       <BookForm book={book} />
    </div>
  );
};

export default EditBook;
