import HomePage from './pages/homepage/home.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shoppage/shop.component'
import Header from './components/header/header.component'
import './App.css'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
