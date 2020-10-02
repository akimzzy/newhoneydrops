import React from 'react';

const Industry = () => {
    return ( <section className="industry">
        <h2>Industry Customers</h2>
        <ul>
            <li>
                <img src={require("../assets/telecomunication.jpg")} alt="Telecomunication industry" />
                <div className="box">
                    <h4>Telecomunication</h4>
                </div>
            </li>
            <li>
                <img src={require("../assets/transport.jpg")} alt="transportion and logistics" />
                
                <div className="box">
                    <h4>Transportion / Logistics</h4>
                </div>
            </li>
            <li>
                <img src={require("../assets/coporate.jpg")} alt="corporate organisation, government, and SMEs" />
                <div className="box">
                    <h4>Government / Corporate / SMEs</h4>
                </div>
                
            </li>
            <li>
                <img src={require("../assets/energy.jpg")} alt={"Energy & Power industry"} />
                
                <div className="box">
                    <h4>{'Energy & Power'}</h4>
                </div>
            </li>
            <li>
                <img src={require("../assets/insurance.jpg")} alt="Insurance companies" />
                
                <div className="box">
                    <h4>Insurance</h4>
                </div>
            </li>
            <li>
                <img src={require("../assets/individual.jpg")} alt="Individuals" />
                
                <div className="box">
                    <h4>Individuals</h4>
                </div>
            </li>
        </ul>
    </section> );
}
 
export default Industry;