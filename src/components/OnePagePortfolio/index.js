import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faCss3, 
  faJsSquare, 
  faReact, 
  faNodeJs, 
  faGitAlt,
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faMapMarkerAlt, 
  faPhone,
  faDownload,
  faExternalLinkAlt,
  faCode,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';

const OnePagePortfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const nameArray = ['M', 'a', 'n', 'd', 'a', 'k', 'i', 'n', 'i'];
  const jobArray = ['F', 'u', 'l', 'l', ' ', 'S', 't', 'a', 'c', 'k', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      live: "#",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Socket.io", "PostgreSQL", "Node.js"],
      github: "#",
      live: "#",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather and forecasts using external APIs with beautiful data visualizations.",
      technologies: ["JavaScript", "Chart.js", "REST APIs", "CSS3"],
      github: "#",
      live: "#",
      image: "/api/placeholder/400/250"
    }
  ];

  const skills = [
    { name: "HTML5", icon: faHtml5, level: 95 },
    { name: "CSS3", icon: faCss3, level: 90 },
    { name: "JavaScript", icon: faJsSquare, level: 85 },
    { name: "React", icon: faReact, level: 88 },
    { name: "Node.js", icon: faNodeJs, level: 80 },
    { name: "Git", icon: faGitAlt, level: 85 }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    // For now, we'll just show an alert
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <>
      <div className="one-page-portfolio">
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img src="/logo.svg" alt="developer" />
              <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
              <br />
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
            </h1>
            <h2>Frontend Developer / JavaScript Expert / Youtuber</h2>
            <div className="hero-buttons">
              <a href="#contact" className="flat-button">CONTACT ME</a>
              <a href="/resume.pdf" className="flat-button secondary" download>
                <FontAwesomeIcon icon={faDownload} /> DOWNLOAD CV
              </a>
            </div>
          </div>
          <div className="scroll-indicator">
            <span>Scroll Down</span>
            <div className="scroll-arrow"></div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="container">
            <div className="section-header">
              <h2>About Me</h2>
              <div className="section-line"></div>
            </div>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I'm a passionate Full Stack Developer with over 3 years of experience creating 
                  digital solutions that make a difference. I specialize in modern web technologies 
                  and love turning complex problems into simple, beautiful designs.
                </p>
                <p>
                  My journey in web development started with a curiosity about how websites work, 
                  and it has evolved into a career where I get to build amazing digital experiences 
                  every day. I'm always eager to learn new technologies and take on challenging projects.
                </p>
                <div className="about-stats">
                  <div className="stat">
                    <h3>50+</h3>
                    <p>Projects Completed</p>
                  </div>
                  <div className="stat">
                    <h3>3+</h3>
                    <p>Years Experience</p>
                  </div>
                  <div className="stat">
                    <h3>25+</h3>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
              <div className="about-image">
                <div className="image-container">
                  <img src="/api/placeholder/400/500" alt="About me" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <div className="container">
            <div className="section-header">
              <h2>Skills & Technologies</h2>
              <div className="section-line"></div>
            </div>
            <div className="skills-content">
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-icon">
                      <FontAwesomeIcon icon={skill.icon} />
                    </div>
                    <h3>{skill.name}</h3>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="container">
            <div className="section-header">
              <h2>Featured Projects</h2>
              <div className="section-line"></div>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="section-header">
              <h2>Get In Touch</h2>
              <div className="section-line"></div>
            </div>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Let's work together!</h3>
                <p>
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, I'll try my best 
                  to get back to you!
                </p>
                <div className="contact-details">
                  <div className="contact-item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>mandakini@example.com</span>
                  </div>
                  <div className="contact-item">
                    <FontAwesomeIcon icon={faPhone} />
                    <span>+977 9876543210</span>
                  </div>
                  <div className="contact-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Kathmandu, Nepal</span>
                  </div>
                </div>
                <div className="social-links">
                  <a href="https://github.com/Mandakini-S" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://www.linkedin.com/in/mandakini-sapkota-945164232/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="https://twitter.com/mandakini_09/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
              <div className="contact-form">
                <form onSubmit={handleContactSubmit}>
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Subject" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="flat-button">
                    <FontAwesomeIcon icon={faEnvelope} /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button className="scroll-to-top" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        )}
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default OnePagePortfolio;