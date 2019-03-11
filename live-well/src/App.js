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

    // getProperty = async () => {
    //     try {
    //         const property = await fetch('http://localhost:9000/property');
    //         const propertyJson = await property.json()
    //         this.setState({
    //             address: propertyJson.response.address.street[0],
    //             city: propertyJson.response.address.city[0],
    //             state: propertyJson.response.address.state[0],
    //             zipcode: propertyJson.response.address.zipcode[0],
    //             estimate: propertyJson.response.zestimate.amount[0]._


    //         })
    //         return propertyJson

    //     } catch (err) {
    //         console.log(err, 'error in catch block')
    //         return err
    //     }

    // }

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
                estimate: propertyJson.response.results.result[0].zestimate[0].amount[0]._

            })
            return propertyJson

        } catch (err) {
            console.log(err, 'error in catch block')
            return err
        }

    }

   


    render() {
        return (
            <div className="app">
        <div className="propertyContainer">
          <h1>Property</h1>
          <Property
          searchProperty ={this.searchProperty}
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