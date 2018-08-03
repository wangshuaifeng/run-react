import * as React  from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Buy from './buy';
import Home from './home';
import './App.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


class App extends React.Component<{}, {}> {
  

  public render() {
    return (
      <Router>
          <div className="app">
          <AppBar position="static">
            <Toolbar>
                Photos
            </Toolbar>
          </AppBar>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/buy">buy</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/buy" component={Buy} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const NoMatch = () => (
  <div>
    <h3>
      404
    </h3>
  </div>
);

export default App;
