import React, { useState, useEffect } from 'react';
import brazilFlag from './brazil.png';
import usaFlag from './usa.png'; 
import './header.scss';
  
const translations = {
  portuguese: {
    languageSelector: 'Idioma',
    aboutText: 'Sobre',
    projectsText: 'Projetos',
    contactText: 'Contato',

  },
  english: {
    languageSelector: 'Language',
    aboutText: 'About',
    projectsText: 'Projects',
    contactText: 'Contact',
  },
};

const Header = ({ language, onLanguageChange }) => {
  const audioSource = process.env.PUBLIC_URL + '/8d82b5_Star_Wars_The_Imperial_March_Theme_Song.mp3';
  const [showDropdown, setShowDropdown] = useState(false);
  const { languageSelector, aboutText, projectsText, contactText } = translations[language];

  useEffect(() => {
    const embed = document.createElement('embed');
    embed.src = audioSource;
    embed.setAttribute('hidden', true);
    document.body.appendChild(embed);
  }, [audioSource]);

  const handleLanguageChange = (selectedLanguage) => {
    if (selectedLanguage === 'portuguese' || selectedLanguage === 'english') {
      onLanguageChange(selectedLanguage);
    }
  };

  return (
    <header className="Header">
      <div className="Header-left">
        <a href="#top">
          <i className="fa-sharp fa-solid fa-code"></i>
        </a>
        <div className="Language-dropdown" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
           <span>{languageSelector}</span>
           {showDropdown && (
             <div className="Dropdown-content">
                <img src={brazilFlag} className= 'brazil-flag' alt="Brazil Flag" onClick={() => handleLanguageChange('portuguese')} />
                <img src={usaFlag} className='usa-flag' alt="USA Flag" onClick={() => handleLanguageChange('english')} />
             </div>
           )}
        </div>
      </div>
      <div className="Header-center">
        <audio hidden controls>
          <source src={audioSource} type="audio/mpeg" />
        </audio>
      </div>
      <div className="Header-right">
        <a href="#about">{aboutText}</a>
        <a href="#works">{projectsText}</a>
        <a href="#contact">{contactText}</a>
      </div>
    </header>
  );
};

export default Header;
