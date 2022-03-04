import { useMutation } from '@apollo/client';
import { ADD_BOOKS } from '../fetch/mutations';

const AddBook = () => {
    const [addBook, { loading, error, data }] = useMutation(ADD_BOOKS);

    const handleSubmit = (e) => {
        addBook({
            variables: {
                book: {
                    name: 'Lord of the ring',
                    genre: 'Fantast',
                    authorId: '1',
                },
            },
        });
    };

    if (loading) {
        return <h2 className="loading">New book Submitting...</h2>;
    }

    if (error) {
        return (
            <h2 className="danger">
                New book Submission error! {error.message}
            </h2>
        );
    }

    return <button onClick={handleSubmit}>Add new book</button>;
};

export default AddBook;
