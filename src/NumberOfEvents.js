import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    ShownEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ ShownEvents: value });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          className="number"
          label="Number of Events"
          value={this.state.ShownEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
