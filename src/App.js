import React, { Suspense, lazy, useState } from 'react';
import './App.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = lazy(() => import('./components/aboutMe/aboutMe'));
const Works = lazy(() => import('./components/works'));
const UtilLinks = lazy(() => import('./components/utilLinks/utilLinks'));
const Arrive = lazy(() => import('./components/arrive'));

function App() {
  const [language, setLanguage] = useState('portuguese'); 

  const handleLanguageChange = (selectedLanguage) => {
    if (selectedLanguage === 'portuguese' || selectedLanguage === 'english') {
      setLanguage(selectedLanguage);
    }
  };  
  
  return (
    <div className="App">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <div className="Content">
        <Suspense fallback={<div>Carregando...</div>}>
          <Arrive language={language} />
          <About language={language} />
          <Works language={language} />
        </Suspense>
      </div>
      <div className='footer-div'>
        <UtilLinks />
        <Footer language={language} />
      </div>
    </div>
  );
}

export default App;
