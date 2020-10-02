import React from 'react';

const Nav = ({ open, setOpen }) => {
    return (<nav >
        <img src={require("../assets/Logo.png")} alt="Honeydrops logo" />

        <ul className={open ? "openMenu" : null}>
            <li onClick={() => setOpen(false)}><a href='#'>Home</a></li>
            <li onClick={() => setOpen(false)}><a href='#about'>About</a></li>
            <li onClick={() => setOpen(false)}><a href='#services'>Services</a></li>
            <li onClick={() => setOpen(false)}><a href='#testimonials'>Testimonials</a></li>
            <li onClick={() => setOpen(false)}><a href='#contact'>Contact us</a></li>
        </ul>
    </nav>);
}

export default Nav;