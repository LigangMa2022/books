import "./AddBookPage.scss";

function AddBookPage (props){

    const handleAddSubmit = (event)=>{
        event.preventDefault();
        const newBook = {
            name: event.target.bookName.value,
            price: event.target.bookPrice.value,
            category: event.target.bookCategory.value,
            description: event.target.bookDescription.value
        };
        let updatedBookList = [...props.bookList, newBook];
        props.setBookList(updatedBookList);
        console.log("bookList",updatedBookList);
    }
    return (
        <section className="addbook">
            <h1>Add a book</h1>
            <form className="addbook__form"
             name="form"
             onSubmit={handleAddSubmit} >
                <p className="addbook__label">Book Name:</p>
                <input type="text" name="bookName" className="addbook__input" placeholder="Book Name" />
                <p className="addbook__label">Book Price:</p>
                <input type="text" name="bookPrice" className="addbook__input" placeholder="Book Price" />
                <p className="addbook__label">Book Category:</p>
                <input type="text" name="bookCategory" className="addbook__input" placeholder="Book Category" />
                <p className="addbook__label">Book Description:</p>
                <input type="text" name="bookDescription" className="addbook__input" placeholder="Book Description" />
                <button className="addbook__button--submit" type="submit">+ Add Book</button>
             </form>
        </section>
    )
}
export default AddBookPage;