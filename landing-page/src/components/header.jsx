import { useState, useEffect } from "react";
import "../styles/header.css";


const Header = () => {

    return (
      <div className = "details">
        <div className = "box">
          <h2>Mohini khatavkar</h2>
          <div className = "icons">
          <img src = "../assets/facebook2.jpg" alt = "facebook"></img>
          <img src = "../assets/instagram.png" alt = "instagram"></img>
          <img src = "../assets/linked-in.png" alt = "linked-in"></img>
          </div>
        </div>
        <div class = "moushi">
          <img src = "../assets/moushi.png" alt = "moushi" className = "animate"></img>
          </div>
        </div>
      );

};

export default Header;
