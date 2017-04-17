import React from 'react';

export default ({name, title, type, onChange}) => (
  <div className="entry--field">
    <label 
      htmlFor={name}>
      {title}
    </label>
    <input 
      type={type}
      name={name}
      onChange={onChange}
    />
  </div>
);
