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
  faTwitter,
  faMedium,
  faAws,
  faDocker,
  faLinux
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faMapMarkerAlt, 
  faPhone,
  faDownload,
  faExternalLinkAlt,
  faCode,
  faArrowUp,
  faMicrochip,
  faWifi,
  faDatabase,
  faGraduationCap,
  faTrophy,
  faBlog,
  faCalendarAlt,
  faUser,
  faBookOpen
} from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';

const OnePagePortfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const nameArray = ['M', 'a', 'n', 'd', 'a', 'k', 'i', 'n', 'i'];
  const jobArray = ['E', 'C', 'E', ' ', 'S', 't', 'u', 'd', 'e', 'n', 't', ' ', '&', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

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
      title: "Non-Invasive Glucose Monitoring System",
      description: "Final year project implementing Near-Infrared (NIR) technique for glucose monitoring with mobile app integration. Combines hardware design with software development.",
      technologies: ["NIR Technology", "Mobile App", "Embedded Systems", "Signal Processing"],
      github: "#",
      live: "#",
      image: "/api/placeholder/400/250",
      type: "Hardware + Software"
    },
    {
      title: "Self-Checkout System in Library using NFC",
      description: "An innovative library management system using NFC technology for automated book checkout and return processes.",
      technologies: ["NFC", "Database", "System Design", "IoT"],
      github: "https://github.com/Mandakini-S/Self-checkout-system-in-Library",
      live: "#",
      image: "/api/placeholder/400/250",
      type: "IoT Project"
    },
    {
      title: "Hospital Management System (CareConnect)",
      description: "Comprehensive database development for hospital management with patient records, appointment scheduling, and staff management.",
      technologies: ["Database Design", "MySQL", "System Architecture"],
      github: "https://github.com/Mandakini-S/Careconnect_hms",
      live: "#",
      image: "/api/placeholder/400/250",
      type: "Database Project"
    },
    {
      title: "SubhaYatra - BIC Hackathon Winner",
      description: "Award-winning travel application that won BIC Hackathon V 3.0. Focused on frontend development and user experience design.",
      technologies: ["React.js", "Frontend", "UI/UX", "Collaboration"],
      github: "https://github.com/Mandakini-S/ShubaYatra",
      live: "#",
      image: "/api/placeholder/400/250",
      type: "Hackathon Winner"
    },
    {
      title: "VHDL Programming Projects",
      description: "Collection of VHDL programming projects demonstrating digital system design and hardware description language skills.",
      technologies: ["VHDL", "Digital Design", "FPGA", "Hardware"],
      github: "https://github.com/Mandakini-S/VHDL_CODE",
      live: "#",
      image: "/api/placeholder/400/250",
      type: "Hardware Design"
    }
  ];

  const skills = [
    { name: "React.js", icon: faReact, level: 85, category: "Frontend" },
    { name: "C/C++", icon: faCode, level: 90, category: "Programming" },
    { name: "VHDL", icon: faMicrochip, level: 80, category: "Hardware" },
    { name: "Git/GitHub", icon: faGitAlt, level: 88, category: "Tools" },
    { name: "AWS Cloud", icon: faAws, level: 75, category: "Cloud" },
    { name: "MySQL/PostgreSQL", icon: faDatabase, level: 82, category: "Database" },
    { name: "Docker", icon: faDocker, level: 70, category: "DevOps" },
    { name: "Linux", icon: faLinux, level: 78, category: "OS" },
    { name: "IoT & Embedded", icon: faWifi, level: 85, category: "Hardware" }
  ];

  const achievements = [
    {
      title: "IOE Merit Scholarship",
      description: "Institute of Engineering, Tribhuvan University Merit Scholarship recipient (2021-2025)",
      icon: faGraduationCap,
      year: "2021-2025"
    },
    {
      title: "BIC Hackathon V 3.0 Winner",
      description: "Won with 'SubhaYatra' project, contributing to idea curation, data collection, and frontend development",
      icon: faTrophy,
      year: "2024"
    },
    {
      title: "Top 60 Consistent Learner",
      description: "Selected as one of top 60 learners out of 165 in Leapfrog Technology's 60-day learning challenge",
      icon: faBookOpen,
      year: "2024"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      description: "Successfully obtained AWS Cloud Practitioner certification (CLF-C02)",
      icon: faAws,
      year: "2024"
    }
  ];

  const blogPosts = [
    {
      title: "Getting Started with VHDL Programming",
      excerpt: "A beginner's guide to VHDL programming for digital system design and FPGA development...",
      date: "2024-03-15",
      readTime: "5 min read",
      tags: ["VHDL", "Hardware", "FPGA"],
      image: "/api/placeholder/300/200"
    },
    {
      title: "Building IoT Projects with NFC Technology",
      excerpt: "Learn how to implement NFC technology in IoT projects, from library systems to smart applications...",
      date: "2024-02-28",
      readTime: "8 min read",
      tags: ["IoT", "NFC", "Embedded"],
      image: "/api/placeholder/300/200"
    },
    {
      title: "My Journey to AWS Cloud Practitioner Certification",
      excerpt: "Tips and resources that helped me pass the AWS Cloud Practitioner exam and kickstart my cloud journey...",
      date: "2024-01-20",
      readTime: "6 min read",
      tags: ["AWS", "Cloud", "Certification"],
      image: "/api/placeholder/300/200"
    },
    {
      title: "React.js Best Practices for Students",
      excerpt: "Essential React.js patterns and practices I learned during my mentorship program and projects...",
      date: "2024-01-10",
      readTime: "7 min read",
      tags: ["React", "Frontend", "JavaScript"],
      image: "/api/placeholder/300/200"
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
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
            <h2>Electronics & Communication Engineering Student | React Developer | Tech Enthusiast</h2>
            <p className="hero-description">
              Final year ECE student at IOE, Tribhuvan University with passion for embedded systems, 
              web development, and innovative technology solutions.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="flat-button">GET IN TOUCH</a>
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
                  I'm a final year Electronics & Communication Engineering student at Institute of Engineering, 
                  Tribhuvan University, Pashchimanchal Campus. My journey combines the precision of hardware 
                  engineering with the creativity of software development.
                </p>
                <p>
                  From designing non-invasive glucose monitoring systems using NIR technology to developing 
                  React applications, I love bridging the gap between hardware and software. I'm passionate 
                  about IoT, embedded systems, and creating technology solutions that make a real impact.
                </p>
                <div className="education-info">
                  <h3><FontAwesomeIcon icon={faGraduationCap} /> Education</h3>
                  <div className="education-item">
                    <h4>BE in Electronics, Communication and Information Engineering</h4>
                    <p>Institute of Engineering, Tribhuvan University (2021-2025)</p>
                    <span className="merit">Merit Scholarship Recipient</span>
                  </div>
                </div>
                <div className="about-stats">
                  <div className="stat">
                    <h3>15+</h3>
                    <p>Projects Completed</p>
                  </div>
                  <div className="stat">
                    <h3>3+</h3>
                    <p>Years Learning</p>
                  </div>
                  <div className="stat">
                    <h3>5+</h3>
                    <p>Certifications</p>
                  </div>
                </div>
              </div>
              <div className="about-image">
                <div className="image-container">
                  <img src="/api/placeholder/400/500" alt="Mandakini Sapkota" />
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
                    <span className="skill-category">{skill.category}</span>
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
                    <div className="project-type">{project.type}</div>
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

        {/* Achievements Section */}
        <section id="achievements" className="achievements-section">
          <div className="container">
            <div className="section-header">
              <h2>Achievements & Recognition</h2>
              <div className="section-line"></div>
            </div>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">
                    <FontAwesomeIcon icon={achievement.icon} />
                  </div>
                  <div className="achievement-content">
                    <span className="achievement-year">{achievement.year}</span>
                    <h3>{achievement.title}</h3>
                    <p>{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="blog-section">
          <div className="container">
            <div className="section-header">
              <h2>Latest Blog Posts</h2>
              <div className="section-line"></div>
              <p>Sharing my learning journey and technical insights</p>
            </div>
            <div className="blog-grid">
              {blogPosts.map((post, index) => (
                <article key={index} className="blog-card">
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} />
                    <div className="blog-date">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                  <div className="blog-content">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="blog-meta">
                      <span className="read-time">{post.readTime}</span>
                      <div className="blog-tags">
                        {post.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="blog-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <a href="#" className="read-more">
                      Read More <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="blog-cta">
              <a href="#" className="flat-button">
                <FontAwesomeIcon icon={faBlog} /> View All Posts
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="section-header">
              <h2>Let's Connect</h2>
              <div className="section-line"></div>
            </div>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Ready to collaborate!</h3>
                <p>
                  I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                  or simply chat about technology. Whether it's about embedded systems, web development, 
                  or innovative tech solutions, let's connect!
                </p>
                <div className="contact-details">
                  <div className="contact-item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>mandakinisapkota@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <FontAwesomeIcon icon={faPhone} />
                    <span>+977 9846828621</span>
                  </div>
                  <div className="contact-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Pokhara, Nepal</span>
                  </div>
                </div>
                <div className="social-links">
                  <a href="https://github.com/Mandakini-S" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://www.linkedin.com/in/mandakini-sapkota-945164232/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" title="Medium">
                    <FontAwesomeIcon icon={faMedium} />
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