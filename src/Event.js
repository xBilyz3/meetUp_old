import React, { Component } from 'react';

class Event extends Component {
	state = {
		showDetails: false,
	};

	handleShowDetails = () => {
		if (this.state.showDetails === false) {
			this.setState({ showDetails: true });
		} else {
			this.setState({ showDetails: false });
		}
	};

	render() {
		const showDetails = this.state.showDetails;

		return (
			<div>
				<div className="event">
					<div className="eventDate">
						{this.props.event.local_time} | {this.props.event.local_date}
					</div>
					<div className="eventName">{this.props.event.name}</div>
					<div className="groupName">Group: {this.props.event.group.name}</div>
					<div className="going">
						{this.props.event.yes_rsvp_count} people are going
					</div>
					<button
						className="detailsButton"
						onClick={() => this.handleShowDetails()}>
						show details
					</button>
				</div>
				{showDetails && (
					<div className="eventDetails">
						<div className="eventDescription">
							{this.props.event.description}
						</div>
						<div className="eventLink">{this.props.event.link}</div>
					</div>
				)}
			</div>
		);
	}
}

export default Event;
