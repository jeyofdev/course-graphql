import Layout from '../../templates/layout/Layout';
import * as styled from './Home.styled';
import Loader from '../../atoms/loader/Loader';
import Wilder from '../../molecules/wilder/Wilder';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET_WILDERS } from '../../queries/queries';
import { useQuery } from '@apollo/client';
import { GetWildersType, WilderType } from '../../types';

const Home = () => {
    const { loading, data } = useQuery<GetWildersType>(GET_WILDERS);

    return (
        <Layout>
            <styled.Header>
                <h2>The users List</h2>
            </styled.Header>

            <styled.Section>
                {!loading ? (
                    data?.wilders ? (
                        data?.wilders.map((wilder: WilderType) => (
                            <Wilder
                                key={wilder._id}
                                _id={wilder._id}
                                name={wilder.name}
                                city={wilder?.city}
                                content={wilder.content}
                                skills={wilder.skills}
                            />
                        ))
                    ) : (
                        <styled.NoWilders>
                            Aucun wilder pour le moment
                        </styled.NoWilders>
                    )
                ) : (
                    <Loader />
                )}
            </styled.Section>

            <Link
                to="/wilders/create"
                className="btn-link"
                style={{ marginTop: '2rem' }}
            >
                Add an wilder
            </Link>

            <ToastContainer position="bottom-right" />
        </Layout>
    );
};

export default Home;
