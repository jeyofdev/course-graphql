import { useQuery } from '@apollo/client';
import { GET_BOOKS } from './queries';

const App = () => {
    const { loading, error, data } = useQuery(GET_BOOKS, {
        pollInterval: 500, // permet d'exécuter la requète selon un intervale donné (ici 500 millisecondes)
    });

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
        </div>
    );
};

export default App;
