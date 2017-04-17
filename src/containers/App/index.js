import React from 'react';
import styles from './styles.css';
import Header from 'components/Header';
import Entry from 'containers/Entry';

class App extends React.Component {
  render() {
    return (
      <div className='box'>
        <Header />
        <Entry />
      </div>
    );
  }
}

export default App;