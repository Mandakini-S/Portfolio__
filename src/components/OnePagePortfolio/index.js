import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faDocker, faGitAlt, faGithub, faLinkedin, faMedium, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen, faCalendarAlt, faCalendarCheck, faCode, faDatabase, faDownload, faEnvelope, faExternalLinkAlt, faGraduationCap, faMapMarkerAlt, faMicrochip, faTools, faTrophy, faUsers, faArrowUp, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const OnePagePortfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [showScrollTop, setShowScrollTop] = useState(false);
    const nameArray = ['M', 'a', 'n', 'd', 'a', 'k', 'i', 'n', 'i'];
    
    // const jobString = "Electronics engineering graduate & cloud enthusiast";
    // const jobArray = jobString.replace(/ /g, '\u00A0').split('');

    const projects = [ { title: "Non-Invasive Glucose Monitoring", description: "Final year project implementing Near-Infrared (NIR) technique for glucose monitoring with mobile app integration.", technologies: ["NIR Tech", "Mobile App", "Embedded"], github: "#!", live: "#!", image: "https://placehold.co/400x250/1e2749/ffd700?text=Project", type: "Hardware+Software" }, { title: "Self-Checkout System in Library", description: "An innovative library management system using NFC technology for automated book checkout and return processes.", technologies: ["NFC", "Database", "IoT"], github: "https://github.com/Mandakini-S/Self-checkout-system-in-Library", live: "#!", image: "https://placehold.co/400x250/1e2749/ffd700?text=Project", type: "IoT Project" }, { title: "Hospital Management System", description: "Comprehensive database development for hospital management with patient records, appointment scheduling, and staff management.", technologies: ["MySQL", "System Design"], github: "https://github.com/Mandakini-S/Careconnect_hms", live: "#!", image: "https://placehold.co/400x250/1e2749/ffd700?text=Project", type: "Database Project" }, ];
    const skills = [ { name: "React.js", icon: faReact, level: 85, category: "Frontend" }, { name: "C/C++", icon: faCode, level: 90, category: "Programming" }, { name: "VHDL", icon: faMicrochip, level: 80, category: "Hardware" }, { name: "Git/GitHub", icon: faGitAlt, level: 88, category: "Tools" }, { name: "AWS Cloud", icon: faAws, level: 75, category: "Cloud" }, { name: "MySQL/PostgreSQL", icon: faDatabase, level: 82, category: "Database" }, { name: "Docker", icon: faDocker, level: 70, category: "DevOps" }, ];
    const achievements = [{ title: "BIC Hackathon V 3.0 Winner", description: "Won with 'SubhaYatra' project, contributing to idea curation, data collection, and frontend development", icon: faTrophy, year: "2023" }, { title: "IOE Merit Scholarship", description: "Institute of Engineering, Tribhuvan University Merit Scholarship recipient (2021-2025)", icon: faGraduationCap, year: "2021-2025" }, { title: "Top 60 Consistent Learner", description: "Selected as one of top 60 learners in Leapfrog Technology's 60-day learning challenge", icon: faBookOpen, year: "2024" }];
    const certificates = [ { title: "AWS Certified Cloud Practitioner", description: "Successfully obtained AWS Cloud Practitioner certification (CLF-C02), validating foundational cloud knowledge.", issuer: "Amazon Web Services", year: "2024", icon: faAws }, { title: "Foundations of Cybersecurity", description: "Completed Google's foundational course on cybersecurity principles and practices.", issuer: "Google on Coursera", year: "2023", icon: faShieldAlt } ];
    const events = [ { title: "EthosHack - National Hackathon", role: "Software Manager & Organizer", date: "2024", location: "Pashchimanchal Campus", type: "Organizer", description: "Led the technical aspects of a national hackathon, overseeing GitHub repositories and providing real-time technical support.", image: "https://placehold.co/400x300/1e2749/ffffff?text=Event" }, { title: "Sagarmatha Hacktoberfest 2023", role: "Lead Graphics Designer & Organizer", date: "October 2023", location: "Nepal", type: "Organizer", description: "Spearheaded the visual identity and promotional strategy for Hacktoberfest 2023, creating engaging designs that boosted participation.", image: "https://placehold.co/400x300/1e2749/ffffff?text=Event" }, ];
    const blogPosts = [ { title: "Creating Your First Azure Virtual Machine: A Super Simple Beginner’s Guide", excerpt: "A beginner's guide to create VM in azure.", date: "Jul 12, 2025", readTime: "9 min read", tags: ["VM", "Azure", "Cloud"], image: "https://placehold.co/300x200/1e2749/ffffff?text=Blog" }, { title: "How to Access Your Ubuntu VM from Windows or Ubuntu (Beginner-Friendly Guide)", excerpt: "Learn how to access your Ubuntu VM", date: "JUl 14, 2025", readTime: "6 min read", tags: ["VM", "Azure", "Cloud"], image: "https://placehold.co/300x200/1e2749/ffffff?text=Blog" }, ];

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
                            {/* <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} /> */}
                        </h1>
                        <h2>Electronics Graduate | React Developer | Cloud Enthusiast</h2>
                        <p className="hero-description">Final year ECE student with a passion for embedded systems, web development, and innovative technology solutions.</p>
                        <div className="hero-buttons">
                            <a href="#contact" className="flat-button" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>GET IN TOUCH</a>
                            <a href="/resume.pdf" className="flat-button secondary" download><FontAwesomeIcon icon={faDownload} /> DOWNLOAD CV</a>
                        </div>
                    </div>
                </section>
                
                <section id="about" className="about-section">
                    <div className="container">
                        <div className="section-header"><h2>About Me</h2></div>
                        <div className="about-content">
                            <div className="about-text">
                                <p>I'm a final year Electronics & Communication Engineering student at IOE, Tribhuvan University. My journey combines the precision of hardware engineering with the creativity of software development.</p>
                                <div className="education-info"><h3><FontAwesomeIcon icon={faGraduationCap} /> Education</h3><div className="education-item"><h4>BE in Electronics, Communication and Information Engineering</h4><p>Institute of Engineering, Tribhuvan University (2021-2025)</p><span className="merit">Merit Scholarship Recipient</span></div></div>
                            </div>
                            <div className="about-image"><div className="image-container"><img src="https://placehold.co/400x500/0a192f/ffd700?text=Mandakini" alt="Mandakini Sapkota" /></div></div>
                        </div>
                    </div>
                </section>
                <section id="skills" className="skills-section">
                    <div className="container">
                        <div className="section-header"><h2>Skills & Technologies</h2></div>
                        <div className="skills-grid">{skills.map((skill, index) => (<div key={index} className="skill-item"><div className="skill-icon"><FontAwesomeIcon icon={skill.icon} /></div><h3>{skill.name}</h3><span className="skill-category">{skill.category}</span><div className="skill-bar"><div className="skill-progress" style={{ width: `${skill.level}%` }}></div></div><span className="skill-percentage">{skill.level}%</span></div>))}</div>
                    </div>
                </section>
                <section id="projects" className="projects-section">
                    <div className="container">
                        <div className="section-header"><h2>Featured Projects</h2></div>
                        <div className="projects-grid">{projects.map((project, index) => (<div key={index} className="project-card"><div className="project-image"><img src={project.image} alt={project.title} /><div className="project-type">{project.type}</div><div className="project-overlay"><div className="project-links"><a href={project.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a><a href={project.live} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} /></a></div></div></div><div className="project-content"><h3>{project.title}</h3><p>{project.description}</p><div className="project-technologies">{project.technologies.map((tech, techIndex) => (<span key={techIndex} className="tech-tag">{tech}</span>))}</div></div></div>))}</div>
                    </div>
                </section>
                <section id="events" className="events-section">
                    <div className="container">
                        <div className="section-header"><h2>Events & Leadership</h2></div>
                        <div className="events-timeline">{events.map((event, index) => (<div key={index} className="event-card"><div className="event-image"><img src={event.image} alt={event.title} /></div><div className="event-content"><div className="event-header"><div className="event-meta"><span className="event-date"><FontAwesomeIcon icon={faCalendarAlt} /> {event.date}</span><span className="event-location"><FontAwesomeIcon icon={faMapMarkerAlt} /> {event.location}</span></div><h3>{event.title}</h3><div className="event-role"><FontAwesomeIcon icon={getRoleIcon(event.type)} /> {event.role}</div></div><p className="event-description">{event.description}</p></div></div>))}</div>
                    </div>
                </section>
                <section id="achievements" className="achievements-section">
                    <div className="container">
                        <div className="section-header"><h2>Achievements</h2></div>
                        <div className="achievements-grid">{achievements.map((achievement, index) => (<div key={index} className="achievement-card"><div className="achievement-icon"><FontAwesomeIcon icon={achievement.icon} /></div><div className="achievement-content"><span className="achievement-year">{achievement.year}</span><h3>{achievement.title}</h3><p>{achievement.description}</p></div></div>))}</div>
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
                <section id="blog" className="blog-section">
                    <div className="container">
                        <div className="section-header"><h2>Latest Blog Posts</h2></div>
                        <div className="blog-grid">{blogPosts.map((post, index) => (<article key={index} className="blog-card"><div className="blog-image"><img src={post.image} alt={post.title} /></div><div className="blog-content"><h3>{post.title}</h3><p>{post.excerpt}</p><a href="https://medium.com/@mandakini_yess" target="_blank" rel="noopener noreferrer" className="read-more">Read More <FontAwesomeIcon icon={faExternalLinkAlt} /></a></div></article>))}</div>
                    </div>
                </section>
                <section id="contact" className="contact-section">
                    <div className="container">
                        <div className="section-header"><h2>Let's Connect</h2></div>
                        <div className="contact-content">
                            <div className="contact-info">
                                <h3>Ready to collaborate!</h3>
                                <p>I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply chat about technology.</p>
                                <div className="contact-details"><div className="contact-item"><FontAwesomeIcon icon={faEnvelope} /> <span>mandakinisapkota@gmail.com</span></div>
                                {/* <div className="contact-item"><FontAwesomeIcon icon={faPhone} /> <span>+977 9846828621</span></div> */}
                                <div className="contact-item"><FontAwesomeIcon icon={faMapMarkerAlt} /> <span>Pokhara, Nepal</span></div></div>
                                <div className="social-links"><a href="https://github.com/Mandakini-S" target="_blank" rel="noopener noreferrer" title="GitHub"><FontAwesomeIcon icon={faGithub} /></a><a href="https://www.linkedin.com/in/mandakini-sapkota-945164232/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a><a href="#!" target="_blank" rel="noopener noreferrer" title="Medium"><FontAwesomeIcon icon={faMedium} /></a></div>
                            </div>
                            <div className="contact-form">
                                <form onSubmit={handleContactSubmit}><div className="form-group"><input type="text" placeholder="Your Name" required /></div><div className="form-group"><input type="email" placeholder="Your Email" required /></div><div className="form-group"><textarea placeholder="Your Message" rows="5" required></textarea></div><button type="submit" className="flat-button"><FontAwesomeIcon icon={faEnvelope} /> Send Message</button></form>
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
