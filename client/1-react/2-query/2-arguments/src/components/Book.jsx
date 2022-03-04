import { useQuery } from '@apollo/client';
import { GET_BOOK_BY_ID } from '../queries';

const Book = ({ bookId }) => {
    const { loading, error, data } = useQuery(GET_BOOK_BY_ID, {
        variables: { id: bookId },
    });

    let displayBook;

    if (loading) {
        displayBook = <p>Loading...</p>;
    }

    if (error) {
        displayBook = <p>Error 😔</p>;
    }

    return (
        <div id="book-list">
            <h3>{data?.book?.name}</h3>
        </div>
    );
};

export default Book;
