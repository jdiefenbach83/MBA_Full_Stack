import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Products from './components/Products';
import SigIn from './components/SigIn';
import SignUp from './components/SignUp';

function Routes({ list, include }) {
  function handleInclude(newUser) {
    include(newUser);
  }

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products">
          <Products list={list} />
        </Route>
        <Route path="/sigin" component={SigIn} />
        <Route path="/signup">
          <SignUp list={list} include={handleInclude} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
