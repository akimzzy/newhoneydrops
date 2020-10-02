import React, { useState } from 'react';
import Header from './Components/Header';
import Services from './Components/Services';
import About from './Components/About';
import Industry from './Components/Industry';
import Customer from './Components/Customer';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import MobileHamburger from './Components/MobileHamburger';


function App() {

  const [open, setOpen] = useState(false)

  return (
    <div className="App">

      <MobileHamburger open={open} setOpen={setOpen} />

      <div className="format">
        <Header setOpen={setOpen} open={open} />
        <Services />
        <About />
        <Industry />
        <Customer />
        <Contact />
      </div>

      <Footer />

    </div>
  );
}

export default App;
