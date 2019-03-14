import React, { Component } from 'react'
import '../App.css'





export default class Property extends Component {
    state = {
        address: '',
        citystatezip: '',
       
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let address = this.state.address
        let citystatezip = this.state.citystatezip
        this.props.searchProperty(address, citystatezip)
        this.setState({
        address: '',
        citystatezip: ''
     })
    }
        



    handleChange = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    }


    render() {
        return (

        <div>
        <form id='form-input' className="ui focus input" onSubmit={(event)=>this.handleSubmit(event)} >
        <input type='text' autoComplete="off" name="address" placeholder="Address" value={this.state.address} onChange={this.handleChange} required="required"  />
        <input type='text' autoComplete="off" name="citystatezip" placeholder="City, State, Zipcode" value={this.state.citystatezip} onChange={this.handleChange} required="required" />
        <input type='submit' value="Search" />
        </form>
      <div className="table">   
    <table class="ui celled table">
  <thead>
    <tr><th>Address</th>
    <th>{this.props.address} {this.props.city} {this.props.state} {this.props.zipcode}</th>
  </tr></thead>
  <thead>
    <tr><th>Estimated Property Value</th>
    <th>${Number(this.props.estimate).toLocaleString()}</th>
  </tr></thead>
  <tbody>
    <tr>
      <td data-label="Name">Bedrooms</td>
      <td data-label="Bedrooms">{this.props.bedrooms}</td>
    </tr>
    <tr>
      <td data-label="Name">Bathrooms</td>
      <td data-label="Bathrooms">{this.props.bathrooms}</td>
    </tr>
    <tr>
      <td data-label="Name">Square Footage</td>
      <td data-label="Square Footage">{Number(this.props.squareFeet).toLocaleString()}</td>
    </tr>
    <tr>
      <td data-label="Name">Walk Score® <i class="home icon"></i></td>
      <td data-label="WS">{this.props.walkscore} {this.props.walkscoreDescription}</td>
    </tr>
    <tr>
      <td data-label="Name">Bike Score® <i class="bicycle icon"></i> </td>
      <td data-label="BS">{this.props.bikescore} {this.props.bikescoreDescription}</td>
    </tr>
  </tbody>
</table>

       </div> 
        </div>

        )
    }
}
        
