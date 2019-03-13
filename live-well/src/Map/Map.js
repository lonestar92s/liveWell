import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '40%',
  height: '90%'
};


export class HouseMap extends Component {
  
render() {
    
  
     
    return (
      <div className='Main'>
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 30.2682,
         lng: -97.74295 
        }}
      >
      </Map>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAOteyk-bijctvUZ1a9jynSWfUoaYzSo-I'
})(HouseMap);
          


          








