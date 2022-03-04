import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_AUTHORS, GET_BOOKS } from '../fetch/queries';
import { ADD_BOOKS } from '../fetch/mutations';

const AddBook = () => {
    const {
        loading: authorsLoading,
        error: authorsError,
        data: authorsDatas,
    } = useQuery(GET_AUTHORS);

    const [
        addBook,
        { loading: newBookLoading, error: newBookError, data: newBookDatas },
    ] = useMutation(ADD_BOOKS, {
        refetchQueries: [GET_BOOKS],
    });

    const [formDatas, setFormDatas] = useState({
        name: '',
        genre: '',
        authorId: '',
    });

    let optionsSelect;

    const handleChange = (e) => {
        setFormDatas({ ...formDatas, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({
            variables: {
                book: {
                    name: formDatas.name,
                    genre: formDatas.genre,
                    authorId: formDatas.authorId,
                },
            },
        });
    };

    if (authorsLoading) {
        optionsSelect = <option disabled>Loading authors...</option>;
    }

    if (authorsError) {
        optionsSelect = null;
    }

    if (authorsDatas) {
        optionsSelect = authorsDatas?.authors.map((author) => (
            <option key={author.id} value={author.id}>
                {author.name}
            </option>
        ));
    }

    if (newBookLoading) {
        return <h2 className="loading">New book Submitting...</h2>;
    }

    if (newBookError) {
        return (
            <h2 className="danger">
                New book Submission error! {newBookError.message}
            </h2>
        );
    }

    return (
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="name">Book name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formDatas.name}
                    onChange={handleChange}
                />
            </div>

            <div className="field">
                <label htmlFor="genre">Genre</label>
                <input
                    type="text"
                    name="genre"
                    id="genre"
                    value={formDatas.genre}
                    onChange={handleChange}
                />
            </div>

            <div className="field">
                <label htmlFor="author">Author</label>
                <select
                    name="authorId"
                    id="authorId"
                    value={formDatas.authorId}
                    onChange={handleChange}
                >
                    <option>Select author</option>
                    {optionsSelect}
                </select>
            </div>

            <div className="field">
                <button>+</button>
            </div>
        </form>
    );
};

export default AddBook;
