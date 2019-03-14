import React, { Component } from 'react';
import LandingPage from './LandingPage/LandingPage'
import MainContainer from './MainContainer.js'
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom'

class App extends Component {




    render() {
        

        return (
  <Router>        
    <div className="app">
          <nav className="Navbar">
        <ul>
        <li className="Name"><NavLink to='/'>liveWell</NavLink></li>
        </ul>
        <ul className ="Navlinks">
        <li className="nav-item"><NavLink to='/search'>Find Property</NavLink></li>{' '}
        </ul>
        </nav>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path='/search'  component={MainContainer} />
            </Switch>
      </div>
    </Router>
        );
    }
}


         


export default App;
        


            
          
        
