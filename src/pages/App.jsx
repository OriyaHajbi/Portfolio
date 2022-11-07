import React, { useState } from "react";
import NavBar from "../compenents/navbar"
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects'
import Footer from '../compenents/Footer';
import "../css/style.css";
function App() {
  const [isNightMode, setMode] = useState(true);

  const mode = isNightMode ? "night" : "day";

  return (
    <div className={`${mode}backgroundModeapp`}>
      <NavBar modeFunc={setMode} modeBool={isNightMode} modeClass={mode} />
      <div className='main'>
        <AboutMe modeClass={mode} />
        <Projects modeClass={mode} />
        <Contact />
        <Footer modeClass={mode} />
      </div>
    </div>


  );
}

export default App;

