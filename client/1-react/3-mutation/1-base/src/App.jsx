import { useQuery } from '@apollo/client';
import AddBook from './components/AddBook';
import { GET_BOOKS } from './fetch/queries';

const App = () => {
    const { loading, error, data } = useQuery(GET_BOOKS);
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
                    <li key={book.id}>{book.name}</li>
                ))}
            </div>
        );
    }

    return (
        <div id="main" className="App">
            <h1>Book's List</h1>

            {displayBooks}

            <AddBook />
        </div>
    );
};

export default App;
