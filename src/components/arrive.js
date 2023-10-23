import React from 'react';

const Arrive = ({ language }) => {
  return (
    <div className="Arrive">
      <header className="Arrive-header">
        <h1>{language === 'portuguese' ? 'Bem-vindo ao meu Portfolio!' : 'Welcome to my Portfolio!'}</h1>
        <p>{language === 'portuguese' ? 'Meu nome é Guilherme e eu sou um Desenvolvedor Front-end.' : 'My name is Guilherme and I am a Front-end Developer.'}</p>
      </header>
    </div>
  );
};

export default Arrive;
