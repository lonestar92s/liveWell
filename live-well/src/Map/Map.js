import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


export default class HouseMap extends Component {
  
  render() {
  	return(
  	
  		<div className='Main'>
  		<h1>{this.props.long}||{this.props.lat}</h1>
  		</div>
  	
  		)
    
	}
}






