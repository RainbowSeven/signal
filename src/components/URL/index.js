import React from  'react';

import styles from  './styles.css';

export default ({address}) => (
  <div className='bar'>
    <div className='bar--label'>Open</div>
    <div className='bar--raised'>{ address }</div>
  </div>
);
