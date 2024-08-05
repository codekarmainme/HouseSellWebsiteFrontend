import React from "react";
import bg from "../assets/images/pf-bg.jpg";
import pflpic from "../assets/images/pfl-pic.jpg";
import "../styles/Profile.css";
import Housecard from '../components/Housecard.jsx'
import houses from '../assets/fake-data/Housesdata.jsx'
function Profile() {
  return (
    <div className="profile">
      <div className="pfl-img">
        <div className="pfl">
          <img src={pflpic} className="pfl-pic" alt="Mr. abebe belew" />
          <div className="pfl-txt">
          <h3>Mr.Abebe Tasew</h3>
          <span>
            I am a real state agent at Ovid Real state for 10 fucking years.
          </span>
          </div>
          
        </div>
        
        <img
          src={bg}
          className="bg-img"
          alt="profile background house sell in ethiopia"
        />
      </div>
      <hr />
      <h4>Your Posts</h4>
      <div className="pfl-posts">
      {
    houses.map((house)=>(
        <Housecard image={house.image} type={house.type} price={house.price} description={house.description} condition={house.condition}/>
    ))
   
      }
      </div>
        
    </div>
  );
}

export default Profile;
