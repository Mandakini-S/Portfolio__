
import { Link } from "react-router-dom";
import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";
import Logo from "./Logo";
const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['M', 'a', 'n', 'd', 'a', 'k', 'i', 'n', 'i']

    return (
        <div className="container home-page">
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
                <h2> This website is under construction.</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
       
    );
}

export default Home 