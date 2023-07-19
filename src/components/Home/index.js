import React from "react";
import { Link } from "react-router-dom";
import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";
import LogoS from '../../assets/images/MS_logo-06.png'
const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['M', 'a', 'n', 'd', 'a', 'k', 'i', 'n', 'i']

    return (
<div className="container-fluid container home-page">
      <div className="text-zone">

      <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>e</span>
                    <span className={`${letterClass} _12`}>l</span>
                    <span className={`${letterClass} _12`}>l</span>
                    <span className={`${letterClass} _12`}>o,</span>
                    &nbsp;
                    <span className={`${letterClass} _12`}>I'</span>
                    <span className={`${letterClass} _12`}>m</span>
                    <br />

                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} />
                    <br />

                </h1>
                <h2> Frontend Developer | Graphics Designer</h2>
                <h3> This website is under construction.</h3>
                <Link to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJfrKsWmbLLSlFgrWJhxvZHqMqRsxpPRWBjCCmQHtXXvBFKdGTXxXQZmGVnWhFfclhPptVV" className="flat-button" target="_blank">MAIL ME</Link>
                </div>
                <div className="col-lg-4 logo-container">
                
    <img className='solid-logo' src={LogoS} alt="logo" />
    
    </div>
  </div>


    );
}

export default Home 