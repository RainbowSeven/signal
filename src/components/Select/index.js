import React from 'react';

export default ({options, title, name, onChange, required, defaultValue}) => (
  <div className="entry--field">
    <label htmlFor={name}>{title}</label>
    <select 
      name={name}
      onChange={onChange}
      required={required}
      defaultValue={defaultValue}
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
