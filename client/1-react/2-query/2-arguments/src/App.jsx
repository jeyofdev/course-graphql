import { useState } from 'react';
import { useQuery } from '@apollo/client';
import Book from './components/Book';
import { GET_BOOKS } from './queries';

const App = () => {
    const { loading, error, data } = useQuery(GET_BOOKS);
    const [bookId, setBookId] = useState('1');
    let displayBooks;

    if (loading) {
        displayBooks = <p>Loading...</p>;
    }

    if (error) {
        displayBooks = <p>Error 😔</p>;
    }

    if (data) {
        displayBooks = (
            <div id="book-list">
                {data?.books.map((book) => (
                    <button key={book.id} onClick={() => setBookId(book.id)}>
                        {book.name}
                    </button>
                ))}
            </div>
        );
    }

    return (
        <div id="main" className="App">
            <h1>Book's List</h1>

            {displayBooks}

            <Book bookId={bookId} />
        </div>
    );
};

export default App;
