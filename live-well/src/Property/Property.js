import React from 'react'
import './Property.css'



const Property = (props) => {

    console.log(Number(props.estimate).toLocaleString())
    return (
        
        <div id="info">
        <h3>
        <form>
        <input type='text' autoComplete="off" name="address" placeholder="Address" required="required"  />
        <input type='text' autoComplete="off" name="citystatezip" placeholder="City, State, Zipcode" required="required" />
        <input type='submit' value="Search" />
        </form>
        </h3>
        <h4>Your New Home</h4> 
        <p>{props.address}, {props.city}, {props.state}, {props.zipcode}</p>
        <p>Estimate: ${Number(props.estimate).toLocaleString()}</p>
        <p><img alt="home pics" src={props.image} /></p>

         </div>
        
    )
}


export default Property