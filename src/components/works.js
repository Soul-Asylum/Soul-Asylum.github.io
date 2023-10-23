import React from 'react';

const Works = ({ language }) => {
  return (
    <section className="Works">
      <h2>{language === 'portuguese' ? 'Projetos' : 'Projects'}</h2>
      {/* Lista de projetos anteriores com links para demonstrações ou repositórios */}
    </section>
  );
};

export default Works;
