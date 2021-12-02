import logo from './logo.svg';
import Routing from './Components/Route';
import {BrowserRouter} from 'react-router-dom';
import './style.css';
function App () {
  return <BrowserRouter><Routing /></BrowserRouter>;
}

export default App;
