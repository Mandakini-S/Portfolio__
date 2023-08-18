import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const Contact = () => {
    const nameArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e'];

    return (
        <>
            <div className='container contact-page'>
                <div className='text_zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass="text-animate"
                            strArray={nameArray}
                            idx={15}
                        />
                    </h1>
                    <p>I am eagerly anticipating freelance opportunities where I can apply my skills and expertise in a dynamic and flexible work environment. You can reach me out by filling up this form.</p>
                </div>

                <div className='form-zone'>
                    <form>
                        <ul>
                            <li>
                                <input type="text" name="name" placeholder='Name' required />
                            </li>
                            <li>
                                <input type="email" name="email" placeholder='Email' required />
                            </li>
                            <li>
                                <input type="Subject" name="Subject" placeholder='Subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name="Message" required></textarea>
                            </li>
                            <li>
                                <input type="Submit" className="flat-button" value='Send' required />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
