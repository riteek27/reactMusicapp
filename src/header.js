import React from "react";
import './header.css';

const HeaderTop=(props)=>{
return(
    <header className="bg bg-warning">
        {props.title}
        {/* <b>Welcome to Musify</b> */}
    </header>
    );
}
export default HeaderTop;
