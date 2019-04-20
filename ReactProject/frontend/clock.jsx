import React from 'react';

export class Clock extends React.Component {
  constructor () {
    super();
    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
    
    
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick(); 
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return (
      <div className="clock-container">
        <h1 className="clock-head">Clock Motherfuckas</h1>
        <h1 className="clock">{this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}