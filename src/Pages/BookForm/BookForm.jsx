import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Form validation schema
const BookSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  genre: Yup.string().required('Genre is required'),
  date: Yup.date().required('Publication date is required'),
  image: Yup.mixed().required('Book image is required'),
});

const BookForm = ({ book }) => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(book ? book.image : '');

  const initialValues = book || { title: '', author: '', genre: '', date: '', image: '' };

  const handleSubmit = (values, { setSubmitting }) => {
    const url = book ? `http://localhost:5000/books/${book.id}` : `http://localhost:5000/books`;
    const method = book ? 'put' : 'post';

    axios[method](url, { ...values, image: imagePreview })
      .then((response) => {
        setSubmitting(false);
        alert('Book saved successfully!');
        navigate('/books');
      })
      .catch((error) => {
        console.error('Error saving book:', error);
        setSubmitting(false);
      });
  };

  // Handle Image Preview for the File Input
  const handleImageChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFieldValue('image', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <h2>{book ? 'Edit Book' : 'Add New Book'}</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={BookSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting, setFieldValue }) => (
          <Form>
            <div className="form-group mb-3">
              <label htmlFor="title">Title</label>
              <Field name="title" className="form-control" />
              {errors.title && touched.title ? <div className="text-danger">{errors.title}</div> : null}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="author">Author</label>
              <Field name="author" className="form-control" />
              {errors.author && touched.author ? <div className="text-danger">{errors.author}</div> : null}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="genre">Genre</label>
              <Field name="genre" className="form-control" />
              {errors.genre && touched.genre ? <div className="text-danger">{errors.genre}</div> : null}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="date">Publication Date</label>
              <Field name="date" type="date" className="form-control" />
              {errors.date && touched.date ? <div className="text-danger">{errors.date}</div> : null}
            </div>

            {/* Image Upload Field */}
            <div className="form-group mb-3">
              <label htmlFor="image">Book Image</label>
              <input
                id="image"
                name="image"
                type="file"
                className="form-control"
                onChange={(e) => handleImageChange(e, setFieldValue)}
              />
              {errors.image && touched.image ? <div className="text-danger">{errors.image}</div> : null}
            </div>

            {/* Image Preview */}
            {imagePreview && (
              <div className="mb-3">
                <img src={imagePreview} alt="Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />
              </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {book ? 'Update Book' : 'Add Book'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;
