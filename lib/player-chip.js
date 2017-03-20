// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
var PT = React.PropTypes
var Namelet = require('./namelet.js')

var PlayerChip = React.createClass({
    propTypes: {
        name: PT.string.isRequired,
    },

    render: function() {
        return <View testID="player-chip">
            <Namelet name={this.props.name} />
            <Text>{this.props.name}</Text>
        </View>
    },
});

module.exports = PlayerChip
