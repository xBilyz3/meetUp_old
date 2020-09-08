import React, { Component } from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test('render number input', () => {
    expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1);
  });

  test('render number input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('ShownEvents');
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(
      numberOfEvents
    );
  });

  test('default number of shown events is 32', () => {
    expect(NumberOfEventsWrapper.state('ShownEvents')).toBe(32);
  });

  test('change state when number input changes', () => {
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('ShownEvents')).toBe(10);
  });
});
