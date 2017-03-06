
import React, { Component, PropTypes } from 'react';

export default class Event extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    const { event, speaker } = this.props;

    console.log(speaker)

    if (!event.name || !event.description) {
      return null
    }
    else {
      return (
        <li className="single-event">
          {event.name && 
            <h3>{event.name}</h3>}
          {event.description &&
            <p>{event.description}</p>}
        </li>
      )
    }
  }
}

Event.propTypes = {
  event: PropTypes.shape({
    'name': PropTypes.string
  })
}
