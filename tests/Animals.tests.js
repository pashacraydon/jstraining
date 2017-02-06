
import expect from 'expect';
import React from 'react';
import Animals from '../src/Animals';

const { shallow, mount } = enzyme;

const props = [{
    'type': 'elephant',
    'name': 'Zazo',
    'color': 'grey',
    'gender': 'male'
  },
  {
    'type': 'dog',
    'name': 'Fluffy',
    'color': 'white',
    'gender': 'female',
  },
  {
    'type': 'cat',
    'name': 'Muffin',
    'color': 'grey',
    'gender': 'male'
  }];

describe('<Animals />', () => {
  it('should render self and subcomponents', () => {
    const enzyme = shallow(
      <Animals animals={props} />
    );

    expect(enzyme.find('.items-list').length).toExist();
    debugger;
  });
});






