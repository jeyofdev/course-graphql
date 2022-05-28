import { useQuery } from '@apollo/client';
import { Link, Route, Switch } from 'react-router-dom';
import CreateWilderForm from '../../components/form/CreateWilderForm';
import Loader from '../../components/ui/Loader';
import { GET_WILDERS } from '../../queries/queries';
import { GetWilders } from '../../types/schemaTypes';
import Wilder from '../Wilder/Wilder';

import './App.css';
import * as styled from './App.styled';

const App = () => {
    const { loading, data } = useQuery<GetWilders>(GET_WILDERS);

    return (
        <div>
            <styled.Header>
                <styled.Container>
                    <h1>Wilders Book</h1>
                </styled.Container>
            </styled.Header>

            <Switch>
                <Route exact path="/">
                    <styled.Container>
                        <h2>Wilders</h2>
                        <Link to="/create-wilder">
                            Ajouter un nouveau wilder
                        </Link>
                        {loading ? (
                            <Loader />
                        ) : (
                            <section className="card-row">
                                {data?.wilders.map((wilder) => {
                                    return (
                                        <Wilder
                                            key={wilder.id}
                                            name={wilder.name}
                                            city={wilder.city}
                                            skills={wilder.skills}
                                        />
                                    );
                                })}
                            </section>
                        )}
                    </styled.Container>
                </Route>
                <Route path="/create-wilder">
                    <CreateWilderForm />
                </Route>
            </Switch>

            <footer>
                <styled.Container>
                    <p>&copy; 2020 Wild Code School</p>
                </styled.Container>
            </footer>
        </div>
    );
};

export default App;
