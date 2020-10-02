import React from 'react';

const About = () => { 
    return ( <section className="about" id="about">
        <div className="about__honeydrops box">
            <h2>Know more about Honeydrops</h2>
            <img src={require("../assets/Telematics.png")} alt="telematics illustration" ></img>
            <p>
                Honeydrops solutions designed to help you optimize, scale and take absolute control of your cost operations anywhere in the world.
                <br /><br />
                Honeydrops fleet tracking solutions help you monitor your assets/ vehicles to give you control remotely.
                <br /><br />
                Our <span className="mark">mission</span> is to be the value-centric solution Organization that bridge the gap between needs and services to individual customer and corporate organizations.
                <br /><br />
                Our <span className="mark">vision</span> is to become the leading service provider and value reference in facilitating and activating Africa’s business solutions.
            </p>
        </div>

        <div className="about__telematics box">
            <h2>What is Telematics?</h2>
            <img src={require("../assets/why_is_telematics.png")} alt="telematics illustration" ></img>
            <p>
                 Tracking basically provides information on position, while Telematics gives you more details than mere position. Tracking is just like 10% of the REAL DEAL.
                <br /><br />
                Telematics is a general term that refers to any device which merges telecommunications and informatics. This technology includes anything from GPS systems to navigation systems.
                <br /><br />
                It enables wireless data communication and opens up a huge range of possibilities. It can enable you to have wireless television and internet on your vehicle. It is essentially a range of different features, options and devices that are brought together by a single principle – data and communication.
                <br /><br />
                This technology is also used heavily in fleet tracking and management. More and more fleet owners are finding huge savings by adopting the technology.
            </p>
        </div>
    </section> );
}
 
export default About;