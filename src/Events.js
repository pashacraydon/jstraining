
import React, { Component, PropTypes } from 'react';
import Event from 'Event';

export default class Events extends Component {
  constructor () {
    super()
    this.getSpeakers = this.getSpeakers.bind(this)
  }

  getSpeakers(event) {
    const { speakers } = this.props.data.Schedule;
    const speakersObj = []



    return speakers.filter(function (speaker) {
      if (!event.speakers) return false
      return event.speakers.indexOf(speaker.serial) >= 0
    })

  }

  render () {
    const { events } = this.props.data.Schedule;
    return (
      <span>
        <ul className="items-list">
          {events.map((event, i) => {
            return <Event key={i} event={event} speakers={this.getSpeakers(event)} />;
          })}
        </ul>
      </span>
    )
  }
}

Events.propTypes = {
  data: PropTypes.shape({
    Schedule: PropTypes.shape({
      events: PropTypes.arrayOf(PropTypes.shape({
        categories: PropTypes.array,
        name: PropTypes.string,
        event_type: PropTypes.string,
        time_start: PropTypes.string,
        time_stop: PropTypes.string
      })),
    }),
  }).isRequired
}
