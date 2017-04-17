import React from 'react';

import Button from 'components/Button';
import Select from 'components/Select';
import Input from 'components/Input';
import URL from 'components/URL';

import styles from './styles.css';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];


class Entry extends React.Component {
  constructor() {
    super();
    this.address = 'http://www.google.com';
  }
  onAddToSchedule () {

  }

  render () {
    return (
      <div>
        <URL address={this.address} />
        <form className="entry">
          <Input 
            name="at" 
            title="At"
            required
            type="time"
            placeholder="08:15"
          />
          <Select 
            name="every"
            title="Every"
            options={days}
            required
          />
          <Button 
            title="Keep Tab" 
            onClick={this.onAddToSchedule}
          />
        </form>
      </div>
    );
  }
}

export default Entry;