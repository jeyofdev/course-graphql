import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../atoms/loader/Loader';
import Wilder from '../../molecules/wilder/Wilder';
import { GET_WILDER_BY_ID } from '../../queries/queries';
import Layout from '../../templates/layout/Layout';
import { GetWilderType } from '../../types';
import * as styled from './Details.styled';

const Details = ({ ...props }) => {
    const { wilderId } = props.match.params;

    const { loading, data } = useQuery<GetWilderType>(GET_WILDER_BY_ID, {
        variables: { wilderId },
    });

    return (
        <Layout>
            <Link to="/" className="btn-link" style={{ margin: '1rem 0 ' }}>
                Back to home
            </Link>

            <styled.Section>
                {!loading ? (
                    data?.wilder && (
                        <Wilder
                            _id={data?.wilder?._id}
                            name={data?.wilder?.name}
                            city={data?.wilder?.name}
                            content={data?.wilder?.content}
                            skills={data?.wilder?.skills}
                        />
                    )
                ) : (
                    <Loader />
                )}
            </styled.Section>
        </Layout>
    );
};

export default Details;
