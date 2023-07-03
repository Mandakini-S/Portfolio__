import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['C','o','n','t','a','c','t',' ','m','e']
    return (
        <>
            <div className='container contact-page'>
                <div className='text_zone'>
                    <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} />
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Contact