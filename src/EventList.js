import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
	state = {
		events: [],
	};

	render() {
		return (
			<div className="EventList">
				{this.state.events.map((event) => (
					<li key={event.id}>
						<Event event={event} />
					</li>
				))}
			</div>
		);
	}
}

export default EventList;
