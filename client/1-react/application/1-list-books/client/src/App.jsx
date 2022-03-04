import { useQuery } from '@apollo/client';
import { useState } from 'react';
import AddBook from './components/AddBook';
import BookDetails from './components/BookDetails';
import { GET_BOOKS } from './fetch/queries';

const App = () => {
    const { loading, error, data } = useQuery(GET_BOOKS);
    const [selected, setSelected] = useState(null);

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
                    <li key={book.id} onClick={(e) => setSelected(book.id)}>
                        {book.name}
                    </li>
                ))}
            </div>
        );
    }

    return (
        <div id="main" className="App">
            <h1>Book's List</h1>

            {displayBooks}

            <BookDetails bookId={selected} />

            <AddBook />
        </div>
    );
};

export default App;
