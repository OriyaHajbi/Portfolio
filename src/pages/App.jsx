import React from 'react';
import NavBar from "../compenents/navbar"
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects'
import Footer from '../compenents/Footer';
import "../css/style.css";
function App() {
  return (
    <div>
      <NavBar />
      <div className='main'>
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>


  );
}

export default App;

