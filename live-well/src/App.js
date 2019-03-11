import React, { Component } from 'react';
import Property from './Property/Property'
import './App.css';

class App extends Component {
    state = {
        address: '',
        city: '',
        state: '',
        zipcode: '',
        estimate: '',
        imageUrl: ''

    }

    getProperty = async () => {
        try {
            const property = await fetch('http://localhost:9000/property');
            const propertyJson = await property.json()
            this.setState({
                address: propertyJson.response.address.street[0],
                city: propertyJson.response.address.city[0],
                state: propertyJson.response.address.state[0],
                zipcode: propertyJson.response.address.zipcode[0],
                estimate: propertyJson.response.zestimate.amount[0]._


            })
            return propertyJson

        } catch (err) {
            console.log(err, 'error in catch block')
            return err
        }

    }

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
      //search 
        searchProperty = async () => {
        try {
            const property = await fetch('http://localhost:9000/property/search');
            const propertyJson = await property.json()
            this.setState({
                searchAddress: propertyJson.response.results.result[0].address[0].street[0],
                
            })
            return propertyJson

        } catch (err) {
            console.log(err, 'error in catch block')
            return err
        }

    }

    componentDidMount() {
        this.getProperty().then((data) => console.log(data, 'New properties'));
        this.getImage().then((data) => console.log(data, 'Images'));
        this.searchProperty().then((data) => console.log(data, 'search results'));
    }


    render() {
        return (
            <div className="app">
        <div className="propertyContainer">
          <h1>Property</h1>
          <Property 
          address={this.state.address} 
          city={this.state.city} 
          state={this.state.state} 
          zipcode={this.state.zipcode}
          estimate={this.state.estimate}
          image={this.state.imageUrl} />
        </div>
      </div>
        );
    }
}



export default App;