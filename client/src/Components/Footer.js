import React from 'react';

const Footer = () => {

    return (<footer>

        <div>
            <img src={require('../assets/Logo.png')} alt="logo" />
            <p>Honeydrops solutions designed to help you optimize, scale and take absolute control of your cost operations anywhere in the world.</p>
        </div>

        <div>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
                <li><a href='#contact'>Contact us</a></li>
            </ul>
        </div>
        
        <div>
            <h3 style={{color: '#012311'}}>Quick contact</h3>
            
            <div>
                <div>
                    <img src={require("../assets/mail.svg")} alt="logo"  />
                </div>
                <a href="mailto:honeydropstelltd@gmail.com" >honeydropstelltd@gmail.com</a>
            </div>
            <div>
                <div>
                    <img src={require("../assets/phone.svg")} alt="logo"  />
                </div>
                <a href="tel:+2347062074810" >+234 706 207 4810</a>
                <a href="tel:+2349022320426" >+234 902 232 0426</a>
            </div>
            <div>
                <div>
                    <img src={require("../assets/location.svg")} alt="logo" />
                </div>
                <div>
                    <h3>Address</h3>
                    <p>
                        Road 15, Close C, Unit 4, <br/>
                        Lekki Gardens Phase 2 Estate,<br/>
                        Lekki-epe Expressway, Ajah.
                    </p>
                </div>
            </div>
        </div>
    </footer>);
}

export default Footer;