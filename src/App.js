import React, { Component } from 'react';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import Event from './Event';

//style
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<CitySearch />
				<NumberOfEvents />
				<EventList />
				<Event />
			</div>
		);
	}
}

export default App;
