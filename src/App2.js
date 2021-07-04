import './App2.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer';
import { Route , BrowserRouter, Switch } from 'react-router-dom';

// import Pages
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contacts from './components/pages/Contacts';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/app2" component={Home} />
        <Route path="/app2/news" component={News} />
        <Route path="/app2/contacts" component={Contacts} />
        <Route path="/app2/details" component={Details} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
