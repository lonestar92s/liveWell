import React, { Component } from 'react';
import Property from './Property/Property'
import LandingPage from './LandingPage/LandingPage'
import HouseMap from './Map/Map'
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom'

class App extends Component {
    state = {
        address: '',
        city: '',
        state: '',
        zipcode: '',
        estimate: '',
        squareFeet: '',
        bedrooms: '',
        bathrooms: '',
        latitude: '',
        longitude: ''
        

    }

//images
    getImage = async () => {
        try {
            const property = await fetch('http://localhost:9000/property/pic');
            const propertyJson = await property.json()
            this.setState({
                imageUrl: propertyJson.response.images.image[0].url[0],

            })
            return propertyJson

        } catch (err) {
            console.log(err, 'error in catch block')
            return err
        }
    }

    //search any address
    searchProperty = async (address, citystatezip) => {
        try {
            const property = await fetch('http://localhost:9000/property/search', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    address,
                    citystatezip

                })
            });
            const propertyJson = await property.json()
            this.setState({
                address: propertyJson.response.results.result[0].address[0].street[0],
                city: propertyJson.response.results.result[0].address[0].city[0],
                state: propertyJson.response.results.result[0].address[0].state[0],
                zipcode: propertyJson.response.results.result[0].address[0].zipcode[0],
                estimate: propertyJson.response.results.result[0].zestimate[0].amount[0]._,
                squareFeet: propertyJson.response.results.result[0].finishedSqFt[0],
                bedrooms: propertyJson.response.results.result[0].bedrooms[0],
                bathrooms: propertyJson.response.results.result[0].bathrooms[0],
                valueChange: propertyJson.response.results.result[0].zestimate[0].valueChange[0]._,
                lat: propertyJson.response.results.result[0].address[0].latitude[0],
                long: propertyJson.response.results.result[0].address[0].longitude[0]

            })
            return propertyJson

        } catch (err) {
            console.log(err, 'error in catch block')
            return err
        }

    }




    render() {
        const renderProperty = () => {
            return (
                <Property
          searchProperty ={this.searchProperty}
          address={this.state.address} 
          city={this.state.city} 
          state={this.state.state} 
          zipcode={this.state.zipcode}
          estimate={this.state.estimate}
          squareFeet={this.state.squareFeet}
          bedrooms={this.state.bedrooms}
          bathrooms={this.state.bathrooms}
          valueChange={this.state.valueChange} />
            )
        }
          const renderMap = () => {
            return (
                <HouseMap
          lat={this.state.lat}
          long={this.state.long} />
            )
        }

        return (
  <Router>        
    <div className="app">
          <nav className="Navbar">
        <ul>
        <li className="Name"><NavLink to='/'>liveWell</NavLink></li>
        </ul>
        <ul className ="Navlinks">
        <li className="nav-item"><NavLink to='/search'>Find Property</NavLink></li>{' '}
        <li className="nav-item"><NavLink to='/map'>Map</NavLink></li>{' '}
        </ul>
        </nav>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path='/search' render={renderProperty} />
                <Route path='/map' component={renderMap} />
            </Switch>
      </div>
    </Router>
        );
    }
}


         


export default App;
        
            
          
        
