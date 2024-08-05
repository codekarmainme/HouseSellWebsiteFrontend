import React, { useEffect, useState } from 'react'
import '../styles/Houses.css'
import axios from 'axios'
import Housecard from './Housecard'
import Housecardloading from './Housecardloading'
// import houses from '../assets/fake-data/Housesdata.jsx'
function Houses() {
  const[houses,setHouses]=useState([])
  const[isloading,setIsloading]=useState(true )
  const fetchHouses=()=>{
    axios.get('http://127.0.0.1:8000/api/houses/').then(res=>{
      setHouses(res.data);
      setIsloading(false);
    })
  }
  useEffect(()=>{

    const interval = setInterval(fetchHouses, 5000) // Fetch every 5 seconds

    return () => clearInterval(interval)
  },[])
  return (
    <div className='houses-container'>

    {isloading ? <>
      <Housecardloading/>
      <Housecardloading/>
      <Housecardloading/>
      <Housecardloading/>
    </>: houses.map((house)=>(
        <Housecard image={house.image} type={house.type} price={house.price} address={house.address} description={house.description} condition={house.condition} isloading={isloading}/>
    ))}
  
        
    </div>
  )
}

export default Houses