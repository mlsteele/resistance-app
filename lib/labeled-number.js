// @flow

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
var PT = React.PropTypes

var LabeledNumber = React.createClass({
  propTypes: {
      num: PT.number.isRequired,
      name: PT.string.isRequired,
  },

  render: function() {
    return (<View>
      <Text>{this.props.name}</Text>
      <Text>{this.props.num}</Text>
    </View>);
  },
});

module.exports = LabeledNumber
