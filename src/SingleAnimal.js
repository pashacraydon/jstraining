
import React, { Component, PropTypes } from 'react';

export default class SingleAnimal extends Component {

  constructor (props) {
    super(props);
    this.onChangeNameInput = this.onChangeNameInput.bind(this);

    this.state = Object.assign({}, props.animal);
  }

  onChangeNameInput(event) {
    this.setState({
      'name': event.target.value
    });
  }

  render () {
    const { name, type, gender, color } = this.state;

    return (
      <li className="single-animal">
        {(name && type) &&
          <span>{name} is a {type}.</span>}
        {(gender === "male") ?
          <span> He </span> : <span> She </span>}
        {color &&
          <span> is {color}.</span>}
        <input type="text" placeholder="Enter a new name" onChange={this.onChangeNameInput} />
      </li>
    )
  }
}

SingleAnimal.propTypes = {
  animal: PropTypes.shape({
    'type': PropTypes.string,
    'name': PropTypes.string,
    'color': PropTypes.string,
    'gender': PropTypes.string
  })
}