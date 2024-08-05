import React from 'react'
import '../styles/Housecard.css'
import {FaLocationDot, FaStar} from 'react-icons/fa6'
function Housecard({image,type,price,description,condition,isloading,address}) {
  return (
    <div className='house-card'>
    <FaStar className='start_icon'/>
    {isloading ? <h4>Loading...</h4>:<>
    <img src={image} alt="" />
    <div className='txt-cont'>

    <span>Type: {type}</span>
        <span><p>Price:{price}</p></span>
        <span>About home:  {description}</span>
         <span>Conditions:  {condition}</span>
         <FaLocationDot className='address-icon'/>
         <span>Address: {address} </span>
    </div>
      
    </>}
    <button className='contact'>Contact</button>
    </div>
  )
}

export default Housecard;