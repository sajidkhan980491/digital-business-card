import React from "react";
import profilepic from "./udoy.jpg.jpg"

export default function Info() {
    return (
    <nav>
        <img src ={profilepic} className="nav--avatar"/>
        <div className="nav--info">
            <h2>Sajid Khan</h2>
            <h4>Frontend Developer</h4>
            <h5>SajidKhan.website</h5> 
        </div>

        <div className="nav--btn">
              <button ><i class="fa-regular fa-envelope"></i>Email</button>
              <button><i class="fa-brands fa-linkedin"></i> Linkedin</button>
        </div> 
        
            
        
        
    </nav>

    )
}

