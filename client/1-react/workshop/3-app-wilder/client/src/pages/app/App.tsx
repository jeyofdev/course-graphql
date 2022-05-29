import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Create from '../create/Create';
import Details from '../details/Details';
import Home from '../home/Home';
import Update from '../update/Update';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/wilders/create/" component={Create} />
                    <Route
                        exact
                        path="/users/update/:wilderId"
                        component={Update}
                    />
                    <Route
                        exact
                        path="/users/details/:wilderId"
                        component={Details}
                    />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
