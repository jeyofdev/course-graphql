import { NetworkStatus, useQuery } from '@apollo/client';
import { GET_BOOKS } from './queries';

const App = () => {
    const { loading, error, data, refetch, networkStatus } = useQuery(
        GET_BOOKS,
        {
            notifyOnNetworkStatusChange: true,
        }
    );

    let displayBooks;

    if (networkStatus === NetworkStatus.refetch) {
        displayBooks = <p>Refetching...</p>;
    }

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

            <button onClick={() => refetch()}>Refetch!</button>
        </div>
    );
};

export default App;
