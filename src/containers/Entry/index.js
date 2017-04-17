import React from 'react';

import Button from 'components/Button';
import Select from 'components/Select';
import Input from 'components/Input';
import URL from 'components/URL';

import styles from './styles.css';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];


class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      every: 'Sunday',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      if (tabs.length) {
        this.setState({address: tabs[0].url});
      }
    });

    chrome.alarms.onAlarm.addListener((alarm) => {
      chrome.tabs.create({url: alarm.name}, tab => {
        // TODO: track tab id.
      });
    });
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit (event) {
    // Schedule this.
    const every = this.state.every;
    const name = this.state.address;
    const at = this.state.at;

    // get today's date.
    const UTCMonthOffset = 1;
    const nowDate = new Date();
    const nowJSON = nowDate.toJSON();
    const nowParts = nowJSON.split('T');
    const nowDateParts = nowParts[0].split('-');
    const timezoneOffset = nowDate.getTimezoneOffset() / 60;
    
    let [year, month, day] = nowDateParts;
    let [hour, minute] = at.split(':');
    let when = undefined;


    // TODO: refine this walkthrough.
    let increment = 0; 
    let userDayIndex = days.indexOf(every);
    let nowDayIndex = nowDate.getDay();

    if (nowDayIndex !== userDayIndex) {
      while (true) {
        nowDayIndex++;
        increment++;
        if (nowDayIndex === 7) {
          nowDayIndex = 0;
        }
        if (userDayIndex === nowDayIndex) {
          break;
        }
      }
    }
    //adjust hours for GMT
    when = new Date(Date.UTC(year, month-UTCMonthOffset, parseInt(day)+increment, parseInt(hour)+timezoneOffset, minute));

    const alarmInfo = {
      when,
      periodInMinutes: 7 * 24 * 60,
    }

    chrome.alarms.create(address, alarmInfo);
    event.preventDefault();
  }

  render () {
    const {address} = this.state;
    return (
      <div>
        <URL address={ address } />
        <form 
          className="entry" 
          onSubmit={this.handleSubmit}
        >
          <Input 
            name="at" 
            title="At"
            required
            type="time"
            placeholder="08:15"
            onChange={this.handleChange}
          />
          <Select 
            name="every"
            title="Every"
            options={days}
            required
            onChange={this.handleChange}
          />
          <Button 
            title="Keep Tab"
          />
        </form>
      </div>
    );
  }
}

export default Entry;