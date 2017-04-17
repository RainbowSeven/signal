import React from 'react';

export default ({title, onClick}) => (
  <button type="submit" className="entry--btn" onClick={onClick}>
    { title }
  </button>
);