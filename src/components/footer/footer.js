import React from 'react';
import './footer.scss';

const translations = {
  portuguese: {
    contactInfoTitle: 'Informações de Contato',
    email: 'seuemail@example.com',
    phone: '+55 123456789',
    locationTitle: 'Localização',
    address: '123 Rua Exemplo, Cidade, Estado',
  },
  english: {
    contactInfoTitle: 'Contact Information',
    email: 'youremail@example.com',
    phone: '+55 123456789',
    locationTitle: 'Location',
    address: '123 Example Street, City, State',
  },
};

const Footer = ({ language }) => {
  const { contactInfoTitle, email, phone, locationTitle, address } = translations[language];

  return (
    <footer className="Footer">
      <div className="ContactInfo">
        <h3>{contactInfoTitle}</h3>
        <p>Email: {email}</p>
        <p>Telefone: {phone}</p>
      </div>
      <div className="Location">
        <h3>{locationTitle}</h3>
        <p>{address}</p>
      </div>
    </footer>
  );
};

export default Footer;
