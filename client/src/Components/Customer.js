import React from 'react';

const Customer = () => {
    // const


    return (<section className="customers" id="testimonials">

        <h2>Customer Testimonials</h2>
        <div className="container">

            <div className="customer customer_active">
                <div className="customer__details">
                    <img src={require("../assets/customer1.png")} alt="first customer" />
                    <h5>John Does</h5>
                    <p>Manager, ABC ltd.</p>
                </div>
                <div className="customer__message" >
                    <img src={require("../assets/double-quotes.svg")} alt="quote" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare vestibulum est a ultricies. Integer mollis rhoncus cursus. Ut lobortis metus id leo commodo tincidunt. Sed euismod consectetur leo sed facilisis. Vivamus laoreet lorem a quam interdum, at cursus lectus sodales. Suspendisse suscipit elit finibus eros convallis tincidunt. Sed bibendum varius nibh vel bibendum. Nam porttitor arcu nisl, quis eleifend dui eleifend eu.</p>
                </div>
            </div>

            <div className="customer">
                <div className="customer__details">
                    <img src={require("../assets/customer1.png")} alt="first customer" />
                    <h5>John Does2</h5>
                    <p>Manager, ABC ltd.</p>
                </div>
                <div className="customer__message" >
                    <img src={require("../assets/double-quotes.svg")} alt="quote" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare vestibulum est a ultricies. Integer mollis rhoncus cursus. Ut lobortis metus id leo commodo tincidunt. Sed euismod consectetur leo sed facilisis. Vivamus laoreet lorem a quam interdum, at cursus lectus sodales. Suspendisse suscipit elit finibus eros convallis tincidunt. Sed bibendum varius nibh vel bibendum. Nam porttitor arcu nisl, quis eleifend dui eleifend eu.</p>
                </div>
            </div>

            <div className="customer">
                <div className="customer__details">
                    <img src={require("../assets/customer1.png")} alt="first customer" />
                    <h5>John Does3</h5>
                    <p>Manager, ABC ltd.</p>
                </div>
                <div className="customer__message" >
                    <img src={require("../assets/double-quotes.svg")} alt="quote" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare vestibulum est a ultricies. Integer mollis rhoncus cursus. Ut lobortis metus id leo commodo tincidunt. Sed euismod consectetur leo sed facilisis. Vivamus laoreet lorem a quam interdum, at cursus lectus sodales. Suspendisse suscipit elit finibus eros convallis tincidunt. Sed bibendum varius nibh vel bibendum. Nam porttitor arcu nisl, quis eleifend dui eleifend eu.</p>
                </div>
            </div>
        </div>
        <div className="trail_box">
            <div className="trail active"></div>
            <div className="trail"></div>
            <div className="trail"></div>
        </div>
    </section>);
}

export default Customer;