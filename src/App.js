import './App.css';
import Homepage from './components/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Router} from '@reach/router';
import ListAll from './components/ListAll';
import Details from './views/Details';
import EditInfo from './views/EditInfo';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/equipment/:id/edit">
          <EditInfo />
        </Route>
        <Route exact path="/equipment/:id">
          <Details />
        </Route>
        <Route exact path="/">
          <Homepage />
          <ListAll />
        </Route>
      </Switch>
    </BrowserRouter>

    </div>
  );
}

export default App;
