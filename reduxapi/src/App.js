import { Provider } from 'react-redux';
import './App.css';
import store from './ReduxApi/store'
import User from './ReduxApi/User';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FirstPage from './ReduxApi/FirstPage';


function App() {
  return (
    <Provider store={store}>
      <Router>
                <Switch>
                    <Route exact path="/" component={FirstPage} />
                    <Route exact path="/user" component={User} />
                </Switch>
            </Router>
    </Provider>
  );
}

export default App;
