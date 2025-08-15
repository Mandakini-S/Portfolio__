import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faDocker, faGitAlt, faGithub, faLinkedin, faMedium, faReact, faPython, faLinux } from '@fortawesome/free-brands-svg-icons'; 
import { faBookOpen, faCalendarAlt, faCalendarCheck, faCode, faDatabase,faEnvelope, faBuilding, faExternalLinkAlt, faGraduationCap, faMapMarkerAlt, faTasks, faTools, faTrophy, faUsers, faArrowUp, faShieldAlt, faTerminal, faCloud} from '@fortawesome/free-solid-svg-icons';
import './index.scss';

// Import all images
import glucobalanceImage from '../../assets/images/GlucoBalance.jpg'; 
import selfCheckoutImage from '../../assets/images/Self_checkout_device.jpeg';
import hospitalManagementImage from '../../assets/images/HMS.jpg';
import UbuntuImage from '../../assets/images/Ubuntu.jpg';
import AzureImage from '../../assets/images/Azure.png';
import myProfileImage from '../../assets/images/Self-removebg-preview.png';
import Ices1 from '../../assets/images/ICES1.jpeg';
import Ices2 from '../../assets/images/ICES2.jpeg';
import Ethoshack1 from '../../assets/images/ETHOSHACK1.jpeg';
import Ethoshack2 from '../../assets/images/ETHOSHACK2.jpeg';
import Ethoshack3 from '../../assets/images/ETHOSHACK3.jpeg';
import Ioegc1 from '../../assets/images/IOEGC1.jpeg';
import Ioegc2 from '../../assets/images/IOEGC2.jpeg';
import Ioegc3 from '../../assets/images/IOEGC3.jpeg';
import Ioegc4 from '../../assets/images/IOEGC4.jpeg';
import Iconbook from '../../assets/images/ICON.jpg';
import SagarmathaHacktoberfest from '../../assets/images/Sagarmatha_Hacktoberfest.png';


const OnePagePortfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [showScrollTop, setShowScrollTop] = useState(false);
    const nameArray = ['M', 'a', 'n', 'd', 'a', 'k', 'i', 'n', 'i'];

    const technicalExperience = [
        {
            role: "Network Administration Assistant",
            company: "Pashchimanchal Campus",
            date: "Dec 2024 - Jan 2025",
            tasks: [
                "Assisted in Docker container setup, virtual machine provisioning, application deployment, OS imaging, and network access control.",
                "Gained hands-on experience with automation tools and an open-source ticketing system."
            ]
        }
    ];

    const projects = [ 
        { title: "Non-Invasive Glucose Monitoring", description: "Final year project implementing Near-Infrared (NIR) technique for glucose monitoring with mobile app integration.", technologies: ["NIR Tech", "Mobile App", "Embedded"], github: "#!", live: "#!", images: [glucobalanceImage], type: "Hardware+Software" },
        { title: "Self-Checkout System in Library", description: "An innovative library management system using NFC technology for automated book checkout and return processes.", technologies: ["NFC", "Database", "IoT"], github: "https://github.com/Mandakini-S/Self-checkout-system-in-Library", live: "#!", images: [selfCheckoutImage], type: "IoT Project" },
        { title: "Hospital Management System", description: "Comprehensive database development for hospital management with patient records, appointment scheduling, and staff management.", technologies: ["MySQL", "System Design"], github: "https://github.com/Mandakini-S/Careconnect_hms", live: "#!", images: [hospitalManagementImage], type: "Database Project" }, 
    ];
    
    const skills = [
        { name: "React.js", icon: faReact, category: "Frontend" },
        { name: "Django", icon: faPython, category: "Backend" },
        { name: "C/C++", icon: faCode, category: "Programming" },
        { name: "AWS", icon: faAws, category: "Cloud" },
        { name: "Azure", icon: faCloud, category: "Cloud" },
        { name: "Linux", icon: faLinux, category: "DevOps" },
        { name: "Bash Scripting", icon: faTerminal, category: "DevOps" },
        { name: "Docker", icon: faDocker, category: "DevOps" },
        { name: "MySQL/PostgreSQL", icon: faDatabase, category: "Database" },
        { name: "Git/GitHub", icon: faGitAlt, category: "Tools" },
        { name: "Jira/ClickUp", icon: faTasks, category: "Project Management" },
    ];
    
    const achievements = [{ title: "BIC Hackathon V 3.0 Winner", description: "Won with 'SubhaYatra' project, contributing to idea curation, data collection, and frontend development", icon: faTrophy, year: "2023" }, { title: "IOE Merit Scholarship", description: "Institute of Engineering, Tribhuvan University Merit Scholarship recipient (2021-2025)", icon: faGraduationCap, year: "2021-2025" }, { title: "Top 60 Consistent Learner", description: "Selected as one of top 60 learners in Leapfrog Technology's 60-day learning challenge", icon: faBookOpen, year: "2024" }];
    
    const certificates = [
        { title: "AWS Certified Cloud Practitioner", description: "Successfully obtained AWS Cloud Practitioner certification (CLF-C02), validating foundational cloud knowledge.", issuer: "Amazon Web Services", year: "2025", icon: faAws },
        { title: "Cloud Computing Essentials (Learning Path)", description: "Completed a comprehensive learning path on cloud benefits, services, platforms, security, and careers.", issuer: "LinkedIn Learning", year: "2024", icon: faLinkedin },
        { title: "Hands-on Introduction to Linux Commands and Shell Scripting", description: "Completed coursework on Bash scripting, command-line utilities, and Linux environment management.", issuer: "Coursera", year: "2023", icon: faTerminal },
        { title: "NCL Spring 2022 Team Game", description: "Participated in a team-based cybersecurity competition, applying skills in cryptography and network traffic analysis.", issuer: "Cyber Skyline", year: "2022", icon: faShieldAlt }
    ];

    const events = [ 
        { title: "Innovative Computer Eng. Students' Society", role: "Vice President (7th Executive)", date: "April 2023 - May 2024", location: "Pashchimanchal Campus", type: "Leadership", description: "Coordinated executive meetings, fostered industry partnerships for member opportunities, and organized workshops to enhance student engagement.", images: [Ices2, Ices1] },
        { title: "ICON Student Research Journal, Vol. 7", role: "Editor in Chief", date: "2024", location: "Pashchimanchal Campus", type: "Leadership", description: "Designed the entire journal (ISSN: 2645-8365) using Adobe InDesign, led content curation, and maintained high standards for accuracy across all articles.", images: [Iconbook] },
        { title: "EthosHack - National Hackathon", role: "Software Manager & Organizer", date: "2024", location: "Pashchimanchal Campus", type: "Organizer", description: "Oversaw GitHub repositories, provided real-time technical support, designed certificates and social media posts, and wrote content for social platforms.", images: [Ethoshack1, Ethoshack2, Ethoshack3] }, 
        { title: "Sagarmatha Hacktoberfest 2023", role: "Lead Graphics Designer & Organizer", date: "October 2023", location: "Nepal", type: "Organizer", description: "Designed all promotional materials, including banners, posters, and social media graphics, to boost event engagement and visibility under a tight deadline.", images: [SagarmathaHacktoberfest] },
        { title: "15th IOE Graduate Conference", role: "Master of Ceremony", date: "2024", location: "IOE, Pulchowk Campus", type: "Organizer", description: "Coordinated the event flow, introduced speakers, and managed the schedule to ensure a seamless experience for all attendees and presenters.", images: [Ioegc1, Ioegc2, Ioegc3, Ioegc4] },
    ];

    const blogPosts = [
        { title: "Creating Your First Azure Virtual Machine: A Super Simple Beginner’s Guide", excerpt: "A beginner's guide to create VM in azure.", date: "Aug 12, 2024", readTime: "9 min read", tags: ["VM", "Azure", "Cloud"], images: [AzureImage], link: "https://medium.com/@mandakini_yess/creating-your-first-azure-virtual-machine-a-super-simple-beginners-guide-7503734563a9" },
        { title: "How to Access Your Ubuntu VM from Windows or Ubuntu (Beginner-Friendly Guide)", excerpt: "Learn how to access your Ubuntu VM", date: "Aug 14, 2024", readTime: "6 min read", tags: ["VM", "Azure", "Cloud"], images: [UbuntuImage], link: "https://medium.com/@mandakini_yess/how-to-access-your-ubuntu-vm-from-windows-or-ubuntu-beginner-friendly-guide-63f45f9a2e65" }, 
    ];

    useEffect(() => {
        const timer = setTimeout(() => { setLetterClass('text-animate-hover'); }, 4000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => { setShowScrollTop(window.pageYOffset > 300); };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };
    const handleContactSubmit = (e) => { e.preventDefault(); alert('Thank you for your message!'); };
    const getRoleIcon = (type) => {
        switch (type) {
            case 'Organizer': return faTools;
            case 'Leadership': return faUsers;
            default: return faCalendarCheck;
        }
    };

    return (
        <>
            <div className="one-page-portfolio">
                <section id="hero" className="hero-section">
                    <div className="text-zone">
                        <h1>
                            <span className={letterClass}>H</span><span className={`${letterClass} _12`}>i,</span><br />
                            <span className={`${letterClass} _13`}>I'm{'\u00A0'}</span>
                            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} /> <br />
                        </h1>
                        <h2>Electronics Engineering Graduate | Web Developer | Cloud Enthusiast</h2>
                        <p className="hero-description">Curious mind who loves creating, exploring, and occasionally getting lost in the joy of figuring things out.</p>
                        <div className="hero-buttons">
                            <a href="#contact" className="flat-button" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>GET IN TOUCH</a>
                        </div>
                    </div>
                </section>
                
                <section id="about" className="about-section">
                    <div className="container">
                        <div className="section-header"><h2>About Me</h2></div>
                        <div className="about-content">
                            <div className="about-text">
                                <p>I'm a recent Electronics & Communication graduate passionate about cloud computing, Linux, web development, and cybersecurity. As an AWS Certified Cloud Practitioner, I’ve explored real-world tech through hands-on projects with React, Django, and IoT, while also mentoring others in Git and frontend tools. I thrive on building, automating, and learning in collaborative environments—and I love sharing that journey with others.</p>
                                <div className="education-info">
                                    <h3><FontAwesomeIcon icon={faGraduationCap} /> Education</h3>
                                    <div className="education-item">
                                        <h4>BE in Electronics, Communication and Information Engineering</h4>
                                        <p>Institute of Engineering, Tribhuvan University (2021-2025)</p>
                                        <span className="merit">Merit Scholarship Recipient</span>
                                    </div>
                                    <div className="education-item">
                                        <h4>HSEB (High School)</h4>
                                        <p>Angel’s Heart College, Manamaiju, Kathmandu​ (2018-2020)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="about-image">
                                <div className="image-container">
                                    <img src={myProfileImage} alt="Mandakini Sapkota" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="skills" className="skills-section">
                    <div className="container">
                        <div className="section-header"><h2>Skills & Technologies</h2></div>
                        <div className="skills-grid">{skills.map((skill, index) => (
                            <div key={index} className="skill-item">
                                <div className="skill-icon"><FontAwesomeIcon icon={skill.icon} /></div>
                                <h3>{skill.name}</h3>
                                <span className="skill-category">{skill.category}</span>
                            </div>
                        ))}</div>
                    </div>
                </section>

                <section id="projects" className="projects-section">
                    <div className="container">
                        <div className="section-header"><h2>Featured Projects</h2></div>
                        <div className="projects-grid">{projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="project-image">
                                    <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                                        {project.images.map((img, i) => (
                                            <div key={i}>
                                                <img src={img} alt={`${project.title} - ${i + 1}`} />
                                            </div>
                                        ))}
                                    </Carousel>
                                    <div className="project-type">{project.type}</div>
                                    <div className="project-links-container">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-technologies">{project.technologies.map((tech, techIndex) => (<span key={techIndex} className="tech-tag">{tech}</span>))}</div>
                                </div>
                            </div>
                        ))}</div>
                    </div>
                </section>

                <section id="achievements" className="achievements-section">
                    <div className="container">
                        <div className="section-header"><h2>Achievements</h2></div>
                        <div className="achievements-grid">{achievements.map((achievement, index) => (
                            <div key={index} className="achievement-card">
                                <div className="achievement-icon"><FontAwesomeIcon icon={achievement.icon} /></div>
                                <div className="achievement-content">
                                    <span className="achievement-year">{achievement.year}</span>
                                    <h3>{achievement.title}</h3>
                                    <p>{achievement.description}</p>
                                </div>
                            </div>
                        ))}</div>
                    </div>
                </section>
                
                <section id="certificates" className="certificates-section">
                    <div className="container">
                        <div className="section-header"><h2>Certificates</h2></div>
                        <div className="certificates-grid">
                            {certificates.map((cert, index) => (
                                <div key={index} className="certificate-card">
                                    <div className="certificate-icon"><FontAwesomeIcon icon={cert.icon} /></div>
                                    <div className="certificate-content">
                                        <span className="certificate-year">{cert.year}</span>
                                        <h3>{cert.title}</h3>
                                        <p className="certificate-issuer">{cert.issuer}</p>
                                        <p>{cert.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="experience" className="experience-section">
                    <div className="container">
                        <div className="section-header"><h2>Technical Experience</h2></div>
                        <div className="experience-timeline">
                            {technicalExperience.map((exp, index) => (
                                <div key={index} className="experience-card">
                                    <h3>{exp.role}</h3>
                                    <div className="experience-meta">
                                        <span className="company"><FontAwesomeIcon icon={faBuilding} /> {exp.company}</span>
                                        <span className="date"><FontAwesomeIcon icon={faCalendarAlt} /> {exp.date}</span>
                                    </div>
                                    <ul className="experience-tasks">
                                        {exp.tasks.map((task, i) => (
                                            <li key={i}>{task}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                <section id="events" className="events-section">
                    <div className="container">
                        <div className="section-header"><h2>Events & Leadership</h2></div>
                        <div className="events-timeline">{events.map((event, index) => (
                            <div key={index} className="event-card">
                                <div className="event-image">
                                    <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                                        {event.images.map((img, i) => (
                                            <div key={i}>
                                                <img src={img} alt={`${event.title} - ${i + 1}`} />
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>
                                <div className="event-content">
                                    <div className="event-header">
                                        <div className="event-meta">
                                            <span className="event-date"><FontAwesomeIcon icon={faCalendarAlt} /> {event.date}</span>
                                            <span className="event-location"><FontAwesomeIcon icon={faMapMarkerAlt} /> {event.location}</span>
                                        </div>
                                        <h3>{event.title}</h3>
                                        <div className="event-role"><FontAwesomeIcon icon={getRoleIcon(event.type)} /> {event.role}</div>
                                    </div>
                                    <p className="event-description">{event.description}</p>
                                </div>
                            </div>
                        ))}</div>
                    </div>
                </section>

                <section id="blog" className="blog-section">
                    <div className="container">
                        <div className="section-header"><h2>Latest Blog Posts</h2></div>
                        <div className="blog-grid">{blogPosts.map((post, index) => (
                            <article key={index} className="blog-card">
                                <div className="blog-image">
                                    <img src={post.images[0]} alt={post.title} />
                                    <div className="blog-links-container">
                                        <a href={post.link} target="_blank" rel="noopener noreferrer" className="read-more">Read More <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                </div>
                            </article>
                        ))}</div>
                    </div>
                </section>

                <section id="contact" className="contact-section">
                    <div className="container">
                        <div className="section-header"><h2>Let's Connect</h2></div>
                        <div className="contact-content">
                            <div className="contact-info">
                                <h3>Ready to collaborate!</h3>
                                <p>I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply chat about technology.</p>
                                <div className="contact-details">
                                    <div className="contact-item"><FontAwesomeIcon icon={faEnvelope} /> <span>mandakinisapkota@gmail.com</span></div>
                                    <div className="contact-item"><FontAwesomeIcon icon={faMapMarkerAlt} /> <span>Pokhara, Nepal</span></div>
                                </div>
                                <div className="social-links">
                                    <a href="https://github.com/Mandakini-S" target="_blank" rel="noopener noreferrer" title="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="https://www.linkedin.com/in/mandakini-sapkota-945164232/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a href="https://medium.com/@mandakini_yess" target="_blank" rel="noopener noreferrer" title="Medium"><FontAwesomeIcon icon={faMedium} /></a>
                                </div>
                            </div>
                            <div className="contact-form">
                                <form onSubmit={handleContactSubmit}>
                                    <div className="form-group"><input type="text" placeholder="Your Name" required /></div>
                                    <div className="form-group"><input type="email" placeholder="Your Email" required /></div>
                                    <div className="form-group"><textarea placeholder="Your Message" rows="5" required></textarea></div>
                                    <button type="submit" className="flat-button"><FontAwesomeIcon icon={faEnvelope} /> Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {showScrollTop && (<button className="scroll-to-top" onClick={scrollToTop}><FontAwesomeIcon icon={faArrowUp} /></button>)}
            </div>
        </>
    );
};

export default OnePagePortfolio;