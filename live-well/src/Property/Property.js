import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import HouseMap from '../Map/Map'
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

    <section id="info" className='Main'>
        <div className='formContainer'>
        <form id='form-input' onSubmit={(event)=>this.handleSubmit(event)} >
        <input type='text' autoComplete="off" name="address" placeholder="Address" value={this.state.address} onChange={this.handleChange} required="required"  />
        <input type='text' autoComplete="off" name="citystatezip" placeholder="City, State, Zipcode" value={this.state.citystatezip} onChange={this.handleChange} required="required" />
        <input type='submit' value="Search" />
        </form>
        </div>    
        <div className='homesContainer'>
        <p>{this.props.address} {this.props.city} {this.props.state} {this.props.zipcode}</p>
        <p>Bedrooms: {this.props.bedrooms} Bathrooms: {this.props.bathrooms}</p>
        <p>Square Footage: {Number(this.props.squareFeet).toLocaleString()}</p>
        <p>Estimated Value: ${Number(this.props.estimate).toLocaleString()}</p>
        <p>Value change in the last 30 days: ${Number(this.props.valueChange).toLocaleString()}</p>
        <button>Add to favorites</button>
        </div>
    </section>

        )
    }
}
        
