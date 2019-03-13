import React, { Component } from 'react'
import Property from './Property/Property'
import HouseMap from './Map/Map'
import './App.css'


export default class MainContainer extends Component {
state = {
        address: '',
        city: '',
        state: '',
        zipcode: '',
        estimate: '',
        squareFeet: '',
        bedrooms: '',
        bathrooms: '',
        lat: 30.274545,
        lng: -97.740751
        

    }

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
                lng: propertyJson.response.results.result[0].address[0].longitude[0]

            })
            return propertyJson

        } catch (err) {
            console.log(err, 'error in catch block')
            return err
        }

    }
	render(){
		return(
			<div className='Main'>
			<div className='MapContainer'>
			      <HouseMap
          lat={this.state.lat}
          lng={this.state.lng} />
			</div>
			<div className='SearchContainer'>
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
			</div>
			</div>


			)
	}
}