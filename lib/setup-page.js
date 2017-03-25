// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import SetupPlayerList from './setup-player-list.js'
import {RButton} from './button.js'
import FontAwesome from 'react-native-fontawesome';
var Settings = require('./settings.js')
var RefLinks = require('./ref-links.js')
var PT = React.PropTypes

var SetupPage = React.createClass({
  propTypes: {
      playerNames: PT.array.isRequired,
      // Mapping of settings to their values.
      settings: PT.object.isRequired,
      onAddName: PT.func.isRequired,
      onDeleteName: PT.func.isRequired,
      onChangeSettings: PT.func.isRequired,
      onNewRoles: PT.func.isRequired,
  },

  render: function() {
    return (
      <ScrollView style={styles.page}>
        <Text style={styles.h2}>Players</Text>
        <SetupPlayerList
            playerNames={this.props.playerNames}
            onAddName={this.props.onAddName}
            onDeleteName={this.props.onDeleteName} />
        <Text style={styles.h2}>Special Roles</Text>
        <Settings
            settings={this.props.settings}
            onChangeSettings={this.props.onChangeSettings} />
        <RButton testID="new-game"
            onPress={this.props.onNewRoles} >
          <Text>New Game</Text>
          <FontAwesome>chevronRight</FontAwesome>
        </RButton>
      </ScrollView>
    );
  },
});

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
  },
  h2: {
    fontSize: 30,
  },
});

module.exports = SetupPage
