// @flow
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  Button,
  View
} from 'react-native';

export default class Loading extends Component {
  render() {
    if (this.props.complete) {
      return this.props.content
    } else {
      return <Text>Loading...</Text>
    }
  }
}

Loading.propTypes = {
  complete: PropTypes.bool.isRequired,
  content: React.PropTypes.element.isRequired,
}
