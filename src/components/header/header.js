import React from 'react';
import './styles.css';

const Header = ({name, description}) => {
  return (
    <div className="col-12 header">
      <div id="nameContainer"><p className="animatedText" data-value={name}>{name}</p></div>
      <h5 className="animatedText" data-value={description}>{description}</h5>
    </div>
  );
}


export default Header;