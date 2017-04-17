import React from 'react';

export default ({options, title, name}) => (
  <div className="entry--field">
    <label>{title}</label>
    <select name={name}>
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
