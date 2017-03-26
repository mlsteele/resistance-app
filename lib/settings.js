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

export default class Settings extends Component {
  static propTypes: {
    // Mapping of settings to their values.
    settings: PT.object.isRequired,
    onChangeSettings: PT.func.isRequired,
  }

  render() {
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
  }

  onChangeSetting = (setting) => {
    var changes = {}
    changes[setting] = !this.props.settings[setting]
    this.props.onChangeSettings(changes)
  }
}

class Toggle extends Component {
  static propTypes: {
    setting: PT.string.isRequired,
    value: PT.bool.isRequired,
    onChange: PT.func.isRequired,
  }

  render() {
    return <View style={styles.row}>
      <Switch value={this.props.value} onValueChange={this.onFlip} />
      <Text style={styles.label}>{capitalize(this.props.setting)}</Text>
    </View>
  }

  onFlip = () => {
    this.props.onChange(this.props.setting)
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    
    marginHorizontal: 20,
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginHorizontal: 10,
  }
});

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
