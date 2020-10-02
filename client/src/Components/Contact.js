import React, { useState } from 'react';
import axios from 'axios'



const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [requests, setRequests] = useState([]);
    const [sent, setSent] = useState(false)

    // console.log(name, email, country, message, subject)

    const handleServices = (string) => {

        if (requests.includes(string)) {
            setRequests(() => {
                const filtered = requests.filter(x => x !== string)
                return [...filtered]
            })
        } else {
            setRequests([...requests, string])
        }
    }

    const handleMessage = (e) => {

        e.preventDefault()

        let data = { name, email, country, phone, message, subject, requests }

        axios.post("https://honeydropssendmail.herokuapp.com/api/form", { ...data }, )
        .then(data => {

            setSent(true)
            setTimeout(()=> setSent(false), 3000)
            
            setName("")
            setEmail("")
            setCountry("")
            setPhone("")
            setMessage("")
            setSubject("")

        }).catch(error => {
            alert(error)
        })


    }

    return (
        <section className="contact" id="contact">
            <div className="contact__heading">
                <h2>Contact honeydrops</h2>
                <p>Let's help you monitor your assets/vehicles to give you control remotely </p>
            </div>

            <form onSubmit={(e) => handleMessage(e)}>
                <div className="fillIns">

                    <div className="fullName" >
                        <label htmlFor="fullName">Full name</label>
                        <input type="text" id="fullName" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div className="email">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>


                    <div className="country">
                        <label htmlFor="country">Country</label>
                        <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} required />
                    </div>

                    <div className="Phone">
                        <label htmlFor="Phone">Phone Number</label>
                        <input type="number" id="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>

                </div>

                <div className="services">
                    <label className="heading">Service(s)</label>

                    <div>
                        <input type="checkbox" id="Consultation/Facilitation" onChange={() => handleServices("Consultation/Facilitation of Business Solutions")} />
                        <label htmlFor="Consultation/Facilitation">Consultation/Facilitation of Business Solutions</label>
                    </div>

                    <div>
                        <input type="checkbox" id="FleetManagement" onChange={() => handleServices("Fleet Management Solution")} />
                        <label htmlFor="FleetManagement">Fleet Management Solution</label>
                    </div>

                    <div>
                        <input type="checkbox" id="Speed" onChange={() => handleServices("Speed Limiting Solutions")} />
                        <label htmlFor="Speed">Speed Limiting Solutions</label>
                    </div>

                    <div>
                        <input type="checkbox" id="Biometric" onChange={() => handleServices("Biometric Access Solutions")} />
                        <label htmlFor="Biometric">Biometric Access Solutions</label>
                    </div>

                    <div>
                        <input type="checkbox" id="solar" onChange={() => handleServices("Solar panel / inverter and lithium")} />
                        <label htmlFor="solar">Solar panel / inverter and lithium</label>
                    </div>

                    <div>
                        <input type="checkbox" id="business" onChange={() => handleServices("Business To Business (B2B)")} />
                        <label htmlFor="business">Business To Business (B2B)</label>
                    </div>

                </div>

                <div className="subject">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>

                <div className="message">
                    <label htmlFor="message">Additional message?</label>
                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>

                <button style={sent ? {backgroundColor: "#012311", color: "#0EFF8F", pointerEvents: "none"} : null }>{ sent ? "Message sent" : "Send message"}</button>
            </form>
        </section>
    );
}

export default Contact;