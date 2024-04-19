import { useState } from "react";
import books from "./../../data/books.json";
import "./../MainPage/MainPage.scss";
import { Link } from "react-router-dom";
function MainPage (){

    const [bookList, setBookList] = useState(books)

    const handleDelete = (id)=>{
        setBookList(bookList.filter((book)=>(book.id !== id)));
    };

    return (
        <div>
            <h1>Book Store</h1>
            <ul className="books">
                {
                    bookList.map((book)=>{
                        return (
                            <li className="books__li" key={book.id}>
                                <Link to={`/books/${book.id}`} className="books__link">
                                    <h2>{book.name}</h2>
                                    <p>{book.category}</p>
                                    <p>${book.price}</p>
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