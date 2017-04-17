import React from 'react';
import pkg from 'package.json';
import styles from './styles.css';

export default () => <h1>
    Signal 
    <span className='app--version text--normal'>v{pkg.version}</span>
    </h1>;
