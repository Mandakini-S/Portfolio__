import React, { useState, useEffect } from 'react';
import './index.scss';
import LogoS from '../../assets/images/MS_logo-07.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faPenNib, faEnvelope, faBars, faTimes, faTrophy, faBlog, faCalendarCheck, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'events', 'achievements', 'certificates', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const createNavLink = (sectionId, icon, title) => (
    <a
      href={`#${sectionId}`}
      className={activeSection === sectionId ? 'active' : ''}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(sectionId);
      }}
      title={title}
    >
      <FontAwesomeIcon icon={icon} />
      <span className="nav-text">{title}</span>
    </a>
  );

  return (
    <>
      <div className='nav-bar'>
        <a className='logo' href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
          <img src={LogoS} alt="Logo" />
        </a>
        <nav>
          {createNavLink('hero', faHome, 'Home')}
          {createNavLink('about', faUser, 'About')}
          {createNavLink('skills', faCode, 'Skills')}
          {createNavLink('projects', faPenNib, 'Projects')}
          {createNavLink('events', faCalendarCheck, 'Events')}
          {createNavLink('achievements', faTrophy, 'Achievements')}
          {createNavLink('certificates', faCertificate, 'Certificates')}
          {createNavLink('blog', faBlog, 'Blog')}
          {createNavLink('contact', faEnvelope, 'Contact')}
        </nav>
        <ul>
          <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mandakini-sapkota-945164232/" title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://github.com/Mandakini-S" title="GitHub"><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a target="_blank" rel="noreferrer" href="#!" title="Medium"><FontAwesomeIcon icon={faMedium} /></a></li>
        </ul>
      </div>

      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </div>

      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          {createNavLink('hero', faHome, 'Home')}
          {createNavLink('about', faUser, 'About')}
          {createNavLink('skills', faCode, 'Skills')}
          {createNavLink('projects', faPenNib, 'Projects')}
          {createNavLink('events', faCalendarCheck, 'Events')}
          {createNavLink('achievements', faTrophy, 'Achievements')}
          {createNavLink('certificates', faCertificate, 'Certificates')}
          {createNavLink('blog', faBlog, 'Blog')}
          {createNavLink('contact', faEnvelope, 'Contact')}
        </nav>
      )}
    </>
  );
};

export default Sidebar;
