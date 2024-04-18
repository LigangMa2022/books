import books from "./../../data/books.json";
import "./../MainPage/MainPage.scss";
function MainPage (){
    return (
        <div>
            <h1>Book Store</h1>
            <ul className="books">
                {
                    books.map((book)=>{
                        return (
                            <li className="books__li" key={book.id}>
                                <h3>{book.name}</h3>
                                <p>{book.category}</p>
                                <p>${book.price}</p>
                                <button className="books__btn--del">Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default MainPage;