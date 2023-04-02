import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navigationbar from './components/Navigationbar';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Gogen from './components/gogen/Gogen';

function App() {
  return (
    <div className="App">
        <Router>
            <Navigationbar />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/gogen' component={Gogen}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
