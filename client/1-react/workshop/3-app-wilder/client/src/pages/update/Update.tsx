import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import Loader from '../../atoms/loader/Loader';
import Form from '../../molecules/form/Form';
import { GET_WILDER_BY_ID } from '../../queries/queries';
import Layout from '../../templates/layout/Layout';
import { GetWilderType } from '../../types';

const Update = ({ ...props }) => {
    const { wilderId } = props.match.params;

    const { loading, data } = useQuery<GetWilderType>(GET_WILDER_BY_ID, {
        variables: { wilderId },
    });

    return (
        <Layout>
            <Link to="/" className="btn-link" style={{ margin: '1rem 0 ' }}>
                Back to home
            </Link>

            <h2>Update the user {data?.wilder?.name}</h2>

            {!loading ? (
                data?.wilder && <Form method="put" wilder={data?.wilder} />
            ) : (
                <Loader />
            )}
        </Layout>
    );
};

export default Update;
