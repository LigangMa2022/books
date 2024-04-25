
import "./../MainPage/MainPage.scss";
import { Link } from "react-router-dom";

function MainPage (props){

    const handleDelete = (id) => {
        props.setBookList(props.bookList.filter((book)=>(book.id !== id)));
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
                    props.bookList.map((book)=>{
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