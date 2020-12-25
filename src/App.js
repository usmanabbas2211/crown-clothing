import HomePage from './pages/homepage/home.component';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
