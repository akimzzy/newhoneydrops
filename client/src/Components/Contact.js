import React, { useState } from "react";
import axios from "axios";
import ServicesOption from "./ServicesOption";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [requests, setRequests] = useState([]);
  const [sent, setSent] = useState(false);

  const handleServices = (string) => {
    if (requests.includes(string)) {
      setRequests(() => {
        const filtered = requests.filter((x) => x !== string);
        return [...filtered];
      });
    } else {
      setRequests([...requests, string]);
    }
  };

  const handleMessage = (e) => {
    e.preventDefault();

    let data = { name, email, country, phone, message, subject, requests };
    axios
      .post("https://honeydropssendmail.herokuapp.com/api/form", { ...data })
      .then((data) => {
        setSent(true);
        setTimeout(() => setSent(false), 3000);

        setName("");
        setEmail("");
        setCountry("");
        setPhone("");
        setMessage("");
        setSubject("");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__heading">
        <h2>Contact honeydrops</h2>
        <p>
          Let's help you monitor your assets/vehicles to give you control
          remotely{" "}
        </p>
      </div>

      <form onSubmit={(e) => handleMessage(e)}>
        <div className="fillIns">
          <div className="fullName">
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              id="fullName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="email">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="country">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>

          <div className="Phone">
            <label htmlFor="Phone">Phone Number</label>
            <input
              type="number"
              id="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="services">
          <label className="heading">Select the Service(s) need below</label>
    
          <ServicesOption
            service="Consultation/Facilitation of Business Solutions"
            handleServices={handleServices}
          />
          <ServicesOption
            service="Fleet Management Solution"
            handleServices={handleServices}
          />
          <ServicesOption
            service="Speed Limiting Solutions"
            handleServices={handleServices}
          />
          <ServicesOption
            service="Biometric Access Solutions"
            handleServices={handleServices}
          />
          <ServicesOption
            service="Solar panel / inverter and lithium"
            handleServices={handleServices}
          />
          <ServicesOption
            service="Business To Business (B2B)"
            handleServices={handleServices}
          />
        </div>

        <div className="subject">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="message">
          <label htmlFor="message">Additional message?</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          style={
            sent
              ? {
                  backgroundColor: "#012311",
                  color: "#0EFF8F",
                  pointerEvents: "none",
                }
              : null
          }
        >
          {sent ? "Message sent" : "Send message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
