import { useQuery } from '@apollo/client';
import { GET_BOOK } from '../fetch/queries';

const BookDetails = ({ bookId }) => {
    const { loading, error, data } = useQuery(GET_BOOK, {
        variables: { id: bookId },
    });

    let displayBook;

    if (bookId && loading) {
        displayBook = <p>Loading...</p>;
    }

    if (bookId && error) {
        displayBook = <p>Error :(</p>;
    }

    if (bookId && data) {
        displayBook = (
            <div>
                <h2>{data.book.name}</h2>
                <p>{data.book.genre}</p>
                <p>{data.book.author.name}</p>
                <p>All books</p>
                <ul className="other-books">
                    {data.book.author.books.map((book) => (
                        <li key={book.id}>{book.name}</li>
                    ))}
                </ul>
            </div>
        );
    } else {
        displayBook = <p>No Book selected...</p>;
    }
    return <div id="book-details">{displayBook}</div>;
};

export default BookDetails;
