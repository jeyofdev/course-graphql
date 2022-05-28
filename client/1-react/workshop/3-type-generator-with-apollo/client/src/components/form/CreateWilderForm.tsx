import { ToastContainer, toast, ToastContent } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as styled from './CreateWilderForm.styled';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { CreateWilder, CreateWilderVariables } from '../../types/schemaTypes';
import { CREATE_WILDER } from '../../queries/mutations';

const CreateWilderForm = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('Bordeaux');

    const notifyWilderHasBeenCreated = () =>
        toast.success('Wilder has been created');
    const notifyError = (error: ToastContent) => toast.error(error);

    const [createWilder] = useMutation<CreateWilder, CreateWilderVariables>(
        CREATE_WILDER,
        {
            onCompleted: notifyWilderHasBeenCreated,
            onError: (error) => {
                notifyError(error.message);
            },
            refetchQueries: ['GetWilders'],
        }
    );

    return (
        <styled.Container>
            <>
                <Link to="/">Afficher la liste des wilders</Link>
                <h2>Ajouter un nouveau wilder</h2>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        createWilder({ variables: { city, name } });
                    }}
                >
                    <label>
                        Name:{' '}
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(event) => {
                                setName(event.currentTarget.value);
                            }}
                        />
                    </label>
                    <br />
                    <label>
                        City :{' '}
                        <input
                            type="text"
                            name="city"
                            value={city}
                            onChange={(event) => {
                                setCity(event.currentTarget.value);
                            }}
                        />
                    </label>
                    <br />
                    <input type="submit" />
                </form>
                <ToastContainer position="bottom-right" />
            </>
        </styled.Container>
    );
};

export default CreateWilderForm;
