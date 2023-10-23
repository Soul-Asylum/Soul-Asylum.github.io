import React from 'react';
import './aboutMe.scss';

const About = ({ language }) => {
  return (
    <section className="About">
      <h2>{language === 'portuguese' ? 'Sobre Mim' : 'About Me'}</h2>
      <p>
        {language === 'portuguese' ? (
          // Texto em português
          `Mussum Ipsum...`
        ) : (
          // Texto em inglês
          `Mussum Ipsum...`
        )}
      </p>
    </section>
  );
};

export default About;
