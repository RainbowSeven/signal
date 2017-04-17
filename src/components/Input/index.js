import React from 'react';

export default ({name, title, type}) => (
  <div className="entry--field">
    <label 
      for={name}>
      {title}
    </label>
    <input 
      type={type}
      name={name}
    />
  </div>
);
