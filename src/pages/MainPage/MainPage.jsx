import { useState } from "react";
import books from "./../../data/books.json";
import "./../MainPage/MainPage.scss";
import { Link } from "react-router-dom";
function MainPage (){

    const [bookList, setBookList] = useState(books)

    const handleDelete = (id) => {
        setBookList(bookList.filter((book)=>(book.id !== id)));
    };

    return (
        <div>
            <div className="books__header">
                <h1>Book Store</h1>
                <Link to="/add-book" >
                    <button className="books__btn--header"> + Add </button>
                </Link>
            </div>

            <ul className="books">
                {
                    bookList.map((book)=>{
                        return (
                            <li className="books__li" key={book.id}>
                                <Link to={`/books/${book.id}`} className="books__link">
                                    <h2>Name: {book.name}</h2>
                                    <p>Category: {book.category}</p>
                                    <p>Price: ${book.price}</p>
                                </Link>
                                <button onClick={() => handleDelete(book.id)} className="books__btn--del">Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default MainPage;