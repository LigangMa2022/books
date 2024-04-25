import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import DetailPage from './pages/DetailPage/DetailPage';
import AddBook from './components/AddBook/AddBook';
import { useState } from "react";
import books from "./../src/data/books.json";

function App() {
  const [bookList, setBookList] = useState(books);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage bookList={bookList} setBookList={setBookList} />} />
          <Route path="/books/:bookID" element={<DetailPage bookList={bookList} setBookList={setBookList} />} />
          <Route path="/add-book" Component={AddBook} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
