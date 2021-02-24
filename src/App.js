import logo from './logo.svg';
import './App.css';
import { Route , BrowserRouter, Switch } from 'react-router-dom';
import { Page1, Page2, Home } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </BrowserRouter>
    </div>
  );
}

export default App;
