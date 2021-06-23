import { useState } from 'react';
import appStyles from './app.module.css';
import AppHeader from '../header/header';
import { Router, Route, useHistory, Switch } from 'react-router-dom';

function App() {

  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const history = useHistory();

  const handleMenuClick = () => {
    setIsNavbarActive(prevState => !prevState);
  }

  return (
    <Router history={history} basename='/'>
      <AppHeader handleMenuClick={handleMenuClick} isNavbarActive={isNavbarActive} />
      <Switch>
        <Route exact path='/news'></Route>
        <Route exact path='/blogs'></Route>
        <Route exact path='/channels'></Route>
      </Switch>
    </Router>
  );
}

export default App;
