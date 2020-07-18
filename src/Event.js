import React, { Component } from 'react';

class Event extends Component {
	state = {
		event: {},
		showDetails: false,
	};

	handleShowDetails = () => {
		this.setState({ showDetails: true });
	};

	render() {
		const showDetails = this.state.showDetails;

		return (
			<div>
				<div className="event">
					<div className="eventName">{this.state.event.name}</div>
					<div className="eventDate">{this.state.event.local_date}</div>
					<button
						className="detailsButton"
						onClick={() => this.handleShowDetails()}>
						show details
					</button>
				</div>
				{showDetails && (
					<div className="eventDetails">
						<div className="eventDescription">
							{this.state.event.description}
						</div>
						<div className="eventLink">{this.state.event.link}</div>
					</div>
				)}
			</div>
		);
	}
}

export default Event;
