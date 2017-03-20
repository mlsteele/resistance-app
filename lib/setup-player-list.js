// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  Button,
  View
} from 'react-native';
import EasyList from './easy-list.js'
var NewName = require('./new-name.js')
var PlayerChip = require('./player-chip.js')
var PT = React.PropTypes

export default class SetupPlayerList extends Component {
  render() {
    return (
      <View>
        <Text>Players</Text>
        <EasyList
          rows={this.props.playerNames}
          renderRow={this.renderRow}
        />
        <NewName onAddName={this.props.onAddName} />
      </View>
    )
  }

  renderRow = (name) => {
    let onClick = () => {
      this.props.onDeleteName(name);
    };

    return (
      <View>
        <Text>{name}</Text>
        <Button
          title="X"
          onPress={onClick}
          />
      </View>
    );
  }
}

SetupPlayerList.propTypes = {
  playerNames: PT.array.isRequired,
  onDeleteName: PT.func.isRequired,
  onAddName: PT.func.isRequired,
}
