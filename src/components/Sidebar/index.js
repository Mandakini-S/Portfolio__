import React, { useState, useEffect } from 'react'
import './index.scss'
import LogoS from '../../assets/images/MS_logo-07.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPenNib, faUser, faCode, faEnvelope, faBars, faTimes, faTrophy, faBlog } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faMedium} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'achievements', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='nav-bar'>
        <a className='logo' href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
            <img src={LogoS} alt="Mandakini Sapkota Logo" />
        </a>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </div>

        <nav className={isMobileMenuOpen ? 'mobile-show' : ''}>
            <a 
              href="#hero" 
              className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
              title="Home"
            >
                <FontAwesomeIcon icon={faHome} color="4d4d4e" />
            </a>

            <a 
              href="#about" 
              className={`nav-link about-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              title="About"
            >
                <FontAwesomeIcon icon={faUser} color="4d4d4e" />
            </a>

            <a 
              href="#skills" 
              className={`nav-link skills-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
              title="Skills"
            >
                <FontAwesomeIcon icon={faCode} color="4d4d4e" />
            </a>

            <a 
              href="#projects" 
              className={`nav-link projects-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              title="Projects"
            >
                <FontAwesomeIcon icon={faPenNib} color="4d4d4e" />
            </a>

            <a 
              href="#achievements" 
              className={`nav-link achievements-link ${activeSection === 'achievements' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('achievements'); }}
              title="Achievements"
            >
                <FontAwesomeIcon icon={faTrophy} color="4d4d4e" />
            </a>

            <a 
              href="#blog" 
              className={`nav-link blog-link ${activeSection === 'blog' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('blog'); }}
              title="Blog"
            >
                <FontAwesomeIcon icon={faBlog} color="4d4d4e" />
            </a>

            <a 
              href="#contact" 
              className={`nav-link contact-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              title="Contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
            </a>
        </nav>

        <ul> 
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mandakini-sapkota-945164232/" title="LinkedIn"> 
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" /> 
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/Mandakini-S" title="GitHub"> 
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" /> 
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="#" title="Medium"> 
                    <FontAwesomeIcon icon={faMedium} color="#4d4d4e" /> 
                </a>
            </li>
        </ul>
    </div>
  );
};

export default Sidebar