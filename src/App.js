import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import DetailPage from './pages/DetailPage/DetailPage';
import AddBook from './components/AddBook/AddBook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/books/:bookID" element={<DetailPage />} />
          <Route path="/add-book" Component={AddBook} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
