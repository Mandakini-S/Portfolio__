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
  faBookOpen,
  faCalendarCheck,
  faMicrophone,
  faUsers,
  faPalette,
  faTools,
  faHandshake,
  faEdit,
  faAward
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

  const events = [
    {
      title: "EthosHack - National Hackathon",
      role: "Software Manager & Organizer",
      date: "2024",
      location: "Pashchimanchal Campus",
      type: "Organizer",
      description: "Led the technical aspects of a national hackathon, overseeing GitHub repositories and providing real-time technical support to participants. Designed certificates, ID cards, and social media posts despite limited timeframe.",
      responsibilities: [
        "Managed GitHub repositories for all participating teams",
        "Provided real-time technical support to 100+ participants",
        "Designed certificates, ID cards, and promotional materials",
        "Created and scheduled social media content"
      ],
      skills: ["Event Management", "Git/GitHub", "Design", "Content Writing"],
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200"]
    },
    {
      title: "Sagarmatha Hacktoberfest 2023",
      role: "Lead Graphics Designer & Organizer",
      date: "October 2023",
      location: "Nepal",
      type: "Organizer",
      description: "Spearheaded the visual identity and promotional strategy for Hacktoberfest 2023, creating engaging designs that significantly boosted event participation and community engagement.",
      responsibilities: [
        "Designed promotional banners, posters, and social media graphics",
        "Created cohesive visual identity for the event",
        "Managed tight deadlines with multiple design deliverables",
        "Collaborated with organizing team for event coordination"
      ],
      skills: ["Graphic Design", "Adobe Creative Suite", "Event Branding", "Social Media"],
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200"]
    },
    {
      title: "ICON Vol. 7 - Student Research Journal",
      role: "Editor in Chief",
      date: "2023",
      location: "Pashchimanchal Campus",
      type: "Leadership",
      description: "Led the editorial process for ICON (ISSN: 2645-8365), a prestigious student research journal, ensuring high-quality academic publication standards.",
      responsibilities: [
        "Designed entire publication using Adobe InDesign",
        "Led content selection and curation process",
        "Maintained high editorial standards for grammar and style",
        "Coordinated with authors and review committee"
      ],
      skills: ["Editorial Leadership", "Adobe InDesign", "Academic Writing", "Publication Design"],
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/300/200", "/api/placeholder/300/200"]
    },
    {
      title: "ICES Society Vice President",
      role: "Vice President",
      date: "April 2023 - May 2024",
      location: "Pashchimanchal Campus",
      type: "Leadership",
      description: "Served as Vice President of Innovative Computer Engineering Students' Society, leading initiatives to bridge academia and industry while fostering student development.",
      responsibilities: [
        "Coordinated executive meetings and strategic planning",
        "Fostered industry partnerships for internship opportunities",
        "Organized technical workshops and hackathons",
        "Enhanced member engagement and participation"
      ],
      skills: ["Leadership", "Event Management", "Industry Relations", "Team Coordination"],
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200"]
    },
    {
      title: "Talk with Tech Leaders",
      role: "Event Coordinator",
      date: "2023",
      location: "Pashchimanchal Campus",
      type: "Coordinator",
      description: "Coordinated a one-day event bringing together industry leaders and students, facilitating knowledge sharing and networking opportunities.",
      responsibilities: [
        "Organized event logistics and scheduling",
        "Coordinated with tech industry speakers",
        "Developed promotional materials and strategies",
        "Managed on-site event execution"
      ],
      skills: ["Event Coordination", "Speaker Management", "Promotion", "Logistics"],
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/300/200", "/api/placeholder/300/200"]
    },
    {
      title: "15th IOE Graduate Conference",
      role: "Master of Ceremony",
      date: "2023",
      location: "Institute of Engineering",
      type: "Participant",
      description: "Served as Master of Ceremony for the prestigious IOE Graduate Conference, ensuring smooth event flow and professional presentation.",
      responsibilities: [
        "Coordinated event flow and timeline management",
        "Introduced speakers and managed transitions",
        "Maintained professional atmosphere throughout conference",
        "Handled unexpected situations with composure"
      ],
      skills: ["Public Speaking", "Event Management", "Communication", "Time Management"],
      image: "/api/placeholder/400/300",
      gallery: ["/api/placeholder/300/200", "/api/placeholder/300/200"]
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
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const getRoleIcon = (type) => {
    switch(type) {
      case 'Organizer': return faTools;
      case 'Leadership': return faUsers;
      case 'Coordinator': return faHandshake;
      case 'Participant': return faUser;
      default: return faCalendarCheck;
    }
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

        {/* Events Section */}
        <section id="events" className="events-section">
          <div className="container">
            <div className="section-header">
              <h2>Events & Leadership</h2>
              <div className="section-line"></div>
              <p>My journey in organizing, leading, and participating in tech events</p>
            </div>
            <div className="events-timeline">
              {events.map((event, index) => (
                <div key={index} className="event-card">
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                    <div className="event-type">
                      <FontAwesomeIcon icon={getRoleIcon(event.type)} />
                      {event.type}
                    </div>
                  </div>
                  <div className="event-content">
                    <div className="event-header">
                      <div className="event-meta">
                        <span className="event-date">
                          <FontAwesomeIcon icon={faCalendarAlt} />
                          {event.date}
                        </span>
                        <span className="event-location">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                          {event.location}
                        </span>
                      </div>
                      <h3>{event.title}</h3>
                      <div className="event-role">
                        <FontAwesomeIcon icon={faAward} />
                        {event.role}
                      </div>
                    </div>
                    
                    <p className="event-description">{event.description}</p>
                    
                    <div className="event-responsibilities">
                      <h4>Key Responsibilities:</h4>
                      <ul>
                        {event.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="event-skills">
                      <h4>Skills Developed:</h4>
                      <div className="skills-tags">
                        {event.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                    
                    {event.gallery && (
                      <div className="event-gallery">
                        <h4>Event Gallery:</h4>
                        <div className="gallery-grid">
                          {event.gallery.map((photo, photoIndex) => (
                            <img key={photoIndex} src={photo} alt={`${event.title} photo ${photoIndex + 1}`} />
                          ))}
                        </div>
                      </div>
                    )}
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