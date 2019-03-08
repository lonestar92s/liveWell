import React, { Component } from 'react';
import Property from './Property/Property'
import './App.css';

class App extends Component {

  state = {
    property: []
  }

 getProperty = async () => {

    try {
      const property = await fetch('http//localhost:9000/property');
      const propertyJson = await property.json();
      this.setState({property: propertyJson});
      return propertyJson
    } catch (err) {
      console.log(err, 'error in catch block')
      return err
  }

}

componentDidMount(){
    this.getProperty().then((data) => console.log(data,'New properties'));
  } 


  render() {
    return (
      <div className="app">
        <div className="propertyContainer">
          <h1>Property</h1>
          <Property property={this.state.property} />
        </div>
      </div>
    );
  }
}
          

export default App;
