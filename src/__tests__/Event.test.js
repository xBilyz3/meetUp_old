import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import Event from '../Event';

describe('<Event /> component', () => {
	let EventWrapper;
	beforeAll(() => {
		EventWrapper = shallow(<Event />);
	});

	test('componet is rendered', () => {
		expect(EventWrapper).toHaveLength(1);
	});

	test('Event Name is rendered', () => {
		expect(EventWrapper.find('.eventName')).toHaveLength(1);
	});

	test('Event Date is rendered', () => {
		expect(EventWrapper.find('.eventDate')).toHaveLength(1);
	});

	test('show/hide details button is rendered', () => {
		expect(EventWrapper.find('.detailsButton')).toHaveLength(1);
	});

	test('click on button should show details', () => {
		EventWrapper.setState({
			showDetails: false,
		});
		EventWrapper.find('.detailsButton').simulate('click');
		expect(EventWrapper.state('showDetails')).toBe(true);
	});

	test('Event Details is rendered', () => {
		expect(EventWrapper.find('.eventDetails')).toHaveLength(1);
	});

	test('set mock eventdata as state', () => {
		EventWrapper.setState({
			event: {
				created: 1594736289000,
				duration: 10800000,
				id: '271919061',
				name: 'In-Person get together for IT freelancers',
				rsvp_limit: 20,
				date_in_series_pattern: false,
				status: 'upcoming',
				time: 1595262600000,
				local_date: '2020-07-20',
				local_time: '18:30',
				updated: 1594813978000,
				utc_offset: 7200000,
				waitlist_count: 0,
				yes_rsvp_count: 1,
				venue: {
					id: 26618511,
					name: 'Velvet Space',
					lat: 48.15055847167969,
					lon: 11.57834243774414,
					repinned: true,
					address_1: 'Amalienstraße 71, RGB',
					city: 'München',
					country: 'de',
					localized_country_name: 'Germany',
				},
				is_online_event: false,
				group: {
					created: 1533499918000,
					name: 'IT Freelancers Network Developers/Designers/Product Munich',
					id: 29450427,
					join_mode: 'open',
					lat: 48.13999938964844,
					lon: 11.579999923706055,
					urlname: 'IT-Freelancers-Network-Munich',
					who: 'Mitglieder',
					localized_location: 'München, Germany',
					state: '',
					country: 'de',
					region: 'en_US',
					timezone: 'Europe/Berlin',
				},
				link:
					'https://www.meetup.com/IT-Freelancers-Network-Munich/events/271919061/',
				description:
					'<p>Lets have an informal in-person exchange about dev, freelance and tech. We meet at the beautiful Velvet Space Co-Working and if the weather allows it have an outside table. The ticket has a price because of current attendee number limitation to prevent no-shows. The money will be spent on food or returned when you attend</p> ',
				visibility: 'public',
				member_pay_fee: false,
			},
		});
	});
});
