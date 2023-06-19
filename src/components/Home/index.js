
import { Link } from "react-router-dom";
import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";
const Home = () => {

    // const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['M','a','n','d','a','k','i','n','i']
    const jobArray = ['F','r','o','n','t','e','n','d','','D','e','v','e','l','o','p','e','r','|','G','r','a','p','h','i','c','s','','D','e','s','i','g','n','e','r','.']

    return (
        <div className="container home-page">
            <div className="text-zone">
                {/* <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>e</span>
                    <span className={`${letterClass} _12`}>l</span>
                    <span className={`${letterClass} _12`}>l</span>
                    <span className={`${letterClass} _12`}>o,</span>
                    &nbsp;
                    <span className={`${letterClass} _12`}>I'</span>
                    <span className={`${letterClass} _12`}>m</span>
                <br/>

                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={15}/>
                {/* <h1>Hello, <br /> I'm
                Mandakini */}
                {/* </h1> */} */}
                {/* <h2> Frontend Developer | Graphics Designer</h2> */}
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>

        </div>
    );
}

export default Home 