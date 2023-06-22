import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCss3,
    faFigma,
    faGitAlt,
    faSass,
    faHtml5,
    faReact
  } from '@fortawesome/free-brands-svg-icons'

const About =() =>{
    return(
        <div className='container about-page'>
            <div className='text_zone'>
                <h1>
                <AnimatedLetters
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15} />
                </h1>
                <p> a Baglung native pursuing a Bachelor's degree in Electronics, Communication, and Information Engineering at Paschimanchal Campus Pokhara. With a passion for web development and graphic designing, I am always eager to learn new skills and expand my knowledge. 
                </p>
                <p>
                    In my free time, I enjoy exploring and appreciating nature, observing the beauty of the sky, clouds, mountains, and birds. </p>
                    <p>
                    As someone who loves to share knowledge and help others, I find great satisfaction in guiding and mentoring those who seek academic assistance.</p>
            </div>

            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faFigma} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faSass} color="pink" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
        </div>
    )
}

export default About 