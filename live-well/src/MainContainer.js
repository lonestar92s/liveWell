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
        lat: 41.881832,
        lng: -87.623177,
        valueChange:'',
        walkscore: '',
        bikescore: ''
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
            console.log(propertyJson)
            this.setState({
                address: propertyJson.results.response.results.result[0].address[0].street[0],
                city: propertyJson.results.response.results.result[0].address[0].city[0],
                state: propertyJson.results.response.results.result[0].address[0].state[0],
                zipcode: propertyJson.results.response.results.result[0].address[0].zipcode[0],
                estimate: propertyJson.results.response.results.result[0].zestimate[0].amount[0]._,
                squareFeet: propertyJson.results.response.results.result[0].finishedSqFt[0],
                bedrooms: propertyJson.results.response.results.result[0].bedrooms[0],
                bathrooms: propertyJson.results.response.results.result[0].bathrooms[0],
                valueChange: propertyJson.results.response.results.result[0].zestimate[0].valueChange[0]._,
                lat: propertyJson.results.response.results.result[0].address[0].latitude[0],
                lng: propertyJson.results.response.results.result[0].address[0].longitude[0],
                walkscore: propertyJson.walksults.walkscore,
                walkscoreDescription: propertyJson.walksults.description,
                walkscoreLogo: propertyJson.walksults.logo_url,
                bikescore: propertyJson.walksults.bike.score,
                bikescoreDescription: propertyJson.walksults.bike.description

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
          valueChange={this.state.valueChange}
          walkscore={this.state.walkscore}
          walkscoreDescription={this.state.walkscoreDescription}
          bikescore={this.state.bikescore}
          bikescoreDescription={this.state.bikescoreDescription}
          walkscoreLogo={this.state.walkscoreLogo} />
			 </div>
		</div>


		  )
	}
}

              


