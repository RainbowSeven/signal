import React from 'react';

export default ({options, title, name, onChange}) => (
  <div className="entry--field">
    <label htmlFor={name}>{title}</label>
    <select 
      name={name}
      onChange={onChange}
    >
      {
        options.map(
          (opt, i) => (
          <option 
            key={i} 
            value={opt}
          >
            {opt}
          </option>)
        )
      }
    </select>
  </div>
);
