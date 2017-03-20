// @flow

import React, { Component } from 'react';
var colorStyleForPlayer = require('./color.js')
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
var PT = React.PropTypes
import classnames from './classnames.js'
var cx = classnames

var Namelet = React.createClass({
    propTypes: {
        name: PT.string.isRequired,
    },

    render: function() {
        var name = this.props.name
        var styles = {'namelet': true}
        if (this.props.name !== "") {
            styles[colorStyleForPlayer(name)] = true
        }
        return <Text>(({name[0]}))</Text>
    },

});

module.exports = Namelet
