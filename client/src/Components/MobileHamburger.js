import React from 'react';

const MobileHamburger = ({ open, setOpen}) => {

    return ( <img onClick={() => setOpen(!open)} className="menu_buton"  src={open ? require("../assets/close.svg") : require("../assets/open.svg")} alt="mobile menu button"/> );
}
 
export default MobileHamburger;