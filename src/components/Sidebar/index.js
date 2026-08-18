import React, { useState, useEffect } from 'react';
import './index.scss';
import LogoS from '../../assets/images/ms-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faPenNib, faEnvelope, faBars, faTimes, faTrophy, faBlog, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
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
      // The sections array still includes 'skills' to track its position
      const sections = ['hero', 'about', 'skills', 'projects', 'credentials', 'experience', 'events', 'blog', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = '';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element && scrollPosition >= element.offsetTop) {
          currentSection = sectionId;
        }
      }

     
      if (currentSection === 'skills') {
        setActiveSection('about');
      } else if (currentSection === 'events') {
        setActiveSection('experience');
      } else {
        setActiveSection(currentSection);
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
     
      className={
        activeSection === sectionId || 
        (sectionId === 'about' && activeSection === 'skills') ||
        (sectionId === 'experience' && activeSection === 'events') 
        ? 'active' : ''
      }
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
          <img src={LogoS} alt="Mandakini Sapkota" />
        </a>
        <nav>
          {createNavLink('hero', faHome, 'Home')}
          {createNavLink('about', faUser, 'About & Skills')}
          {createNavLink('projects', faPenNib, 'Projects')}
          {createNavLink('credentials', faTrophy, 'Credentials')}
          {createNavLink('experience', faCalendarCheck, 'Experience')}
          {createNavLink('blog', faBlog, 'Blog')}
          {createNavLink('contact', faEnvelope, 'Contact')}
        </nav>
        <ul>
          <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mandakini-sapkota-945164232/" title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://github.com/Mandakini-S" title="GitHub"><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://medium.com/@mandakini_yess" title="Medium"><FontAwesomeIcon icon={faMedium} /></a></li>
        </ul>
      </div>

      <header className="mobile-header">
        <a
          className="mobile-logo"
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          <img src={LogoS} alt="Mandakini Sapkota" />
        </a>
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>
      </header>

      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          {createNavLink('hero', faHome, 'Home')}
          {createNavLink('about', faUser, 'About & Skills')}
          {createNavLink('projects', faPenNib, 'Projects')}
          {createNavLink('credentials', faTrophy, 'Credentials')}
          {createNavLink('experience', faCalendarCheck, 'Experience')}
          {createNavLink('blog', faBlog, 'Blog')}
          {createNavLink('contact', faEnvelope, 'Contact')}
        </nav>
      )}
    </>
  );
};

export default Sidebar;