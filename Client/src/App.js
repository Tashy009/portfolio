import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar'
import Home from './components/pages/Home'

function App() {
  console.warn = () => ({});
  console.error = () => ({});
  console.log = () => ({});  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
