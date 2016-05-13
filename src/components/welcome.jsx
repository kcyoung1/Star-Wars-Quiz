import React from 'react';
import {browserHistory} from 'react-router';

import Timer from './timer.jsx';
import Quiz from './testscreen.jsx';


export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      }
  }
  _loadBeginButton() {
    browserHistory.push('/evaluation');
  }

  render() {
    return(<div className="entire-box">
            <button
            className="start-button"
            onClick={this._loadBeginButton.bind(this)}>
            Start Test
            </button>
      </div>)
  }
}