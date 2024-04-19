import "./../DetailPage/DetailPage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import books from "./../../data/books.json";

function DetailPage (){
    const [selectedBook, setSelectedBook] = useState({});
    const [bookList, setBookList] = useState(books)
    const params = useParams();
    useEffect(()=>{
        if (params.bookID){
            setSelectedBook(bookList.find((book)=>(book.id === params.bookID)));
        };
    },[params]);

    return (
        <section>
            <h1>Book Detail Page</h1>
            <h2>{selectedBook.name}</h2>
            <p>{selectedBook.category}</p>
            <p>${selectedBook.price}</p>
            <p>{selectedBook.description}</p>
        </section>
    )
}
export default DetailPage;