import React from "react";
import githubIcon from "./GitHub.png"

import Twitter from "./Twitter.png"
import FacebookIcon from "./Facebook.png"
import InstaIcon from "./Insta.png"

export default function Footer() {


    return (
        <footer className="footer--icons">
            <img src={githubIcon} />
            <img src = {Twitter} />
            <img src = {FacebookIcon} />
            <img src = {InstaIcon} />
            
          


        </footer>
    )
}