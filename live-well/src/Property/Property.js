import React from 'react'
import './Property.css'



const Property = (props) => {

    console.log(props)
    return (
        
        <div id="info">
        <h4>Your New Home</h4> 
        <p>{props.address}, {props.city}, {props.state}, {props.zipcode}</p>
         </div>
    )
}


export default Property