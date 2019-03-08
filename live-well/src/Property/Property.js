import React from 'react'



const Property = (props) => {
    console.log(props)
    const propertyList = props.property.map((property, index) => {
        return <li key={index}> {property}</li>
    })
    
    
    return (
        
        <div id="info">
        <h4>Your New Home</h4> 
         <ul>{propertyList}</ul>
         </div>
    )

}


export default Property