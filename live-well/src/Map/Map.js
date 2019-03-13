import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '40%',
  height: '90%'
};


export class HouseMap extends Component {

  // state= {
  //   lat : 30.274545,
  //   lng : -97.740751,
  //   isSearched : false
  // }

  // const searchHelper = () => {
  //   return (this.state.isSearched) ? this.setState({ this.props.lat, this.props.lng}) : null 
  // }
  
render() {
    const {lat, lng} = this.props
    return (
      <div className='Main'>
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
         lat: this.state.lat,
         lng: this.state.lng 
        }}>
      <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: this.state.lat, lng: this.state.lng}} />
      </Map>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyAOteyk-bijctvUZ1a9jynSWfUoaYzSo-I'
})(HouseMap);
          
  
     


          








