// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Switch,
  View
} from 'react-native';
var PT = React.PropTypes
import classnames from './classnames.js'
var cx = classnames

var Settings = React.createClass({
    propTypes: {
        // Mapping of settings to their values.
        settings: PT.object.isRequired,
        onChangeSettings: PT.func.isRequired,
    },

    render: function() {
        var settingOrder = ['morgana', 'mordred', 'oberon', 'merlin', 'percival']
        var items = settingOrder.map(function(setting) {
            return <Toggle key={setting}
                setting={setting}
                value={this.props.settings[setting]}
                onChange={this.onChangeSetting} />
        }.bind(this))
        return <View>
            {items}
        </View>
    },

    onChangeSetting: function(setting) {
        var changes = {}
        changes[setting] = !this.props.settings[setting]
        this.props.onChangeSettings(changes)
    },
});

var Toggle = React.createClass({
    propTypes: {
        setting: PT.string.isRequired,
        value: PT.bool.isRequired,
        onChange: PT.func.isRequired,
    },

    render: function() {
        return <View>
            <Text>{capitalize(this.props.setting)}</Text>
            <Switch value={this.props.value} onValueChange={this.onFlip} />
        </View>
    },

    onFlip: function() {
        this.props.onChange(this.props.setting)
    },
});

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = Settings
