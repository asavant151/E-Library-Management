# E-Library Management Application

## Overview

The E-Library Management Application is a web-based platform that allows users to browse, borrow, and manage a collection of books. Built with React, this application offers a user-friendly interface for viewing and editing book details while providing search functionality for easier navigation.

## Features

- **Book Listings:** Users can view a comprehensive list of available books, including trending and classic titles.
- **Search Functionality:** Users can search for books by title or author.
- **Book Details:** Users can view detailed information about each book.
- **Edit Books:** Admins can edit book details directly from the listing page.
- **Responsive Design:** The application is mobile-friendly, ensuring a smooth experience across devices.

## Technology Stack

- **Frontend:**
  - React (v18)
  - Axios for HTTP requests
  - React Router for routing
  - Bootstrap for styling
- **Backend:**

  - JSON Server (for RESTful API) running on `http://localhost:5000`

## Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Axios](https://axios-http.com/) - A promise-based HTTP client for the browser and Node.js.
- [React Router](https://reactrouter.com/) - A collection of navigational components that compose declaratively with your application.
- [Bootstrap](https://getbootstrap.com/) - The most popular HTML, CSS, and JS library in the world for responsive design.
- [JSON Server](https://github.com/typicode/json-server) - A simple way to create a REST API using a JSON file.

## Installation

To get started with the E-Library Management Application, follow these steps:

-1. **Clone the repository:**

```bash
git clone https://github.com/asavant151/E-Library-Management
cd e-library-management
```

- 2. **Install dependencies:**

  ```bash
  npm install
  ```

- 3. **Run JSON Server (Simulated API):**

  ```bash
  npx json-server --watch db.json --port 5000
  ```

- **4. Start the React application** :

  ```bash
  npm run dev
  ```
