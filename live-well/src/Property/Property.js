import React, { Component } from 'react'
import './Property.css'



export default class Property extends Component {
    state = {
        address: '',
        citystatezip: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let address = this.state.address
        let citystatezip = this.state.citystatezip

        this.props.searchProperty(address, citystatezip)

    }

    handleChange = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    }


    render() {
        return (

            <div id="info">
        <h3>
        <form onSubmit={this.handleSubmit}>
        <input type='text' autoComplete="off" name="address" placeholder="Address" value={this.state.address} onChange={this.handleChange} required="required"  />
        <input type='text' autoComplete="off" name="citystatezip" placeholder="City, State, Zipcode" value={this.state.citystatezip} onChange={this.handleChange} required="required" />
        <input type='submit' value="Search" />
        </form>     
        </h3>
        <h4>Your New Home</h4> 
        <p>{this.props.address}, {this.props.city}, {this.props.state}, {this.props.zipcode}</p>
        <p>Estimated Value: ${Number(this.props.estimate).toLocaleString()}</p>
        <p><img alt="home pics" src={this.props.image} /></p>

         </div>

        )
    }
}