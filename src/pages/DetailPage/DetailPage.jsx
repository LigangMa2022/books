import "./../DetailPage/DetailPage.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DetailPage (props){
    console.log("props:",props);
    const [selectedBook, setSelectedBook] = useState({});
    const params = useParams();

    const updateBook = (updatedBook) => {
        props.setBookList(props.bookList.map((book) => (book.id === params.bookID ? updatedBook : book)));
    };

    useEffect(()=>{
        if (params.bookID){
            const foundBook = props.bookList.find((book)=>(book.id === params.bookID));
            setSelectedBook(foundBook);
            if (foundBook){
                const form = document.getElementById("books__ToEdit");
                form.elements['bookName'].value = foundBook.name;
                form.elements['bookCategory'].value = foundBook.category;
                form.elements['bookPrice'].value = foundBook.price;
                form.elements['bookDescription'].value = foundBook.description;
            }
        };
    },[params,props.bookList]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const updatedBookInfo = {
            name:event.target.bookName.value,
            category:event.target.bookCategory.value,
            price:event.target.bookPrice.value,
            description:event.target.bookDescription.value
        };
        updateBook(updatedBookInfo);
    }

    return (
        <section>
            <h1>Book Detail Page</h1>
            <form onSubmit={handleFormSubmit}
                className="books__edit"
                id="books__ToEdit"
                name="books__ToEdit" >
                    <div>
                        <label htmlFor="bookName">Book Name: </label>
                        <input type="text" name="bookName" className="books__edit--input" />
                    </div>

                    <div>
                        <label htmlFor="bookName">Book Category: </label>
                        <input type="text" name="bookCategory" className="books__edit--input" />
                    </div>

                    <div>
                        <label htmlFor="bookPrice">Book Price: </label>
                        <input type="text" name="bookPrice" className="books__edit--input" />
                    </div>

                    <div>
                        <label htmlFor="bookDescription">Book Description: </label>
                        <textarea name="bookDescription" className="books__edit--input" />
                    </div>
                    <button className="books__edit--button" type="submit">Save</button>
            </form>
        </section>
    )
}
export default DetailPage;