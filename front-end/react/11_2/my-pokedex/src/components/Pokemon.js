import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Pokemon extends Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemonList;
    return (
      <div>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{`Average weight ${value} ${measurementUnit}`}</p>
        </div>
        <div>
          <img src={image} alt={name} />
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.object,
  image: PropTypes.string
};
