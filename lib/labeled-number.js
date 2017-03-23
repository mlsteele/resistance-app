// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
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
    return (<View style={[styles.container, this.props.style]}>
    <Text style={styles.num}>{this.props.num}</Text>
    <Text style={styles.label}>{this.props.name}</Text>
  </View>);
  },
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontSize: 30,
  },
  num: {
    fontSize: 80,
  },
});

module.exports = LabeledNumber
