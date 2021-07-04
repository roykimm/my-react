import logo from './logo.svg';
import './App.css';
import { Route , BrowserRouter, Switch } from 'react-router-dom';
import { Page1, Page2, Home , FileTest, TodoPage, DjangoTodo, Chat, Note} from './pages';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/filetest" component={FileTest} />
        <Route path="/todopage" component={TodoPage} />
        <Route path="/djangotodo" component={DjangoTodo} />
        <Route path="/chat" component={Chat} />
        <Route path="/note" component={Note} />
      </BrowserRouter>
    </div>
  );
}

export default App;
