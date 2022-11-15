import React from "react";
import './footer.css';

const FooterBottom=(props)=>{
    return(
        <footer className="bg bg-warning">
            {props.messgae}
            {/* <b>Copyright @www.cybage.com</b> */}
        </footer>
    ) 
}

export default FooterBottom;